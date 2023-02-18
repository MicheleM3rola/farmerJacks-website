'use client'

import Image from "next/image"
import Link from "next/link"
import heroImage from "../../public/headerbg.jpg"


export default function Hero(){
    return(
        <header className="min-h-screen flex flex-col justify-evenly items-center w-full">
            
            <div className="absolute bg-gradient-to-t inset-0 -bottom-32 top-1/3 from-bkgpic to-transparent"></div>
            <Image src={heroImage} className="absolute h-full w-full -z-20 object-cover aspect-auto object-center " alt="Hero Image"   />
            <div className="w-5/6 flex flex-col justify-end items-end gap-3">
                <h1 className="text-black text-7xl font-cinzelFont font-normal">Farmer Jack's</h1>
                <small className="text-2xl font-cinzelFont font-normal text-green-600">Forrestfield</small>
                <p className="text-lg font-cinzelFont font-normal w-4/12 text-right">Farmer Jack's Forrestfield, an indipendent store for over 30 years runned by a family for the families</p>
            </div>
            
        </header>
    )
}