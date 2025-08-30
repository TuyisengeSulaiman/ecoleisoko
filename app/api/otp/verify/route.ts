import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import { NextResponse } from "next/server"
import { db } from "@/db/drizzle"
import { otpTable } from "@/db/schema"
import { eq } from "drizzle-orm"

const rateLimiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(2, "3 s"),
})

// export default async function handler(req, res) {
//   const user_ip = req.headers['x-forwarded-for']
//   const { success } = await rateLimiter.limit(user_ip)

//   if (!success) {
//     return res.status(429).json({ error: 'Too Many Requests' })
//   }

//   if (req.method !== 'POST') {
//     return res.status(405).end() // Method Not Allowed
//   }

//   try {
//     // Fetch the OTP record from the database
//     const otpRecord = await otps.findOne({ phone: req.body.phone })

//     if (!otpRecord) {
//       return res.status(400).json({ error: 'Invalid phone number or OTP' })
//     }

//     // Check if the OTP has expired
//     if (Date.now() > otpRecord.expiry) {
//       return res.status(400).json({ error: 'OTP has expired' })
//     }

//     // Check if the OTPs match
//     if (!otpMatch) {
//       return res.status(400).json({ error: 'Invalid phone number or OTP' })
//     }

//     // OTP is valid and has not expired, so we can delete it now
//     await otps.deleteOne({ phone: req.body.phone })

//     // Respond with a success status
//     res.status(200).json({ success: true })
//   } catch (err) {
//     console.error(err)
//     res.status(500).json({ error: 'Could not verify OTP' })
//   } finally {
//     await mongoClient.close()
//   }
// }
export async function POST(req: Request) {
  const user_ip = req.headers.get("x-forwarded-for")
  const { success } = await rateLimiter.limit(user_ip!)
  const { otp } = await req.json()

  if (!success) {
    return new NextResponse("Too Many Requests", { status: 429 })
  }
  try {
    const otpRecords = await db.select().from(otpTable).where(eq(otpTable.otp, otp.toString()))
    const first = otpRecords[0]

    if (!first) {
      return new NextResponse("Invalid  OTP", { status: 400 })
    }

    if (Date.now() > Number(first.expiry)) {
      return new NextResponse("OTP expired", { status: 500 })
    }
    const otpMatch = otp === first.otp
    if (!otpMatch) {
      return new NextResponse("false", { status: 400 })
    }
    await db.delete(otpTable).where(eq(otpTable.otp, otp.toString()))
    return new NextResponse("true", { status: 200 })
  } catch (err) {
    console.error(err)
    return new NextResponse("Could not verify OTP", { status: 500 })
  }
}
