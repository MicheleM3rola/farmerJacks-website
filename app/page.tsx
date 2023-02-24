import Image from 'next/image'
import Hero from './hero/Hero'
import ImageSlider from './slider/ImageSlider'
import Slider from './slider/Slider'
import TopSlider from './slider/TopSlider'



export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Hero/>
     <main className=' relative mt-16 sm:mt-24 lg:mt-40 pb-16 -mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden bg-bkgpic'>
          <TopSlider/>
          <Slider/>
          <ImageSlider/>
     </main>
     
    </div>
  )
}
