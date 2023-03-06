
import './globals.css'
import {Roboto} from "@next/font/google"


import Navbar from './navigation/nav'

const cinzel = Roboto({
  variable:"--roboto-font",
  weight:["400","300"],
  subsets:['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cinzel.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      
      <head/>
   
      <body>
      
         <Navbar/>
      
        {children}
      
        </body>
    </html>
  )
}
