'use client'


import Image from "next/image";
import { ImagesData } from "@/utils";
import CatalogueSlider from "./CatalogueSlider";

import logo from '../../public/fjBan.jpg'

const specials=[
    {
    special:"Managers Specials",
    color:"purple"
    },
    {
        special:"Monthly Deal",
        color:"blue"
        
    
    },
    {
        special:"Everyday Specials",
        color:"orange"
        
    
    },
    {
        special:"Deal Depot Special",
        color:"yellow"
        
    
    },  
    {
        special:"Weekly Specials",
        color:"brown"
        
    
    }

]





export default function Catalogue(){

    return(
        <section className="flex flex-col justify-center items-center w-full bg-logoColor">
           
            <h1 className=" text-5xl font-cinzelFont mb-20 mt-20 text-white">Welcome to Farmer Jack's Forrestield</h1>
            <div className="flex flex-col justify-center items-center w-full ">
            <div className="w-full h-full flex flex-wrap justify-center items-center gap-2">
            
           {
            specials.map((special,index)=>{
                return(
                    <div key={index} style={{"backgroundColor":`${special.color}`}} className="card w-96 text-primary-content">
                        <div className="card-body">
                        <h2 className="card-title">{special.special}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                    
                    </div>
                    </div>
                )
            })
           }
            
            </div>
            <div className="mt-28 flex ">
            <CatalogueSlider/>
            <div className="flex flex-col justify-center items-start text-white">
            <h2 className="text-5xl py-7 font-cinzelFont">Weekly Catalogue</h2>
            <p className="text-lg w-1/2 mb-2 font-cinzelFont">The Catalogue contain  the specials for the week, for the others,come and see us and you won't regret it</p>
            <button className="btn btn-active font-cinzelFont">Download</button>
            </div>
            </div>
            
            </div>
        </section>
    )
}