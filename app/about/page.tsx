'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'


export default function About() {

   

    return(
    <main className='flex items-center justify-center h-screen'>
        <h1 className='text-red-600 text-4xl'>About Us</h1>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>

        
    </main>

    )
}

