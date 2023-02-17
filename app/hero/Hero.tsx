'use client'

import Image from "next/image"
import Link from "next/link"
import heroImage from "../../public/headerbg.jpg"

export default function Hero(){
    return(
        <header className="min-h-screen flex flex-col justify-evenly items-center w-full">
            <Image src={heroImage} className="absolute h-full w-full -z-20 object-cover aspect-auto object-center " alt="Hero Image"   />
            <h1 className="text-black text-6xl font-bold">Farmer Jacks</h1>
        </header>
    )
}