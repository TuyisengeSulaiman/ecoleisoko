/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/b6Xgn1l7VhW
 */
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"

export function Equipe() {
    return (
        <div className="bg-white">
            <main className='flex flex-col gap-8 w-full md:w-[700px]'>
                <section>
                    <div className="flex gap-2 mb-2">
                        <img
                            alt="École"
                            height="200"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "1/1",
                                objectFit: "cover",
                            }}
                            width="200"
                            className="max-w-[200px]"
                        />
                        <div className="flex flex-col gap-5">
                            <h2 className="text-3xl font-bold mb-4">Equipe</h2>
                            <p className="mb-4">
                                L’école primaire  Isoko la Source compte sur une équipe école passionnée et à l’écoute des besoins des élèves. Tous ont leur métier à cœur et aident vos enfants à cheminer vers les prochaines étapes de leur développement.
                            </p>
                        </div>
                    </div>
                    <article className="bg-gray-50 text-gray-600 p-4">
                        <Accordion className="w-full" collapsible type="single" defaultValue="item-0">
                            <AccordionItem value="item-0">
                                <AccordionTrigger>Équipe administrative</AccordionTrigger>
                                <AccordionContent>
                                    <div>
                                        <div className="wpb_wrapper">
                                            <p><strong>Directrice</strong> : <a className="text-blue-600" href="mailto: direction.ecole Isoko la Source@csmb.qc.ca">........</a></p>
                                            <p><strong>Financier</strong> :&nbsp; <a className="text-blue-600" href="mailto: direction.ecole Isoko la Source@csmb.qc.ca">........</a></p>
                                            <p><strong></strong> <br />
                                                <strong></strong></p>
                                            <p><strong></strong><br />
                                                <strong></strong></p>
                                            <p><strong></strong> <a className="text-blue-600" href="mailto: lena.beland2@csmb.qc.ca"></a></p>
                                            <p><strong></strong></p>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Équipe d'enseignants</AccordionTrigger>
                                <AccordionContent><div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                        <p><strong>Maternelle</strong></p>
                                        <p>.....</p>
                                        <p><strong>Primaire</strong></p>
                                        <p>......</p>
                                        <p><strong>Secondaire</strong></p>
                                        <p>......</p>
                                        <p><strong></strong></p>
                                        <p></p>
                                        <p><strong></strong></p>
                                        <p></p>

                                    </div>
                                </div></AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Partenaires</AccordionTrigger>
                                <AccordionContent>
                                
                                
                                    
                                    Psychologue: ......<br/>
                                
                                
                                    Infirmière: ......<br/>
                                    Hygiéniste dentaire: ......<br/>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Règlement d'Ordre Intérieur</AccordionTrigger>
                                <AccordionContent><div className="wpb_wrapper">
                                    <p><strong>Technicienne</strong> : ......</p>
                                    <p><strong>Éducatrices :</strong></p>
                                    <p>......</p>
                                </div></AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </article>
                </section>
            </main>
        </div>
    )
}
