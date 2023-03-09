import Image from 'next/image'
import Catalogue from './catalogue/Catalogue'
import Hero from './hero/Hero'
import SliderImg from './slider/Slider'


import TopSlider from './slider/TopSlider'



export default function Home() {
  return (
    
    <div className='flex flex-col items-center justify-center'>
      <Hero/>
     <main className=' relative  pb-16 -mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden bg-transparent'>
          <TopSlider/>
          <SliderImg/>
          <Catalogue/>
     </main>
     
    </div>
  )
}
