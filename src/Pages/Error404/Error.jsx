import React from 'react'
import errrimg from '../../../assets/error.svg'
import Navbar from '../../Componants/Navbar'
import Footer from '../../Componants/Footer/Footer'
import Subscribe from '../Homepage/Subscribe_section/Subscribe'

const Error = () => {
    return (
        <>
            <Navbar />
            <div className='container w-full h-auto bg-[#F3F3F7] px-32 pb-16 text-center z-5 relative'>
                <h1 className='text-[500px] font-bold text-white h-auto '>404</h1>
                <img src={errrimg} className='z-1  mx-auto w-1/2 h-auto bottom-96  relative  -mt-80'></img>
                
                <div className='w-full  text-center -mt-80'>
                    <h1 className='text-6xl font-bold '>Oops! Page not found</h1>
                    <p className='text-lg  pt-5 text-gray-400 text-center'>Whoops, this is embarassing. Looks like the page you<br /> were looking for was not found.</p>
                    <div className='w-full h-auto mb-20'><button className=' back_to_home_btn px-7 py-3 bg-custom-pink hover:bg-black mt-10 font-semibold text-white text-lg'>Back To Home <i className=" ms-1 fa-solid fa-arrow-right"></i></button></div>
                </div>

            </div>
            <Subscribe />
            <Footer />
        </>
    )
}

export default Error
