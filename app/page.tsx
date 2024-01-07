import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"


export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
      <h2 className="text-3xl font-bold tracking-tight">
        Saint-Luc School<br />
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
        <p><b>Lundi 8 janvier</b>
          Cette journée pédagogique pour&nbsp;<b>tous</b>&nbsp;les établissements du territoire, incluant les écoles qui n’avaient pas prévu cette journée à leur calendrier scolaire, permettra aux membres du personnel de planifier le retour des enfants de même que la poursuite des apprentissages.</p>
        <p>Le service de garde sera disponible, aux modalités habituelles, aux élèves qui utilisent généralement ce service lors des journées pédagogiques. Il sera important de prévoir une boîte-repas pour l’occasion.</p>
        <p><b>Mardi 9 janvier</b>
          Tous les élèves sont attendus à l’école pour ce retour en classe.</p>
        <p>Transport scolaire
          Le service de transport sera disponible pour les élèves concernés.</p>
        <p><b>Important</b>&nbsp;: Le conflit de travail étant toujours en cours entre le transporteur Transco et ses conductrices et conducteurs, les parents concernés par <a href="https://saint-luc.ecoleouestmtl.com/wp-content/uploads/2024/01/Circuits-affectes.pdf">ces&nbsp;circuits</a>&nbsp; (Autobus 21 et 87) doivent prévoir une alternative de transport pour leur enfant.</p>
        <p><strong>Plan de retour en classe</strong>
          Des mesures seront mises en place afin d’aider les élèves qui nécessiteront un accompagnement soutenu. Soyez assurés que l’école communiquera avec vous rapidement lorsque les informations relatives au plan seront disponibles.</p>
        <p>Tous les membres du personnel sont heureux d’accueillir les élèves lors de ce retour en classe tant attendu. Bienveillante, l’équipe-école s’assurera de les accompagner afin qu’ils réussissent.</p>
        <p>Nous vous souhaitons une belle année 2024 sous le signe de la santé et de la paix.</p>
        <p>La direction</p>
      </div>
      <div className='flex justify-between flex-wrap items-center gap-[15px] w-full md:w-[700px]'>
        <div className='w-[250px] rounded-full'>
          <AspectRatio ratio={9 / 9}>
            <Image src="/banner.jpg" alt='school' fill className='rounded-full border-solid border-[5px] border-green-500' />
          </AspectRatio>
        </div>
        <div>
          <div><h2 className="text-left font-Montserrat font-semibold text-lg"><a href="http://saint-luc.ecoleouestmtl.com/mot-de-bienvenue/">Bienvenue à l'école internationale Isoko - La source</a></h2>
            <div>
              <p>Bienvenue à l'école internationale Isoko - La source
                C'est avec grand plaisir que nous vous accueillons sur le site Internet de l'école Isoko - La souce, une
                école maternelle, primaire et secondaire a programme Belge, située à Gisenyi, dans le secteur de
                RUBAVU. Sous la tutelle du RESPIBEL (Réseau de Soutien Pédagogique Internationale Belge)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
