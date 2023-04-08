"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FjLogo from "../../public/fjCentro.jpg";

export default function Navbar() {
  //const[toggleClass,setToggleClass]=useState(false)

  return (
    <div className="navbar z-50 font-cinzelFont ">
      <div className="navbar-start w-full">
        <div className="w-full pl-8">
          <Image
            src={FjLogo}
            alt="logo width={60}"
            width={90}
            height={90}
            className="rounded-lg border border-solid border-white drop-shadow-2xl"
          />
        </div>
        <div className="dropdown w-full">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="bg-base-100 menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-full"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/workwithus">Work with us</Link>
            </li>
            <li>
              <Link href="/">Contacts</Link>
            </li>
            <li className="underline underline-offset-8 decoration-green-500">
              <Link href="/"> Catalogue</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" hidden lg:flex md:w-full">
        <ul className="menu menu-horizontal md:w-full px-8 text-black xl:text-xl lg:text-sm lg:justify-end lg:mr-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/workwithus">Work with us</Link>
          </li>
          <li>
            <Link href="/">Contacts</Link>
          </li>
          <li className="underline underline-offset-8 decoration-green-500">
            <Link href="/"> Catalogue</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

//${toggleClass ? 'left-0': 'left-[-100%]'} top-[11%]
{
  /*
<nav className="flex justify-end selection: items-center lg:absolute w-[92%] lg:left-[4%] mx-auto  z-50 py-2 lg:py-7">
          
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
            
             
              <div className={  `bg-bkgpic lg:bg-transparent duration-500 lg:static absolute lg:min-h-fit min-h-[60vh] ${toggleClass ? 'top-[11%]': 'top-[-100%]'} left-0 w-full flex items-center z-50` }>
                <ul className="w-full flex lg:flex-row flex-col items-center lg:justify-end  gap-5 cursor-pointer text-white text-base lg:text-sm xl:text-lg  font-cinzelFont font-normal">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/workwithus">Work with us</Link></li>
                    <li><Link href="/">Contacts</Link></li>
                    <li className="underline underline-offset-8 decoration-green-500">Catalogue</li>
                </ul>
              </div>

            

            
            
        </nav>

*/
}
