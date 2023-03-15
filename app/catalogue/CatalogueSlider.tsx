'use client'
import { CatPagesData } from "@/utils";
import Image from "next/image";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft,faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core"
library.add( faCircleArrowLeft,faCircleArrowRight)

export default function CatalogueSlider(){

    return(
        <div className="w-1/2 flex flex-col justify-start items-center relative">
            <div className="carousel w-3/5 h-full mx-auto shadow-2xl rounded-lg ">
                {
                    CatPagesData.map((data,index)=>{
                        return(
                            <div key={index} className="carousel-item w-full relative">
                                <Image src={data.src} alt={data.alt} className="h-full w-full"/>
                            </div> 
                        )
                    })
                }
  </div> 
                    <div className="flex gap-2">
                        <button className=""> <FontAwesomeIcon icon= {faCircleArrowLeft} className="iconSpecialCatalogue"/></button>
                         <button className=""><FontAwesomeIcon icon= {faCircleArrowRight} className="iconSpecialCatalogue"/></button>
                    </div>
        </div>
    )
}

