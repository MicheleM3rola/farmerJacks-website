"use client";
import Image from "next/image";
import heroImage from "../../public/headerbg.jpg";
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

export default function Products() {
  const scrollLeft = () => {
    const button = document.getElementById("contents") as HTMLDivElement;
    button.scrollLeft -= 400;
  };

  const scrollRight = () => {
    const button = document.getElementById("contents") as HTMLDivElement;
    button.scrollLeft += 400;
  };

  return (
    <section
      id="contents"
      className="flex transition-transform duration-500 overflow-x-auto scroll-smooth carousel w-10/12 mx-auto"
    >
      <div className="relative w-full xs:w-auto flex-grow flex-shrink-0 pr-4 ">
        <div className="card card-compact w-80 shadow-xl bg-logoColor">
          <figure className="h-60 w-full">
            <img src="/img2.jpg" alt="Product pic" className="w-full" />
          </figure>
          <div className="card-body font-cinzelFont font-normal text-white">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn bg-green-500">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full xs:w-auto flex-grow flex-shrink-0  pr-4 ">
        <div className="card card-compact w-80  shadow-xl bg-logoColor">
          <figure className="h-60 w-full">
            <img src="/img1.jpg" alt="Product pic" className="w-full" />
          </figure>
          <div className="card-body font-cinzelFont font-normal text-white">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-green-500">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full xs:w-auto flex-grow flex-shrink-0 pr-4 ">
        <div className="card card-compact w-80 shadow-xl bg-logoColor">
          <figure className="h-60 w-full">
            <img src="/img3.jpg" alt="Product pic" className="w-full" />
          </figure>
          <div className="card-body font-cinzelFont font-normal text-white">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-green-500">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full xs:w-auto flex-grow flex-shrink-0  pr-4 ">
        <div className="card card-compact w-80 bg-logoColor shadow-xl">
          <figure className="h-60 w-full">
            <img src="/img4.jpg" alt="Product pic" className="w-full" />
          </figure>
          <div className="card-body font-cinzelFont font-normal text-white">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-green-500">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full xs:w-auto flex-grow flex-shrink-0  pr-4 ">
        <div className="card card-compact w-80 bg-logoColor shadow-xl">
          <figure className="h-60 w-full">
            <img src="/img5.jpg" alt="Product pic" className="w-full" />
          </figure>
          <div className="card-body font-cinzelFont font-normal text-white">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-green-500">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full xs:w-auto flex-grow flex-shrink-0 pr-4 ">
        <div className="card card-compact w-96 bg-logoColor shadow-xl">
          <figure className="h-60 w-full">
            <img src="/img6.jpg" alt="Product pic" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-green-500">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4 ">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className="h-60 w-full">
            <img src="/img1.jpg" alt="Product pic" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4 ">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className="h-60 w-full">
            <img src="/img7.jpg" alt="Product pic" className="w-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-3">
        <button onClick={scrollLeft} className="">
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            className="fa-2xl text-green-500"
          />
        </button>
        <button onClick={scrollRight} className="">
          <FontAwesomeIcon
            icon={faCircleArrowRight}
            className="fa-2xl text-green-500"
          />
        </button>
      </div>
    </section>
  );
}
