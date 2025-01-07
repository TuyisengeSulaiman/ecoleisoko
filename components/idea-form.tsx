"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useTransition } from "react"
import { sendId } from "@/actions/sendIdea"
import { toast } from "sonner"

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    idea: z.string().min(2),
})

export function IdeaForm() {
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            idea: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        startTransition(async()=>{
            sendId(values.email,values.name,values.idea).finally(() =>{
                form.reset()
                toast.success("Votre idée est envoyée")
            })
        })
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 p-2">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nom</FormLabel>
                            <FormControl>
                                <Input placeholder="ex: Jean" {...field} disabled={isPending} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="ex: jeam@mail.com" {...field} disabled={isPending} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="idea"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Idée ou Suggestion</FormLabel>
                            <FormControl>
                                <Input placeholder="ex: nouveau cours" {...field} disabled={isPending} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className='bg-blue-700 w-full text-white hover:bg-blue-700' disabled={isPending}>soumettre</Button>
            </form>
        </Form>
    )
}
