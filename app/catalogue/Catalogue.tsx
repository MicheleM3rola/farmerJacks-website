'use client'


import Image from "next/image";
import { CatPagesData } from "@/utils";
import CatalogueSlider from "./CatalogueSlider";

import logo from '../../public/fjCentro.jpg'

const specials=[
    {
    special:"Managers Specials",
    color:"purple",
    bt:"See Below"
    },
    {
        special:"Monthly Deal",
        color:"blue",
        bt:"See in Store"
        
    
    },
    {
        special:"Everyday Specials",
        color:"orange",
        bt:"See in Store"
        
    
    },
    {
        special:"Deal Depot Special",
        color:"yellow",
        bt:"See in Store"
        
    
    },  
    {
        special:"Weekly Specials",
        color:"brown",
        bt:"Catalogue"
    
    }

]





export default function Catalogue(){

    return(
        <section className="flex flex-col justify-center items-center w-full bg-white border-t-4 border-green-500 ">
            <div className="w-full flex justify-center items-center gap-3 mt-20">
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
            <div className="w-full h-full flex flex-wrap justify-center items-center gap-4 pb-16">
            
           {
            specials.map((special,index)=>{
                return(
                    <div className=" w-96 flex justify-center items-center rounded-2xl bg-gradient-to-r from-logoColor via-logoColor to-green-500 p-1">
                    
                    <div key={index} className="card w-96 bg-base-100 shadow-xl font-cinzelFont">
                    <div className="card-body">
                      <h2 className="card-title">{special.special}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn bg-logoColor">{special.bt}</button>
                      </div>
                    </div>
                  </div>
                  </div>
                )
            })
           }
            
            </div>
           
            
            
        </section>
    )
}