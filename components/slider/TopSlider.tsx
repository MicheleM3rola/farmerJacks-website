"use client";

import Image from "next/image";
import logoCentro from "../../public/fjcentro2.png";

export default function TopSlider() {
  return (
    <section className=" py-10 grid gap-4 text-center w-full   text-white bg-logoColor rounded-tr-full">
      <div>
        <div className="flex justify-center items-center">
          <Image src={logoCentro} alt="Centro logo" width={50} height={50} />
          <small className="tracking-widest uppercase text-sm font-cinzelFont font-normal text-white">
            At Centro
          </small>
        </div>

        <h2 className="text-3xl  tracking-wide drop-shadow-text-md font-cinzelFont mt-3">
          {" "}
          Indipendent Farmer Jack's
        </h2>
      </div>

      <p className="text-muted  font-cinzelFont text-lg">
        {" "}
        An Indipendent Family Bussiness situated in Edinburg Road 51
        Forrestfield offering the best prices without compromises{" "}
      </p>
    </section>
  );
}
