import { Backpack, CandlestickChart, Cog, Eye, Languages, MousePointerSquare, Network, UserCog } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import clsx from "clsx";

const VisionCards = () => {
    const colors = [
        "orange",
        "green",
        "blue",
        "blue",
        "yellow",
        "green",
        "blue",
    ]
    const cards = [
        {
            name: "Notre vision",
            perkStyle: "bg-blue-100 text-blue-900",
            textStyle: "text-blue-700",
            Icon: Eye,
            description: "L’école Isoko – La source vise l’épanouissement de chaque élève à travers la libre expression de sa pensée et la confiance en soi, dans le respect de soi et des autres, l’ouverture d’esprit au monde et la créativité, tout en gardant un esprit critique et le sens des responsabilités, notamment citoyenne."
        },
        {
            name: "Nos Racines",
            Icon: Network,
            perkStyle: "bg-red-100 text-red-900",
            textStyle: "text-red-700",
            description: "Isoko - la source est une école internationale à programme Belge reconnue par le MINEDUC (Rwanda) et RESPIBEL (Belgique). L’école fut fondée en 2011 par des parents locaux et internationaux. Elle fut reprise en 2020 par des actionnaires pour assurer la pérennité de l’école. C’est donc dans un environnement international et multiculturel que l’école se développe."
        },
        {
            name: "Nos Professeurs",
            perkStyle: "bg-yellow-100 text-yellow-900",
            textStyle: "text-yellow-700",
            Icon: UserCog,
            description: "Les enseignants profitent régulièrement de formations et de coaching professionnel axés sur les méthodes d’enseignement participatif. L’école est membre de RESPIBEL (Réseau de Soutien Pédagogique Internationale Belge) depuis 2017. Le projet de création du réseau de soutien pédagogique des écoles à programme Belge à l’étranger a été construit en partenariat avec l’école Isoko la Source qui a été en quelque sorte le laboratoire pédagogique de ce projet."
        },
        {
            name: "Notre Mission",
            perkStyle: "bg-green-100 text-green-900",
            textStyle: "text-green-700",
            Icon: MousePointerSquare,
            description: "L’objectif premier de l’école est de permettre aux élèves de bien grandir dans leur globalité. Ils sont ainsi amenés à s’épanouir, à acquérir de nouvelles compétences, à développer leur autonomie pour jouer un rôle actif et responsable dans la vie de tous les jours de façon à leur permettre de découvrir et développer leurs talents."
        },
        {
            name: "Nos Elèves",
            perkStyle: "bg-yellow-100 text-yellow-900",
            textStyle: "text-yellow-700",
            Icon: Backpack,
            description: "Étant donné la petite taille de l’école, les classes sont peu nombreuses et il y règne un esprit familial favorable à un enseignement individualisé. Les contacts très personnalisés entre les professeurs et les élèves permettent d’identifier les éventuelles faiblesses et d’y remédier de manière positive ainsi que d’encourager les points forts de chacun. Les méthodes utilisées sont basées sur les méthodes Montessori en maternelle et les méthodes de Céline Alvarez en primaire."
        },
        {
            name: "Nos Valeurs",
            perkStyle: "bg-blue-100 text-blue-900",
            textStyle: "text-blue-700",
            Icon: CandlestickChart,
            description: `Autonomie, discipline, créativité, équité, respect, excellence. 
            Nos valeurs sont partagées par tous les membres de l’école. 
            Isoko - La source s’implique aussi dans la vie de la communauté en collaborant activement avec le district et donnant une partie de leur recette pour l’aide indigents.
            Accompagnement des élèves en difficulté `
        },
        {
            name: "Enseignement Francophone",
            perkStyle: "bg-yellow-100 text-yellow-900",
            textStyle: "text-yellow-700",
            Icon: Languages,
            description: `Offrant un enseignement en français, l’anglais est enseigné comme deuxième langue moderne à partir de la 1 ère maternelle. L’initiation à la troisième langue a été introduite pour tous les élèves à partir de la 3ème maternelle : le Kinyarwanda ou le Kiswahili.`
        },
    ]
    return (
        <div className='py-20 max-w-[700px]'>
            <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0'>
                {cards.map((perk, i) => (
                    <div
                        key={perk.name}
                        className='text-left md:flex md:items-start md:text-left lg:block lg:text-left'>
                        <div className='md:flex-shrink-0 flex justify-start'>
                            <div className={clsx("h-16 w-16 flex items-center justify-center rounded-full",perk.perkStyle)}>
                                {<perk.Icon className='w-1/3 h-1/3' />}
                            </div>
                        </div>

                        <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                            <h3 className={clsx(`text-base font-medium`,perk.textStyle)}>
                                {perk.name}
                            </h3>
                            <p className='mt-3 text-sm text-muted-foreground'>
                                {perk.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VisionCards;