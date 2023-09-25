import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import camerabluetoothimg from '../../../../assets/asset 83.jpeg'
import ipadtabletimg from '../../../../assets/asset 86.jpeg'
import planercameraimg from '../../../../assets/asset 85.jpeg'
import cattleimg from '../../../../assets/asset 10.jpeg'
import { FreeMode, Pagination } from 'swiper/modules';
import  scrollbar from 'swiper/css/scrollbar'

const ProductCorousol = () => {
    return (
        <>
            <div className='container-xxl px-32 py-20'>
                <Swiper
                scrollbar={{
                    hide: false,

                  }}
                    slidesPerView={4}
                    spaceBetween={30}
                    // freeMode={true}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        976: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}

                    modules={[FreeMode, Pagination]}
                    
                    className="mySwiper grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 pb-16">

                    <SwiperSlide>
                        <div className=' border-0 grid  grid-cols-1 '>
                            <img src={camerabluetoothimg} className='w-[300px] h-56' />
                            <p className='text-gray-700 font-semibold text-center pt-3'>Camera Bluetooth & Headset</p>
                        </div></SwiperSlide>
                    <SwiperSlide><div className=' border-0 grid  grid-cols-1 '>
                        <img src={cattleimg} className='w-[300px] h-56' />
                        <p className='text-gray-700 font-semibold text-center pt-3'>Spining Reel and cattle </p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className=' border-0 grid  grid-cols-1 '>
                        <img src={planercameraimg} className='w-[300px] h-56' />
                        <p className='text-gray-700 font-semibold text-center pt-3'>Planner & Virtual</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className=' border-0 grid  grid-cols-1 '>
                        <img src={ipadtabletimg} className='w-[300px] h-56' />
                        <p className='text-gray-700 font-semibold text-center pt-3'>Ipad Phone & tablets</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className=' border-0 grid  grid-cols-1 '>
                        <img src={camerabluetoothimg} className='w-[300px] h-56' />
                        <p className='text-gray-700 font-semibold text-center pt-3'>Camera Bluetooth & Headset</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className=' border-0 grid  grid-cols-1 '>
                        <img src={cattleimg} className='w-[300px] h-56' />
                        <p className='text-gray-700 font-semibold text-center pt-3'>Camera Bluetooth & Headset</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className=' border-0  grid  grid-cols-1'>
                        <img src={planercameraimg} className='w-[300px] h-56' />
                        <p className='text-gray-700 font-semibold text-center pt-3'>Camera Bluetooth & Headset</p>
                    </div></SwiperSlide>

                </Swiper>

            </div>
        </>
    )
}

export default ProductCorousol
