"use client"
import { List } from '@/components/list'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"

const Page = () => {
    const [subject, setSubject] = useState('')
    const [otp, setOTP] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [otpSent, setOtpSent] = useState(false)
    const [otpVerified, setOtpVerified] = useState(false)
    const handleSendOTP = async (event: any) => {
        event.preventDefault()
        setIsLoading(true)
        setMessage('') // reset message

        try {
            const response = await fetch('/api/otp/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ subject }),
            })

            if (response.ok) {
                setMessage("OTP a été envoyé au courrier électronique de l'école.")
                setOtpSent(true)
            } else {
                const data = await response.json()
                setMessage(data.error)
            }
        } catch (error) {
            setMessage("Une erreur s'est produite. Veuillez réessayer.")
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    const handleVerifyOTP = async (event: any) => {
        event.preventDefault()
        setIsLoading(true)
        setMessage('') // reset message

        try {
            const response = await fetch('/api/otp/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ otp }),
            })

            if (response.ok) {
                setMessage('Vérification OTP réussie!')
                setOtpVerified(true)
                setOtpSent(false)
                setOTP('')
            } else {
                const data = await response.json()
                setMessage("Non vérifié")
            }
        } catch (error: any) {
            setMessage("Non vérifié")
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className='flex flex-col gap-8'>
            <div className="bg-white">
                <main className='flex flex-col gap-8 w-full md:w-[700px]'>
                    {otpSent ? (
                        <form onSubmit={handleVerifyOTP} className='space-y-4'>
                            <label className=''>
                                Entrer OTP:
                                <InputOTP maxLength={6} value={otp} onChange={(e) => setOTP(e)}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </label>
                            <div className='flex gap-2'>
                                <Button type="submit" disabled={isLoading} className='bg-blue-700 text-white hover:bg-blue-700'>
                                    {isLoading ? "vérification d'OTP..." : 'vérifier OTP'}
                                </Button>
                                <Button type="button" disabled={isLoading} className='bg-blue-700 text-white hover:bg-blue-700' onClick={() => setOtpSent(false)}>
                                    réinitialiser
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <>
                            Demander le code d'accès
                            <form onSubmit={handleSendOTP}>
                                <textarea name="" id="" onChange={(e) => setSubject(e.target.value)} value={subject} placeholder="Subject" className="w-full rounded-lg border border-gray-300 p-4 mb-4" />
                                <div className='flex gap-2'>
                                    <Button variant="outline">
                                        {isLoading ? 'Envoi de votre demande...' : "demander le code d'accès"}
                                    </Button>
                                    <Button type='button'  onClick={() => setOtpSent(true)}>
                                        Avoir un OTP
                                    </Button>
                                </div>
                            </form>
                        </>
                    )}
                    {message && <p>{message}</p>}

                    {otpVerified && (
                        <List />
                    )}
                </main>
            </div>
        </div>
    );
}

export default Page;