import { useState, useCallback } from "react";
import { CatalogueData } from "@/types";
import Image from "next/image";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faCircleArrowLeft, faCircleArrowRight);

export default function CatalogueSlider({
  CatPagesData,
}: {
  CatPagesData: CatalogueData[];
}) {
  const [current, setCurrent] = useState(0);

  const length = CatPagesData.length;

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  return (
    <div className="w-1/2 flex flex-col justify-start items-center relative">
      <div className="carousel w-3/5 h-full mx-auto shadow-2xl rounded-lg relative">
        {CatPagesData.map((_, slideIndex) => (
          <>
            {slideIndex === current && (
              <div className="carousel-item w-full relative">
                <Image src={_.src} alt={_.alt} className="h-full w-full" />
              </div>
            )}
          </>
        ))}
        <button onClick={prevSlide} className="absolute left-0 top-1/2">
          {" "}
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="fa-2xl text-green-500"
          />
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2">
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="fa-2xl text-green-500"
          />
        </button>
      </div>
    </div>
  );
}
