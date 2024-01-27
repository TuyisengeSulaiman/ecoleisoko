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
        <h1 className='text-4xl font-bold mb-4'>Rentrée 2023-2024</h1>
        <div className="wpb-content-wrapper"><div className="vc_row wpb_row vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner"><div className="wpb_wrapper">
          <div className="wpb_text_column wpb_content_element ">
            <div className="wpb_wrapper">
              <p>La nouvelle année scolaire débutera le mardi 29 août 2023 prochain. C’est avec un grand plaisir que l’équipe de l’école accueillera vos enfants.</p>
              <p><strong>Voici le calendrier du déroulement de la rentrée* :</strong><br />
                *Un horaire différent de celui du primaire sera envoyé aux parents des élèves de la maternelle.</p>
              <p><strong>Le mardi 29 août – 1/2 journée</strong></p>
              <p>À 7 h 40, les enseignantes et les enseignants seront dans la cour d’école pour accueillir les élèves. Les parents qui le souhaitent, pourront accompagner leur enfant sur la cour. Ensuite, les élèves seront dirigés vers leur classNamee respective.</p>
              <p>Les cours se termineront à 10 h 30, le départ des autobus est prévu pour 10 h 40. Les élèves ne viendront pas à l’école en après-midi. L’enseignant-e remettra à votre enfant la liste du matériel didactique de base périssable à se procurer à l’école.</p>
              <p><strong>Le mercredi 30 août – 1/2 journée</strong><br />
                Les élèves sont attendus à 7 h 40; ils entreront par l’entrée sur la rue Fredmir. Les élèves marcheurs doivent emprunter le trottoir de la ville afin d’éviter de passer devant les autobus scolaires.</p>
              <p>Les cours se termineront à 10 h 30, le départ des autobus est prévu pour 10 h 40.</p>
              <p><strong>Le jeudi 31 août – Horaire régulier</strong><br />
                Voici l’horaire de l’école :<br />
                Entrée progressive dès 7h40<br />
                Début des cours : 7h50<br />
                Dîner : 11h19 à 12h34<br />
                Fin des cours à 15h00<br />
                Départ des autobus à 15h10</p>
              <p>Pour consulter la lettre complète : <a className="text-blue-500 underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/08/La-rentree-scolaire-lettre-parents-2023-2024.pdf">Lettre rentrée 2023-2024</a></p>
              <p>De plus, veuillez prendre note de la <a className="text-blue-500 underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2022/06/Securite-routiere.pdf">note du SPVM</a> par rapport à la sécurité aux abords de l’école.</p>
              <h2>Fournitures scolaire 2023-2024</h2>
              <p>***NOUVEAUTÉ*** Cette année, nous offrons aux parents la possibilité de commander leurs fournitures scolaires directement auprès des Éditions Vaudreuil. Pour plus d’informations, veuillez consulter <a className="text-blue-500 underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/06/2023-Ecole-Isoko la Source-Lettre-Parent-Fr.pdf">la lettre ci-jointe</a>.</p>
              <p>Voici les listes de fournitures scolaires pour l’année scolaire 2023-2024</p>
              <p><a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/06/Langage-1er-cycle-23-24-fourn.pdf">Fournitures langage 1er cycle</a></p>
              <p><a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/06/Langage-2e-cycle-23-24-fourn.pdf">Fournitures langage 2e cycle</a></p>
              <p><a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/06/Langage-3e-cycle-23-24-fourn.pdf">Fournitures langage 3e cycle</a></p>
              <p><a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/06/Maternelle-23-24-fourn.pdf">Fournitures maternelle</a></p>
              <p><a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/06/1re-annee-23-24-fourn.pdf">Fournitures 1re année</a></p>
              <p><a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/06/2e-annee-23-24-fourn.pdf">Fournitures 2e année</a></p>
              <p><a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/06/3e-annee-23-24-fourn.pdf">Fournitures 3e année</a></p>
              <p><a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/06/4e-annee-23-24-fourn.pdf">Fournitures 4e année</a></p>
              <p><a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/06/5e-annee-23-24-fourn.pdf">Fournitures 5e année</a></p>
              <p><a className="text-blue-500 hover:underline" href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2023/06/6e-annee-23-24-fourn.pdf">Fournitures 6e année</a></p>

            </div>
          </div>
        </div></div></div></div>
        </div>
      </article>
      </main>
      </div>
    </div>
  )
}
