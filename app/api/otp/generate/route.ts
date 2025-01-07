// pages/api/generateOTP.js
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";
import { sendOtp } from "@/lib/mail";
import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { otpTable } from "@/db/schema";

const EMAIL = "dynamiccode00@gmail.com";

export async function POST(req: Request, res: Response) {
  // Generate a six digit number using the crypto module
  const otp = crypto.randomInt(100000, 999999);
  const {subject} = await req.json();
  console.log(subject);

  const ip = req.headers.get("x-forwarded-for");

  const hashedIp = await bcrypt.hash(ip!, 10);

  // Hash the OTP
  const hashedOtp = await bcrypt.hash(otp.toString(), 10);
  
  try {
    const res = await sendOtp(EMAIL, subject, otp.toString());
    // Store the hashed OTP in the database along number and expiry time
    await db.insert(otpTable).values({
      expiry: (Date.now()+24 * 60 * 60 * 1000).toString(), // 24 hours from now
      otp: otp.toString(),
      ip: hashedIp,
    })

    // Respond with a success status
    return  new NextResponse("OTP sent", { status: 200 })
    
  } catch (err) {
    console.error(err);
    return  new NextResponse("Falid to Send OTP", { status: 400 })
  }
}
