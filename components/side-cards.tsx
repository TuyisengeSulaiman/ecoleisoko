import { Download } from 'lucide-react';
import React from 'react'

function SideCards() {
    const cards: { title: string; image: string; }[] = [
        {
            title: "Suivez-nous sur facebook",
            image: "/docs/primitives/alert-dialog",
        },
        {
            title: "Rentrée 2023-2024",
            image: "/docs/primitives/hover-card",

        },
        {
            title: "Calendrier scolaire 2023-2024",
            image: "/docs/primitives/progress",
        }
    ]
    return (
        <div className="hidden md:block max-w-[300px] border bg-white overflow-hidden h-fit">
            {cards.map(card => (
                <div className="bg-white rounded-lg w-full">
                    <div className="bg-[#4CAF50] max-w-full px-4 py-2 text-white">
                        <h1 className="text-xl font-bold">{card.title}</h1>
                    </div>
                    <img
                        alt="École"
                        height="200"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "280/280",
                            objectFit: "cover",
                        }}
                        width="280"
                        className='w-full'
                    />
                </div>
            ))}
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