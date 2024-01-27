import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"


export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
      <h2 className="text-3xl font-bold tracking-tight">
        Ecole Isoko la Source<br />
        UPDATE – January 4, 2024
      </h2>
      <div className="w-full md:w-[700px]">
        <AspectRatio ratio={16 / 16}>
          <Image src="/good.jpg" fill alt="Image" className="rounded-md object-cover" />
        </AspectRatio>
      </div>
      <div className='w-full md:w-[700px]'>
        <p>Chers parents,</p>
        <p>Comme prévu, nous vous communiquons les modalités relatives au retour en classe.</p>
        <p><b>Lundi 8 janvier </b>
          Cette journée pédagogique pour&nbsp;<b>tous</b>&nbsp;les établissements du territoire, incluant les écoles qui n’avaient pas prévu cette journée à leur calendrier scolaire, permettra aux membres du personnel de planifier le retour des enfants de même que la poursuite des apprentissages.</p>
        <p>Le service de garde sera disponible, aux modalités habituelles, aux élèves qui utilisent généralement ce service lors des journées pédagogiques. Il sera important de prévoir une boîte-repas pour l’occasion.</p><br />
        <p><b>Mardi 9 janvier </b>
          Tous les élèves sont attendus à l’école pour ce retour en classe.</p><br />
        <p><strong>Plan de retour en classe </strong><br />
          Des mesures seront mises en place afin d’aider les élèves qui nécessiteront un accompagnement soutenu. Soyez assurés que l’école communiquera avec vous rapidement lorsque les informations relatives au plan seront disponibles.</p>
        <p>Tous les membres du personnel sont heureux d’accueillir les élèves lors de ce retour en classe tant attendu. Bienveillante, l’équipe-école s’assurera de les accompagner afin qu’ils réussissent.</p>
        <p>Nous vous souhaitons une belle année 2024.</p>
        <p>La direction</p>
      </div>
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
        <div>
          <div><h2 className="text-left font-Montserrat font-semibold text-lg"><a href="http://Isoko la Source.ecoleouestmtl.com/mot-de-bienvenue/">Bienvenue à l'école internationale Isoko - La source</a></h2><br />
            <div>
              <p>Bienvenue à l'école internationale Isoko - La source 
                C'est avec grand plaisir que nous vous accueillons sur le site Internet de l'école Isoko - La souce, une
                école maternelle, primaire et secondaire à programme Belge, située à Gisenyi, dans le secteur de
                RUBAVU. Sous la tutelle du RESPIBEL (Réseau de Soutien Pédagogique Internationale Belge)</p>
            </div><br /><br />
          </div>
        </div>
      </div>
    </div>
  )
}
