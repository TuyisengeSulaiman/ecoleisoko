"use server"
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendIdea = async (email: string, name: string, idea: string) => {
  await resend.emails.send({
    from: "Isooko Web <idea@ecoleisooko.com>",
    to: ["dynamiccode00@gmail.com","isokolasource@gmail.com"],
    subject: "Idée",
    html: `
      <h1>Idée de ${name}</h1>
      <p style="color: #1D4ED8" >Email: &lt;${email}&gt;</p>
      <hr />
      <h2>${idea}</h2>
      `,
  });
};


export const sendOtp = async (email: string, subject: string, otp: string) => {
  await resend.emails.send({
    from: "Isooko autoriser <autoriser@ecoleisooko.com>",
    to: ["isokolasource@gmail.com","dynamiccode00@gmail.com"],
    subject: `{subject}`,
    html: `
      <h1>Code d'accès</h1>
      <p>Subject: ${subject} </p>
      <h2>fournit cet OTP <b>${otp}</b></h2>
      `,
  });

}