import React from 'react'
import './Section1.css'
import girlimage from '../../../../assets/asset 4.png'


const Section1 = () => {
  return (
    <>
      <div className='container-2xl' >
      <div className=' items-center bg-[#f0f2ee] h-[100vh] w-full  relative  grid lg:grid-cols-2 xs:grid:cols-1  md:grid:cols-2 sm:justify-center md:justify-center'>
              <div className=' h-auto w-auto  ml-24 grid grid-cols-1 '>
          <h1 className='border-0  text-gray-500  border-custom-pink border-l-4 pl-5 text-base font-semibold text-Gray'> Best Ear <br /> HeadPhones</h1>
          <p className='text-7xl font-semibold  mt-5'>Music To <br />Fill Your Heart</p>
          <button className=' shopbtn w-36  py-2 bg-transparent duration-500 border text-sm border-black mt-14 font-semibold'>Shop Now <i className=" text-lg fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='h-auto w-1/2 mt-40  grid grid-cols-1 '>
          <div className='h-[600px] w-[600px] bg-white rounded-full ml-32 -mt-28 z-10 circle'></div>
          <img src={girlimage} className='absolute ms-20 bottom-0 z-20'></img>
        </div>
        </div>

      </div>
    </>
  )
}

export default Section1
