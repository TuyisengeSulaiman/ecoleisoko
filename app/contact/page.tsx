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
          <article className="post-content">

            <h1 className='text-4xl font-bold mb-4'>Contact</h1>
            <div className="wpb-content-wrapper">
              <div className="vc_row wpb_row vc_row-fluid">
                <div className="wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner"><div className="wpb_wrapper">
                    <div className="vc_empty_space">
                      <span className="vc_empty_space_inner"></span>
                    </div><div className="vc_row wpb_row vc_inner vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-8">
                        <div className="vc_column-inner"><div className="wpb_wrapper">
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <h2><strong>Coordonnées de l’école primaire Saint-Luc<br />
                              </strong></h2>
                              <p>98, rue Fredmir<br />
                                Dollard-des-Ormeaux (Qc) H9A&nbsp; 2R3<br />
                                Téléphone : (514) 855-4212<br />
                                <a href="mailto:direction.saint-luc@csmb.qc.ca" target="_blank" rel="noopener noreferrer">direction.saint-luc@csmb.qc.ca</a></p>
                              <p>&nbsp;</p>
                              <p>Les heures d’ouverture du secrétariat de l’école sont de 7h45 à 11h30 et de 12h45 à 15h30. Vous devez utiliser la porte du service de garde en-dehors de ces heures.</p>
                              <p><strong>Signaler une absence</strong></p>
                              <p>Lorsque votre enfant ne peut venir à l’école, vous devez informer l’école en téléphonant au (<strong>514)&nbsp;855-4212</strong> <strong>poste 1 </strong>(le répondeur téléphonique sera en fonction tous les jours) ou via <a href="https://saint-luc.ecoleouestmtl.com/wp-content/uploads/2022/02/Mozaik-portail-parents.pdf"><strong>Mozaik Parents</strong></a>. Vous devez toujours préciser le motif de l’absence.</p>
                              <p><strong>Service de garde</strong></p>
                              <p>514-855-4212, poste 2</p>
                              <p><a href="mailto:servicedegarde.saint-luc@csmb.qc.ca">servicedegarde.saint-luc@csmb.qc.ca</a></p>

                            </div>
                          </div>
                        </div></div></div><div className="wpb_column vc_column_container vc_col-sm-4"><div className="vc_column-inner"><div className="wpb_wrapper">
                          <div className="wpb_single_image wpb_content_element vc_align_left">
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">

                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="vc_row wpb_row vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="wpb_gmaps_widget wpb_content_element"><div className="wpb_wrapper"><div className="wpb_map_wraper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22375.442521318062!2d-73.82974!3d45.491348!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93b6179007f0d%3A0x7579b96858791233!2s98+Rue+Fredmir%2C+Dollard-des-Ormeaux%2C+QC+H9A+2R3%2C+Canada!5e0!3m2!1sfr!2sus!4v1445438773723" width="600" height="300">
                </iframe>
              </div>
              </div>
              </div>
              </div>
              </div></div></div>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}
