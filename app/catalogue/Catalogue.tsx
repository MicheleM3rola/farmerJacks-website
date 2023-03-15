'use client'
import { CatPagesData } from "@/utils";
import CatalogueSlider from "./CatalogueSlider";
import { CatalogueData } from "@/types";




export default function Catalogue(){

    return(
        <section className="flex flex-col justify-center items-center w-full bg-white">
            
            
            <div className=" flex justify-center items-center">
            <CatalogueSlider CatPagesData={CatPagesData}/>
            <div className="flex flex-col justify-center items-start text-black">
            <h2 className="text-5xl py-7 font-cinzelFont">Weekly Catalogue</h2>
            <p className="text-lg w-1/2 mb-2 font-cinzelFont">The Catalogue contain  the specials for the week, for the others,come and see us and you won't regret it</p>
           
            </div>
            </div>
            
           
        </section>
    )
}