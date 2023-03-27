"use client";

import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/headerbg.jpg";
import fjBanner from "../../public/fjBan.jpg";

export default function Hero() {
  return (
    <header className=" h-screen  flex justify-center items-center w-full">
      {/*<div className="absolute bg-gradient-to-t inset-0 -bottom-32 top-2/3 md:top-1/3 from-bkgpic to-transparent "></div>*/}

      <div className="h-full relative overflow-hidden box-two border-b-4 border-green-600">
        <Image
          src={heroImage}
          className="h-full w-full object-cover"
          alt="Hero Image"
        />
      </div>
      <div className=" w-10/12 h-full relative bg-bgImage bg-cover">
        <div className="flex flex-col justify-center items-end h-full mr-16 gap-6">
          <Image
            src={fjBanner}
            width={700}
            height={850}
            alt="fj banner"
            className="rounded-lg"
          />
          {/*<h1 className="text-black text-7xl font-cinzelFont font-normal ">Farmer Jack's</h1>*/}
          {/*<small className="text-2xl font-cinzelFont font-normal text-green-600">Forrestfield</small>*/}
          <p className="text-xl text-black font-cinzelFont font-normal w-1/2 text-right">
            Farmer Jack's Forrestfield, an indipendent store for over 30 years
            runned by a family for the families
          </p>
        </div>
      </div>
    </header>
  );
}
//Image by <a href="https://www.freepik.com/free-vector/abstract-background-with-squares_15276013.htm#query=website%20background&position=16&from_view=keyword&track=ais">Freepik</a>
