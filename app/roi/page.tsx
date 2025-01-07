import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from "next/image"
import Link from "next/link"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { MotDeBienvenue } from '@/components/mot-de-bienvenue'
import { Functionemer } from '@/components/functionemer'
import { buttonVariants } from '@/components/ui/button'


export default function Page() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <div className="bg-white">
        <main className='flex flex-col gap-8 w-full md:w-[700px]'>
          <Link href="/ROI isoko enfants 2024.pdf" className={buttonVariants({})}>
          Télécharger Réglement d'ordre intérieur
          </Link>
        </main>
      </div>
    </div>
  )
}
