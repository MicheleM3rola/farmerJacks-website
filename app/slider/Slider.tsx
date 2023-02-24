'use client'

export default function Slider(){
    return(
        <section  className=" container grid gap-4 text-center sm:text-left">
          <div className="relative">
            <div className="hidden sm:block absolute w-8 bg-logoColor -left-4 h-full"></div>
          <div className="ml-7">
            <small className="tracking-widest text-black uppercase font-cinzelFont text-sm">Off The Beaten Path</small>
            <h2  className="text-3xl font-normal tracking-wide font-cinzelFont text-md">Places without People</h2>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center space-x-4 space-y-4">
            <p className="text-muted max-w-2xl font-cinzelFont text-sm ml-7">We specialize in finding places no one else knows about. Here are a few of our favorite spots for true adventurers.</p>
            <div className="flex space-x-4">
              <button  className="grid place-items-center bg-green-200 hover:bg-green-600/90 rounded-full p-2 text-bkg focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 disabled:text-accent" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="pointer-events-none" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><polyline points="121.9 161.9 88 128 121.9 94.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><line x1="168" y1="128" x2="88" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
              </button>
              <button  className="grid place-items-center bg-green-200 hover:bg-green-600/90 rounded-full p-2 text-bkg focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 disabled:text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" className="pointer-events-none" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><polyline points="134.1 161.9 168 128 134.1 94.1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
              </button>
            </div>
          </div>
          </div>
        </section>
    )
}