"use server"
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendIdea = async (email: string, name: string, idea: string) => {
  await resend.emails.send({
    from: "Isooko Web <onboarding@resend.dev>",
    to: ["dpcode36@gmail.com"],
    subject: "Idée",
    html: `
      <h1>Idée de ${name}</h1>
      <p style="color: #1D4ED8" >Email: &lt;${email}&gt;</p>
      <hr />
      <h2>${idea}</h2>
      `,
  });
};
