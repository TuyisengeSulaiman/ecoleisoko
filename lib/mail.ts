"use server"
import { render } from "@react-email/render";
import React from "react";
import { Resend } from "resend";
const resend = new Resend("re_a1yZs5zg_K48tjAupmVEXZW4GuMq6JpQQ");
import {EmailComp} from "@/components/ui/email"
import { Navbar } from "@/components/navbar";

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
