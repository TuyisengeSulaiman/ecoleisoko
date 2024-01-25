import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ScrollArea } from "@/components/ui/scroll-area"

import './globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navbar'
import SideCards from '@/components/side-cards'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'École Isoko',
  description: "École D'art",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn(
          'relative h-full font-sans antialiased',
          inter.className
        )}>
        <main className='relative min-h-screen flex flex-col'>
            <Navbar />
            <MaxWidthWrapper className='flex-1 flex gap-4 mt-6'>
              {children}
              <SideCards />
            </MaxWidthWrapper>
            {/* <Footer /> */}
        </main>
      </body>
    </html>
  )
}
