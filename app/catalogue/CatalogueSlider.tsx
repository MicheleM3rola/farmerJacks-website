'use client'
import { useState,useCallback } from "react";
import { CatalogueData } from "@/types";
import Image from "next/image";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft,faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core"
library.add( faCircleArrowLeft,faCircleArrowRight)





export default function CatalogueSlider({CatPagesData}:{CatPagesData:CatalogueData[]}){
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? CatPagesData.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };

      const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === CatPagesData.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }, [currentIndex, CatPagesData]);

      console.log(CatPagesData)
      
    return(
        <div className="w-1/2 flex flex-col justify-start items-center relative">
       
      
      
        <div className="carousel w-3/5 h-full mx-auto shadow-2xl rounded-lg">
          {CatPagesData.map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="carousel-item w-full relative"
            > 
            <Image src={_.src} alt={_.alt} className="h-full w-full"/>
            </div>
          ))}
          
        </div>
      
        <button className=""> <FontAwesomeIcon icon= {faCircleArrowLeft} className="iconSpecialCatalogue"/></button>
        <button className=""><FontAwesomeIcon icon= {faCircleArrowRight} className="iconSpecialCatalogue"/></button>
    
        </div>
    )
}



