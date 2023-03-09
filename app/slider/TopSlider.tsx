'use client'

import Image from "next/image"
import logoCentro from "../../public/fjcentro2.png"

export default function TopSlider(){
    return(
        <section className=' container grid gap-4 text-center max-w-[100%] md:max-w-[70%] mt-14 text-white'>
            <div>
                <div className="flex justify-center items-center">
                    <Image src={logoCentro} alt="Centro logo" width={70} height={70}/>
                    <small className='tracking-widest uppercase text-sm font-cinzelFont font-normal text-white'>At Centro</small>
                </div>
            
            <h2 className='text-3xl  tracking-wide drop-shadow-text-md font-cinzelFont mt-3'> Indipendent Farmer Jack's</h2>
            </div>
           
           <p className='text-muted  font-cinzelFont text-lg'> An Indipendent Family Bussiness situated in Edinburg Road 51 Forrestfield offering the best prices without compromises </p>
          </section>
    )
}