import { ImagesData } from "@/utils"
import Image from "next/image"

export default function ImageSlider(){
    return(
        <div className="-mt-10 sm:-mt-20 lg:-mt-36 container xs:w-screen ">
            <div className="flex transition-transform duration-500">
                {
                    ImagesData.map((data) =>{
                        return(
                            <div key={data.alt} className="relative w-full xs:w-auto flex-grow flex-shrink-0 xs:basis-96 pr-4 "> 
                                
                                <Image src={data.src} alt={data.alt} className="object-cover w-full h-96 [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer"/>
                                <p className=" text-white absolute bottom-4 left-4 px-4 py-2 bg-black font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity">{data.title}</p>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}