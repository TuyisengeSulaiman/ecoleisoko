"use server"

import { sendIdea } from "@/lib/mail"

export const sendId = async (email: string,name: string,idea: string)=>{
    await sendIdea(email,name,idea).catch(err=>{
        console.log(err);
    })
}