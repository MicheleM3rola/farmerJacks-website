'use client'

import Image from "next/image"
import Link from "next/link"
import heroImage from "../../public/headerbg.jpg"


export default function Hero(){
    return(
        <header className="min-h-screen flex flex-col justify-evenly items-center w-full">
            
            <div className="absolute bg-gradient-to-t inset-0 -bottom-32 top-1/3 from-bkgpic to-transparent"></div>
            <Image src={heroImage} className="absolute h-full w-full -z-20 object-cover aspect-auto object-center " alt="Hero Image"   />
            <h1 className="text-black text-6xl font-cinzelFont font-normal">Farmer Jacks</h1>
        </header>
    )
}