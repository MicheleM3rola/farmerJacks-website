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
        <section className="flex flex-col justify-center items-center w-full">
           
            <h1 className="text-green-600 text-5xl font-cinzelFont font-bold mb-20 ">Welcome to Farmer Jack's Forrestield</h1>
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
            <CatalogueSlider/>
            </div>
        </section>
    )
}