import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { MotDeBienvenue } from '@/components/mot-de-bienvenue'
import { Functionemer } from '@/components/functionemer'


export default function Func() {
  return (
    <div className='flex flex-col gap-8'>
      <div className="bg-white">
        <main className='flex flex-col gap-8 w-full md:w-[700px]'>
          <article className="post-content">
            <h1 className='text-4xl font-bold mb-4'>Calendrier scolaire</h1>
            <p><a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/06/Calendrier-2023-2024-jeunes-version-parents.pdf">Calendrier 2023-2024</a></p>
            <p>&nbsp;</p>
          </article>
        </main>
      </div>
    </div>
  )
}
