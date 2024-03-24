"use client"

import * as React from "react"
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { buttonVariants } from "./ui/button"
import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
// Guide


// Dîner


// Traiteur


// Journées pédagogiques

const ecole: { title: string; href: string; }[] = [
    {
        title: "Mot de bienvenue",
        href: "/mot-de-bienvenue",
    },
    {
        title: "Fonctionnement",
        href: "/fonctionnement",

    },
    {
        title: "Équipe",
        href: "/equipe",
    },
    {
        title: "Projet éducatif",
        href: "/projet-educatif",
    },
    {
        title: "Plan santé et Bien-être",
        href: "/plan-sante-et-bien-etre",

    },
]
const parents: { title: string; href: string; }[] = [
    {
        title: "Rentrée 2023-2024",
        href: "inscriptions-et-rentree",
    },
    {
        title: "Calendrier scolaire",
        href: "/calendrier-scolaire-2",

    },
    {
        title: "Horaire des élèves",
        href: "/horaire-des-eleves",
    },
    {
        title: "Évaluations et bulletins",
        href: "/evaluations-et-bulletins",

    },
    {
        title: "Le sommeil et l’enfant",
        href: "/le-sommeil-et-l’enfant",

    },
    {
        title: "Boite à outils",
        href: "/boite-à-outils",

    },
]
const service: { title: string; href: string; }[] = [
    {
        title: "Bus",
        href: "/bus",
    },
    {
        title: "Traiteur",
        href: "/traiteur",
    },
]
export function Navbar() {
    return (
        <div className="flex-none">
            <div className="relative h-[270px] bg-[url('/IMG_4380.jpg')] hero">
            <Image src={"/umugongo1.jpeg"} width={100} alt="" height={100} className="absolute left-0 h-full bject-fit"/>
                {/* <Image src="/IMG_4380 (1).jpg" alt="Image" fill className="object-fill filter" /> */}
                <Image src={"/umugongo1.jpeg"} width={100} alt="" height={100} className="absolute right-0 top-0 h-full bject-fit"/>

            </div>
            <MaxWidthWrapper className="bg-blue-700">
                <NavigationMenu className="flex-none bg-blue-700 flex justify-center py-4">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <div className={cn(buttonVariants({ variant: 'link' }), 'bg-none cursor-pointer')}>
                                    Accueil
                                </div>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>École</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {ecole.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                            className={cn(buttonVariants({ variant: 'link' }),)}
                                        >
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Parents</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {parents.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                            className={cn(buttonVariants({ variant: 'link' }),)}
                                        >
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Service</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                    {service.map((component) => (
                                        <ListItem
                                            key={component.title}
                                            title={component.title}
                                            href={component.href}
                                            className={cn(buttonVariants({ variant: 'link' }),)}
                                        >
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact" legacyBehavior passHref>
                                <div className={cn(buttonVariants({ variant: 'link' }), 'bg-none cursor-pointer')}>
                                    Contact
                                </div>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="w-full bg-blue-100 text-blue-500 p-[0.5px] font-semibold">
                <div>
                    École ISOKO - La source
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

const ListItem = ({ className, title, href, ...props }: { className: string, title: string, href: string }) => {
    return (
        <li>
            <Link
                href={href}
                className={cn(
                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                    className
                )}
                {...props}
            >
                <div className="text-sm font-medium leading-none">{title}</div>
            </Link>
        </li>
    )
}