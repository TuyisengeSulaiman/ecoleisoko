import { sendOtp } from "@/lib/mail"

export const generateOTP = async () => {
    await sendOtp("dynamiccode00@gmail.com", "123456")
}