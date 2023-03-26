"use client";
import Products from "./products";

export default function ManagerSpecial() {
  return (
    <section className=" flex flex-col justify-center items-center bg-logoColor boxTwo relative pb-14">
      <div className="flex flex-col justify-center items-center font-cinzelFont font-normal py-24 gap-3">
        <h1 className="text-5xl text-green-500 font-cinzelFont">
          Manager's Special
        </h1>
        <small className="text-white">fwefwefwefijweif</small>
      </div>
      <div className="xs:w-screen pb-14 relative">
        <Products />
      </div>
    </section>
  );
}
