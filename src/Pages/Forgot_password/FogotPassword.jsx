import React from 'react'
import Navbar from '../../Componants/Navbar'
import Footer from '../../Componants/Footer/Footer'
import userimg from '../../../assets/user.svg'

const FogotPassword = () => {
  return (
   <>
   <Navbar />
            <div className='container-2xl h-auto w-full py-32 flex justify-center'>
                <div className='h-auto grid grid-cols-1 shadow-2xl py-20 px-16'>

                    <div className='w-full h-auto grid grid-cols-1  text-center'>
                        <h1 className='text-4xl font-bold  '>Forgot Password?</h1>
                        <h1 className='text-xl leading-loose'>Enter your email address to request password reset.</h1>
                    </div>

                    <div className='h-auto w-full mt-8 md:px-5 grid grid-cols-1 xs:px-0'>
                        <div class="relative w-full">
                            <input type="email" id="hs-trailing-icon" name="hs-trailing-icon" className="py-5 w-full px-20 text-lg  block  border border-gray-400  focus:z-10 focus:border-none focus:outline focus:outline-custom-pink " placeholder=" Email" />
                            <div class="absolute inset-y-0 left-10 flex items-center pointer-events-none z-20 pr-4">
                                <img src={userimg} className='h-6 w-6'></img>
                            </div>
                        </div>
                    </div>


                    <div className='h-auto grid lg:grid-cols-1 w-full  md:px-5 xs:px-0 mt-8 '>
                        <button className='bg-custom-pink text-white font-bold text-lg w-full h-16 hover:bg-black'>Send Request</button>
                    </div>

                    <div className='h-auto w-full  px-5 mt-6 flex xs:flex-wrap md:justify-center  ' >
                        <p className='text-gray-400 '>Remember your Password?</p><span><a href='#' className='text-custom-pink font-semibold'>Log in</a></span>
                    </div>
                </div>
            </div>
            <Footer />
   </>
  )
}

export default FogotPassword
