import Image from "next/image"
import logo from '../../public/fjCentro.jpg'

const specials=[
    {
    special:"Managers Specials",
    color:"purple",
    bt:"See Below"
    },
    {
        special:"Monthly Deal",
        color:"blue",
        bt:"See in Store"
        
    
    },
    {
        special:"Everyday Specials",
        color:"orange",
        bt:"See in Store"
        
    
    },
    {
        special:"Deal Depot Special",
        color:"yellow",
        bt:"See in Store"
        
    
    },  
    {
        special:"Weekly Specials",
        color:"brown",
        bt:"Catalogue"
    
    }

]




export default function AllSpecial(){
    return(
        <div className="  w-full h-full flex  flex-wrap justify-center items-center gap-4 pt-28 pb-14 allSpecial">
            <div className="w-full flex justify-center items-center gap-3 my-20">
            <Image src={logo} alt="logo width={60}"width={90} height={90} className="rounded-lg border border-solid border-white drop-shadow-2xl"/>
            <h1 className=" text-5xl font-cinzelFont font-bold  text-farmer drop-shadow-2xl">Farmer Jack's<span className="pl-2 uppercase text-white">Forrestield</span> </h1>

            </div>
           {
            specials.map((special,index)=>{
                return(
                    <div key={index} className=" w-96 flex justify-center items-center rounded-2xl bg-gradient-to-r from-logoColor via-logoColor to-green-500 p-1">
                    
                    <div  className="card w-96 bg-base-100 shadow-xl font-cinzelFont">
                    <div className="card-body">
                      <h2 className="card-title">{special.special}</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn bg-logoColor">{special.bt}</button>
                      </div>
                    </div>
                  </div>
                  </div>
                )
            })
           }
            
            </div>
    )
}