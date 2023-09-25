import React from 'react'
import Navbar from '../../Componants/Navbar'
import Footer from '../../Componants/Footer/Footer'
import Aboutfullimg from '../../../assets/aboutus_image.jpg'
import listedicon from '../../../assets/listproduct.svg'
import lovelyicon from '../../../assets/lovely.svg'
import supporticon from '../../../assets/about_support.svg'
import crossarrowicon from '../../../assets/crossarrow.svg'
import aboutslide1 from '../../../assets/about-gallery-slider-1.jpg'
import aboutslide2 from '../../../assets/about-gallery-slider-2.jpg'
import aboutslide3 from '../../../assets/about-gallery-slider-3.jpg'

import './AboutUs.css'



const AboutUs = () => {

    return (
        <>
            <Navbar />
            <div className='container-2xl z-3 relative'>
                <img src={Aboutfullimg} className='h-[650px] w-full  '></img>
                <div className='h-[650px] w-full z-2  absolute top-0 backdrop-opacity-10 backdrop-invert bg-blue-950/40 '>
                    <div className=' text-center w-full z-1  mt-[300px]' >
                        <p className='text-center text-white text-lg'>About Us</p>
                        <h1 className='text-center text-7xl text-white font-bold'>Welcome to our<br />
                            Harri Shop</h1>
                    </div>
                </div>
            </div>

            <div className='h-auto w-full flex  px-32 py-20 '>
                <div className='w-2/5 h-auto  py-10 '>
                    <h1 className='text-black font-bold text-3xl'>It started with a<br />
                        bang now we are here.</h1>
                </div>

                <div className='w-full  p-10'>
                    <div>
                        <p className='text-lg text-gray-500'>
                            Ut at maximus magna. Vestibulum interdum sapien in facilisis imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ac placerat risus. Nullam eget tortor felis. Nulla facilisi.Vestibulum mattis diam non luctus elementum. Cras sollicitudin, nisi in semper viverra, felis diam consequat mi, quis tincidunt ligula

                            Nam nibh diam, varius quis lectus eget, laoreet cursus metus. morbi augue lectus, dapibus eget justo nec, consectetur auctor nis luctus neque.!
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-auto w-full   px-32 grid grid-cols-3 gap-5 justify-center '>
                <div className='border mainhover border-gray-200 p-10 hover:shadow-2xl group'>
                    <div className='w-full  flex'>
                        <div className='w-1/2'><img src={listedicon} className='group-hover:-translate-y-5'></img></div>
                        <div className='w-1/2 flex justify-end pe-10 pt-5 -rotate-45'><img src={crossarrowicon} className='h-7 w-7 mt-2'></img></div>
                        <div></div>
                    </div>
                    <div className='w-full mt-8'>
                        <p className='text-lg text-gray-500'>10k</p>
                        <h1 className='font-bold text-4xl'>Listed Product</h1>
                    </div>
                </div>


                <div className=' border border-gray-200 p-10 hover:shadow-2xl group'>
                    <div className='w-full  flex'>
                        <div className='w-1/2'><img src={lovelyicon} className='group-hover:-translate-y-5'></img></div>
                        <div className='w-1/2 flex justify-end pe-10 pt-5 -rotate-45'><img src={crossarrowicon} className='h-7 w-7 mt-2'></img></div>
                        <div></div>
                    </div>
                    <div className='w-full mt-8'>
                        <p className='text-lg text-gray-500'>5k</p>
                        <h1 className='font-bold text-4xl'>Lovely Customer</h1>
                    </div>
                </div>

                <div className=' border border-gray-200 p-10 hover:shadow-2xl group'>
                    <div className='w-full  flex'>
                        <div className='w-1/2'><img src={supporticon} className='group-hover:-translate-y-5'></img></div>
                        <div className='w-1/2 flex justify-end pe-10 pt-5 -rotate-45'><img src={crossarrowicon} className='h-7 w-7 mt-2'></img></div>
                        <div></div>
                    </div>
                    <div className='w-full mt-8'>
                        <p className='text-lg text-gray-500'>24h</p>
                        <h1 className='font-bold text-4xl'>Support</h1>
                    </div>
                </div>
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='h-[500px] w-[600px]'><img src={aboutslide1} className='h-[500px] w-[600px]'></img></div>
                </SwiperSlide>
                <SwiperSlide> <div className='h-[500px] w-[600px]'><img src={aboutslide2} className='h-[500px] w-[600px]'></img></div></SwiperSlide>
                <SwiperSlide> <div className='h-[500px] w-[600px]'><img src={aboutslide3} className='h-[500px] w-[600px]'></img></div></SwiperSlide>
                <SwiperSlide> <div className='h-[500px] w-[600px]'><img src={aboutslide1} className='h-[500px] w-[600px]'></img></div></SwiperSlide>
                
                
            </Swiper>


            <Footer />
        </>
    )
}

export default AboutUs
