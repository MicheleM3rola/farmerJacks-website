'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import FjLogo from '../../public/fjcentro.png'




export default function Navbar(){
    const[toggleClass,setToggleClass]=useState(false)

    return(
        <nav className="flex justify-between items-center lg:absolute w-[92%] lg:left-[4%] mx-auto  z-50 py-2 lg:py-7">
            <div className="w-full flex justify-start lg:justify-end">
                
                    <Image src={FjLogo} alt="Logo" width={130} height={130} className="rounded-lg "/>
                
              
              

              </div>
              <div className="flex items-center gap-6 lg:hidden">
                    <button className="cursor-pointer" onClick={()=>{
                        setToggleClass(!toggleClass)
                    }}>

                        {toggleClass ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                         </svg>) : 
                                         (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                           </svg>)}
                    </button>
              </div>
            
             
              <div className={  `bg-bkgpic lg:bg-transparent duration-500 lg:static absolute lg:min-h-fit min-h-[60vh] ${toggleClass ? 'top-[10%]': 'top-[-100%]'} left-0 w-full flex items-center` }>
                <ul className="w-full flex lg:flex-row flex-col items-center lg:justify-end  gap-5 cursor-pointer text-black text-base lg:text-sm xl:text-lg  font-cinzelFont font-normal">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/workwithus">Work with us</Link></li>
                    <li><Link href="/">Contacts</Link></li>
                    <li className="underline underline-offset-8 decoration-green-500">Catalogue</li>
                </ul>
              </div>

            

            
            
        </nav>
    )
}




//${toggleClass ? 'left-0': 'left-[-100%]'} top-[11%]