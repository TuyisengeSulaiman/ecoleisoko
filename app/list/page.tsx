"use client"
import { generateOTP } from '@/actions/otp'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const Page = () => {
    const [subject, setSubject] = useState('')
    const [otp, setOTP] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [otpSent, setOtpSent] = useState(false)
    const handleSendOTP = async (event: any) => {
        event.preventDefault()
        setIsLoading(true)
        setMessage('') // reset message

        try {
            await generateOTP()
        } catch (error) {
            setIsLoading(false)
            setMessage('Something went wrong. Please try again.')
        }
    }
    return (
        <div className='flex flex-col gap-8'>
            <div className="bg-white">
                <main className='flex flex-col gap-8 w-full md:w-[700px]'>
                    Request Access
                    <form onSubmit={handleSendOTP}>
                        <textarea name="" id="" onChange={(e) => setSubject(e.target.value)} value={subject} placeholder="Subject" className="w-full rounded-lg border border-gray-300 p-4 mb-4" />
                        <Button>
                            Request
                        </Button>
                    </form>
                    {message && <p className="text-center text-sm text-gray-500">{message}</p>}
                    {otpSent && <p className="text-center text-sm text-gray-500">OTP Sent</p>}
                </main>
            </div>
        </div>
    );
}

export default Page;