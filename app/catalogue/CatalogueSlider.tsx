'use client'
import { ImagesData } from "@/utils";
import Image from "next/image";

export default function CatalogueSlider(){

    return(
        <div className="w-1/2 h-full flex justify-start items-center relative">
            <div className="carousel w-3/5 h-full">
                {
                    ImagesData.map((data,index)=>{
                        return(
                            <div id={`${data.id}`} key={index} className="carousel-item w-full relative">
                                <Image src={data.src} alt={data.alt} className="h-full w-full object-cover object-center"/>
                            </div> 
                        )
                    })
                }
  </div> 

        </div>
    )
}