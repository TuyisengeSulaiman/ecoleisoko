import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { MotDeBienvenue } from '@/components/mot-de-bienvenue'
import { Functionemer } from '@/components/functionemer'


export default function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <div className="bg-white">
        <main className='flex flex-col gap-8 w-full md:w-[700px]'>
          <article>
            <h1>Horaire des élèves</h1>
            <div className="flex">

              <p><a href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2021/03/clock.png" >
                <img
                  alt="École"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "1/1",
                    objectFit: "cover",
                  }}
                  width="200"
                /></a>
              </p>
              <div className="h-fit">
                <p>Les heures d’ouverture du secrétariat de l’école sont de 7h45 à 11h20 et de 12h35 à 15h30. Vous devez utiliser la porte du service de garde en-dehors de ces heures.</p>
                <p>Arrivée à l’école – de 7h40 à 7h47</p>
                <p><strong><u>Les élèves doivent arriver à l’école entre 7h 40 et 7h 47.</u></strong> La ponctualité est de mise. Puisqu’il n’y a pas de surveillance avant cette heure, les élèves (à l’exception des élèves du service de garde) ne doivent pas se présenter à l’école avant 7h 40.</p>
              </div>
            </div>
            <p><strong><u>Sachez que les élèves doivent être prêt à travailler à 7h 50.</u></strong></p>
            <ul>
              <li>Vous pouvez enregistrer et imprimer l’horaire de l’élève pour le conserver à portée de main en tout temps. Cliquer sur l’image pour ouvrir le PDF qui peut être imprimé.</li>
              <li><a href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2019/10/Horaire-de-classe.pdf">horaire-de-classe</a></li>
            </ul>
            <p>&nbsp;</p>

          </article>
        </main>
      </div>
    </div>
  )
}
