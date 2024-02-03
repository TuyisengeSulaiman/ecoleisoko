import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import VisionCards from '@/components/vision-cards'


export default function Home() {
  return (
    <div className='flex flex-col gap-8 max-w-[700px]'>
      <div>
        <div><h2 className="text-left text-yellow-700 font-Montserrat font-semibold text-lg"><a href="http://Isoko la Source.ecoleouestmtl.com/mot-de-bienvenue/">Bienvenue à l'école internationale Isoko - La source</a></h2><br />
          <div>
            <p>Bienvenue à l'école internationale Isoko - La source
              C'est avec grand plaisir que nous vous accueillons sur le site Internet de l'école Isoko - La souce, une
              école maternelle, primaire et secondaire à programme Belge, située à Gisenyi, dans le secteur de
              RUBAVU. Sous la tutelle du RESPIBEL (Réseau de Soutien Pédagogique Internationale Belge)</p>
          </div><br />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-green-700 tracking-tight">
        Ecole Isoko la Source<br />
        <span className='text-blue-400'>UPDATE – January 4, 2024</span>
      </h2>
      <div className="w-full md:w-[700px]">
        <AspectRatio ratio={16 / 16}>
          <Image src="/good.jpg" fill alt="Image" className="rounded-md object-cover" />
        </AspectRatio>
      </div>
      <VisionCards />
      <div className='flex justify-between flex-wrap items-center gap-[15px] w-full md:w-[700px]'>
        <div className='w-[250px] rounded-full'>
          <AspectRatio ratio={9 / 9}>
            <Image src="/IMG_3381.jpg" alt='school' fill className='rounded-full border-solid border-[5px] border-green-500 object-contain' />
          </AspectRatio>
        </div>
        <div className='w-[250px] rounded-full'>
          <AspectRatio ratio={9 / 9}>
            <Image src="/IMG_2590.jpg" alt='school' fill className='rounded-full border-solid border-[5px] border-green-500 object-contain' />
          </AspectRatio>
        </div>
      </div>
    </div>
  )
}
