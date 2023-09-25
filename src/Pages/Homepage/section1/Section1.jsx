import React from 'react'
import './Section1.css'
import girlimage from '../../../../assets/asset 4.png'
import asset1 from '../../../../assets/asset 1.jpeg'


const Section1 = () => {
  return (
    <>
      <div className='container-2xl' >
      <div className=' items-center bg-[#f0f2ee] h-[100vh] w-full  relative  grid lg:grid-cols-2 xs:grid:cols-1  md:grid:cols-2 sm:justify-center md:justify-center'>
              <div className=' h-auto w-1/2 ml-32  grid grid-cols-1 '>
          <h1 className='border-0  text-gray-700  border-custom-pink border-l-4 pl-5 text-lg text-Gray'> Best Ear <br /> HeadPhones</h1>
          <p className='text-7xl font-bold  mt-5'>Music To <br />Fill Your Heart</p>
          <button className=' shopbtn w-1/2  py-3 bg-transparent duration-500 border border-black mt-20 font-semibold'>Shop Now <i className=" ms-1 fa-solid fa-arrow-right"></i></button>
        </div>
        <div className='h-auto w-1/2 mt-40  grid grid-cols-1 '>
          <div className='h-[500px] w-[500px] bg-white rounded-full ml-20 -mt-28 z-10 circle'></div>
          <img src={girlimage} className='absolute bottom-0 z-20'></img>
        </div>
        </div>

      </div>
    </>
  )
}

export default Section1
