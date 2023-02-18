'use client'

import Image from "next/image"
import Link from "next/link"
import heroImage from "../../public/headerbg.jpg"


export default function Hero(){
    return(
        <header className="min-h-screen flex flex-col justify-evenly items-center w-full">
            <div className="absolute bg-gradient-to-b inset-0 bottom-3/4 from-red-300 to-transparent"></div>
            <div className="absolute inset-0 bottom-32 from-red/80 to-transparent"></div>
            <Image src={heroImage} className="absolute h-full w-full -z-20 object-cover aspect-auto object-center " alt="Hero Image"   />
            <h1 className="text-black text-6xl font-bold">Farmer Jacks</h1>
        </header>
    )
}