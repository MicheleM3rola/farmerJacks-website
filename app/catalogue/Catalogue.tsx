'use client'


import Image from "next/image";
import { ImagesData } from "@/utils";
import CatalogueSlider from "./CatalogueSlider";

import logo from '../../public/fjBan.jpg'

export default function Catalogue(){

    return(
        <section className="flex flex-col justify-center items-center w-full">
           
            <h1 className="text-green-600 text-5xl font-cinzelFont font-normal mb-32 ">This week’s catalogue</h1>
            <div className="flex justify-center items-center w-full h-2/3">
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
            <p> We also have a lot of different other specials, that's include :</p>
            <ul>
                <li>Manager Specials</li>
                <li>Monthly Deal</li>
                <li>Everyday Specials</li>
                <li>Deal Depot specials</li>
            </ul>
            
            </div>
            <CatalogueSlider/>
            </div>
        </section>
    )
}