import AllSpecial from "@/components/catalogue/AllSpecials";
import Catalogue from "@/components/catalogue/Catalogue";
import Hero from "@/components/hero/Hero";
import ManagerSpecial from "@/components/managerSpecial/managerSpecial";
import SliderImg from "@/components/slider/Slider";
import TopSlider from "@/components/slider/TopSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <main className=" relative  pb-16 -mb-16  overflow-hidden bg-transparent">
        <TopSlider />
        <SliderImg />
        <AllSpecial />
        <Catalogue />
        <ManagerSpecial />
      </main>
    </div>
  );
}
