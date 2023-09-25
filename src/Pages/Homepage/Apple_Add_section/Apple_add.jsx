import React from 'react'
import apple_bg_image from '../../../../assets/asset 88.jpeg'

const Apple_add = () => {
  return (
    <div>
      <div className='h-auto w-full  relative z-5 flex sm:justify-center sm:w-full '>
        <img src={apple_bg_image} className='h-auto w-full bg-center md:h-[450px] sm:[550px] xs:h-[700px] xs:w-full '></img>
        <div className='z-1 absolute h-auto w-auto top-20 left-0  ms-10 ps-16   md:break-all sm:break-all xs:break-inside-auto '>
          <h1 className='text-gray-700 font-semibold text-lg'>Apple iPhone 12 Pro</h1>
          <a href='#' className=''><h1 className='text-black text-5xl font-bold pt-3 hover:text-custom-pink'>The wait is on:<br /> iphone 12 max pro</h1></a>
          <h1 className='text-gray-700 pt-5 font-medium text-xl'>Last call for up to<span className='text-3xl font-bold text-black'>32%</span>Off!</h1>
          <div className='h-auto w-full mt-10'><button className='h-12 px-7 shadow bg-white text-black font-semibold hover:bg-custom-pink hover:text-white'>Buy Now<i className=" ms-1 fa-solid fa-arrow-right"></i></button></div>
        </div>
      </div>
    </div>
  )
}

export default Apple_add
