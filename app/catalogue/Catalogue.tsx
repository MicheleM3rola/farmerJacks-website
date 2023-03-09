'use client'


import Image from "next/image";
import { CatPagesData } from "@/utils";
import CatalogueSlider from "./CatalogueSlider";

import logo from '../../public/fjCentro.jpg'




export default function Catalogue(){

    return(
        <section className="flex flex-col justify-center items-center w-full bg-white">
            <div className="w-full flex justify-center items-center gap-3 my-20">
            <Image src={logo} alt="logo width={60}"width={90} height={90} className="rounded-lg border border-solid border-white "/>
            <h1 className=" text-5xl font-cinzelFont  text-black">Welcome to Farmer Jack's Forrestield</h1>

            </div>
            
            <div className=" flex justify-center items-center">
            <CatalogueSlider/>
            <div className="flex flex-col justify-center items-start text-black">
            <h2 className="text-5xl py-7 font-cinzelFont">Weekly Catalogue</h2>
            <p className="text-lg w-1/2 mb-2 font-cinzelFont">The Catalogue contain  the specials for the week, for the others,come and see us and you won't regret it</p>
            <button className="btn btn-active font-cinzelFont">Download</button>
            </div>
            </div>
            
           
        </section>
    )
}