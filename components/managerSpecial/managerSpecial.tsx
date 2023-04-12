"use client";
import Products from "./products";

export default function ManagerSpecial() {
  return (
    <section className=" flex flex-col justify-center items-center  relative pb-14 ">
      <div className=" w-10/12 mx-auto flex flex-col justify-center items-end font-cinzelFont font-normal py-24 gap-3">
        <h1 className="text-5xl text-green-500 font-cinzelFont font-bold">
          Manager's Special
        </h1>
        <small className="text-black">{Date()}</small>
      </div>
      <div className="xs:w-screen pb-14 relative">
        <Products />
      </div>
    </section>
  );
}
