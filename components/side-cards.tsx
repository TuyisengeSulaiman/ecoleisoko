import Link from 'next/link';
import { IdeaForm } from './idea-form';


function SideCards() {

    const cards: { title: string; image: string; link: string }[] = [
        {
            title: "Suivez-nous sur facebook",
            image: "/team.jpg",
            link: "https://fb.me/g/p_r42f9fuhfoeLZcyp/T2C08lm7"
        },
        {
            title: "Rentrée 2023-2024",
            image: "/sc.png",
            link: "/inscriptions-et-rentree"

        },
        {
            title: "Calendrier scolaire 2023-2024",
            image: "/calenda.png",
            link: "/calendrier-scolaire-2"
        },
    ]
    return (
        <div className="hidden md:block max-w-[300px] border bg-white overflow-hidden h-fit mb-4">
            {cards.map(card => (
                <Link href={card.link} key={card.link}>
                    <div className="bg-white rounded-lg w-full">
                        <div className="bg-blue-700 max-w-full px-4 py-2 text-white">
                            <h1 className="text-xl font-bold">{card.title}</h1>
                        </div>
                        <img
                            alt="École"
                            height="200"
                            src={card.image}
                            style={{
                                aspectRatio: "280/280",
                                objectFit: "cover",
                            }}
                            width="280"
                            className='w-full'
                        />
                    </div>
                </Link>
            ))}
            <>
                <div className="bg-white rounded-lg w-full">
                    <div className="bg-blue-700 max-w-full px-4 py-2 text-white">
                        <h1 className="text-xl font-bold">Boîte à idées</h1>
                    </div>
                    <IdeaForm />
                </div>
            </>
        </div>
    )
}

export default SideCards
function FacebookIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}