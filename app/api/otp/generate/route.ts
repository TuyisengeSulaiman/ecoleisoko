// pages/api/generateOTP.js
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";
import { sendOtp } from "@/lib/mail";

const EMAIL = "dynamiccode00@gmail.com";

export async function POST(req: Request, res: Response) {
  // Generate a six digit number using the crypto module
  const otp = crypto.randomInt(100000, 999999);
  const body = await req.json();
  console.log(body);

  // Hash the OTP
  const hashedOtp = await bcrypt.hash(otp.toString(), 10);

  // Initialize the Twilio client

  try {
    // Send the OTP via SMS
    // await client.messages.create({
    //   body: `Your OTP is: ${otp}`,
    //   from: process.env.TWILIO_PHONE_NUMBER, // your Twilio number
    //   to: req.body.phone, // your user's phone number
    // })
    await sendOtp(EMAIL, otp.toString());
    console.log(otp)
    // Store the hashed OTP in the database along with the phone number and expiry time
    // const mongoClient = new MongoClient(process.env.MONGODB_URI!);
    // await mongoClient.connect();
    // const otps = mongoClient.db().collection("otps");
    // await otps.insertOne({
    //   email: EMAIL,
    //   otp: hashedOtp,
    //   expiry: Date.now() + 10 * 60 * 1000, // OTP expires after 10 minutes
    // });
    // await mongoClient.close();

    // Respond with a success status
  } catch (err) {
    console.error(err);
  }
}
