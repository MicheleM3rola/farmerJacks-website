'use client'
import { useState,useCallback } from "react";
import { CatPagesData } from "@/utils";
import Image from "next/image";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft,faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core"
library.add( faCircleArrowLeft,faCircleArrowRight)


const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const slidesContainerStyles = {
    display: "flex",
    height: "100%",
    transition: "transform ease-out 0.3s",
  };


export default function CatalogueSlider(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const parentWidth = 50;

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

      const getSlideStylesWithBackground = (slideIndex:number) => ({
        ...slideStyles,
        backgroundImage: `url(${CatPagesData[slideIndex].src})`,
        width: `${parentWidth}%`,
      });
      const getSlidesContainerStylesWithWidth = () => ({
        ...slidesContainerStyles,
        width: parentWidth * CatPagesData.length,
        transform: `translateX(${-(currentIndex * parentWidth)}px)`,
      });

    return(
        <div className="w-1/2 flex flex-col justify-start items-center relative">
        <div className="relative h-full">
      
      <div className="overflow-hidden h-full">
        <div style={getSlidesContainerStylesWithWidth()}>
          {CatPagesData.map((_, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            > Hello</div>
          ))}
        </div>
      </div>
    
    </div>
        </div>
    )
}



{/*
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



*/ }