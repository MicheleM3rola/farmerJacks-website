'use client'
import Link from "next/link"
import Image from "next/image"
import FjLogo from '../../public/fjcentro.jpg'

export default function Navbar(){

    return(
        <nav className="w-full bg-slate-300 p-6 flex justify-center items-center">
            <div className="w-5/6 flex items-center justify-between">
              <div className="w-full">
              <Image src={FjLogo} alt="Logo" width={80} height={80} className="rounded-lg"/>
              

              </div>
              <div className="w-full">
                <ul className="w-full flex items-center justify-start gap-5 cursor-pointer text-black text-lg">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/workwithus">Work with us</Link></li>
                    <li className="underline underline-offset-8 decoration-green-500">Catalogue</li>
                </ul>
              </div>
            </div>
            
        </nav>
    )
}