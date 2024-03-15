import Image from "next/image";
import Video from 'next-video';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import VisionCards from '@/components/vision-cards';
import { IdeaForm } from "@/components/idea-form";


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
      </h2>
      <div className='flow-root'>
        <div className='m-2 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
          <Video src="/preview-video.mp4" style={{ borderRadius: 12 }} accentColor="#1D4ED8" muted autoPlay loop />
        </div>
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
      <div className="block md:hidden bg-white rounded-lg sm:mx-auto sm:w-[400px] w-full">
        <div className="bg-blue-700 max-w-full rounded-sm px-4 py-2 text-white">
          <h1 className="text-xl font-bold">Boîte à idées</h1>
        </div>
        <IdeaForm />
      </div>
    </div>
  )
}
