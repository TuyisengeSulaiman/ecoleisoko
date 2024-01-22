import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { MotDeBienvenue } from '@/components/mot-de-bienvenue'


export default function Mot() {
  return (
    <div className='flex flex-col gap-8'>
      <MotDeBienvenue />
    </div>
  )
}
