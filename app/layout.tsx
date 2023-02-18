import './globals.css'
import {Cinzel} from "@next/font/google"


import Navbar from './navigation/nav'

const cinzel = Cinzel({
  variable:"--cinzel-font",
  weight:["400"],
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
      
      <head />
      <body>
      <Navbar/>
      
        {children}
        </body>
    </html>
  )
}
