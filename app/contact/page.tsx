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
                              <h2><strong>Coordonnées de l’école primaire Isoko la Source<br />
                              </strong></h2>
                              <p>98, rue Fredmir<br />
                                Dollard-des-Ormeaux (Qc) H9A&nbsp; 2R3<br />
                                Téléphone : (514) 855-4212<br />
                                <a href="mailto:direction.Isoko la Source@csmb.qc.ca" target="_blank" rel="noopener noreferrer">direction.Isoko la Source@csmb.qc.ca</a></p>
                              <p>&nbsp;</p>
                              <p>Les heures d’ouverture du secrétariat de l’école sont de 7h45 à 11h30 et de 12h45 à 15h30. Vous devez utiliser la porte du service de garde en-dehors de ces heures.</p>
                              <p><strong>Signaler une absence</strong></p>
                              <p>Lorsque votre enfant ne peut venir à l’école, vous devez informer l’école en téléphonant au (<strong>514)&nbsp;855-4212</strong> <strong>poste 1 </strong>(le répondeur téléphonique sera en fonction tous les jours) ou via <a href="https://Isoko la Source.ecoleouestmtl.com/wp-content/uploads/2022/02/Mozaik-portail-parents.pdf"><strong>Mozaik Parents</strong></a>. Vous devez toujours préciser le motif de l’absence.</p>
                              <p><strong>Service de garde</strong></p>
                              <p>514-855-4212, poste 2</p>
                              <p><a href="mailto:servicedegarde.Isoko la Source@csmb.qc.ca">servicedegarde.Isoko la Source@csmb.qc.ca</a></p>

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
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8281.255875412124!2d29.261107513496725!3d-1.7066748353186167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd059bdf4340e9%3A0x50e594f67d6b560b!2sInternational%20School%20Isoko%20-%20La%20Source!5e0!3m2!1sen!2srw!4v1706958462043!5m2!1sen!2srw" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
