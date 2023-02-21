import Image from 'next/image'
import Hero from './hero/Hero'
import Slider from './slider/Slider'



export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Hero/>
     <main className=' relative mt-16 sm:mt-24 lg:mt-40 pb-16 -mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden bg-bkgpic'>
          <section className=' container grid gap-4 text-center max-w-[100%] md:max-w-[70%]'>
            <div>
            <small className='tracking-widest uppercase text-sm font-cinzelFont font-normal text-green-800'>At Centro</small>
            <h2 className='text-3xl  tracking-wide drop-shadow-text-md font-cinzelFont mt-3'> Indipendent Farmer Jack's</h2>
            </div>
           
           <p className='text-muted  font-cinzelFont font-normal'> An Indipendent Family Bussiness situated in Edinburg Road 51 Forrestfield offering the best prices without compromises </p>
          </section>
          <Slider/>
     </main>
     
    </div>
  )
}
