import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { MotDeBienvenue } from '@/components/mot-de-bienvenue'
import { Functionemer } from '@/components/functionemer'
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"


export default function Page() {
  return (
    <div className='flex flex-col gap-8'>
      <div className="bg-white">
        <main className='flex gap-8 w-full md:w-[700px]'>
          <section className='flex gap-2'>
            <div className="flex flex-col gap-2 mb-2">
              <div className="flex flex-col gap-5">
                <h2 className="text-3xl font-bold mb-4">Guide</h2>
                <p className="mb-4 w-[200px]">
                  Cliquer ici pour consulter le Guide de fonctionnement complet du service de garde.
                </p>
              </div>
              <img
                alt="École"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width="200"
              />

            </div>
            <article className="bg-gray-50 flex-1 text-gray-600 p-4">
              <p className="mt-4">Plus de détails à venir.</p>
              <Accordion className="w-full" collapsible type="single" defaultValue="item-0">
                <AccordionItem value="item-0">
                  <AccordionTrigger>Inscription et Horaire</AccordionTrigger>
                  <AccordionContent>
                    <div>
                      Une fiche d’inscription doit être remplie pour tout élève fréquentant le service de garde, et ce, annuellement. La fiche d’inscription permet de préciser, entre autres, les périodes prévues de fréquentation hebdomadaire. Le service de garde ne peut pas répondre aux besoins de garde de dernière minute. Le service de garde scolaire n’est pas une halte-garderie.
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Équipe</AccordionTrigger>
                  <AccordionContent><div className="wpb_text_column wpb_content_element ">
                    <div>
                      <p><strong>Service de garde</strong></p>
                      <p>Naima Merabet – 1<sup>re</sup> années (matin, dîner et soir)</p>
                      <p>Houria Houat – Maternelles (matin, dîner et soir)</p>
                      <p>Lynda Dubé – 1re et 2<sup>e</sup> années(matin, dîner et soir)</p>
                      <p>Carole Bellemare – 3e et 4<sup>e</sup> années (dîner et soir)</p>
                      <p>Karine Kambarean -2<sup>e</sup> et 3<sup>e</sup> années (dîner et soir)</p>
                      <p>Sandy Allard –&nbsp; 5<sup>e</sup> et 6<sup>e</sup> années (dîner et soir)</p>
                      <p>Nadine Bou-Rgeilly – 2<sup>e</sup> et 3<sup>e</sup> années (dîner et soir)</p>
                      <p>Fatina Khazzroun – 1re. 2e et 3e<sup>&nbsp;</sup>années (dîner et soir)</p>
                      <p>Mylène Benitah – Maternelles (dîner)</p>
                      <p>Ghita Rifki – 4<sup>e</sup>, et 5<sup>e</sup> années (dîner)</p>
                      <p>Roula Nakhal – 5<sup>e</sup> années et accueil le soir</p>
                      <p><strong>Service de dîner</strong></p>
                      <p>Jean Mayard Désir – 4<sup>e</sup> et 5e années</p>
                      <p>Denise Girard – 2<sup>e</sup> et 3<sup>e</sup> années</p>
                      <p>Roula Nakhal – 4<sup>e</sup> et 5<sup>e</sup> années</p>
                      <p>Marie-Line Habra – 1<sup>re</sup> et 2e années</p>
                      <p>Caroline Chenonceaux – 1<sup>re</sup>, 2<sup>e</sup> et 3e années</p>
                      <p>Gabrielle Gagnon –&nbsp; 6<sup>e</sup> année</p>
                      <p>Frédéric Gagnon – 2<sup>e</sup> et 3<sup>e</sup> années</p>
                      <p>Beata Malisova – 4<sup>e</sup> et 5<sup>e</sup> années</p>
                      <p>Ann Gagnon et Alexa Le Gallais – 4<sup>e</sup> et 5<sup>e</sup> années</p>

                    </div>
                  </div></AccordionContent>
                </AccordionItem>
              </Accordion>
            </article>
          </section>
        </main>
      </div>
    </div>
  )
}
