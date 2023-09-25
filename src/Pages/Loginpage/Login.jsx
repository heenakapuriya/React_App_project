import React from 'react'
import Navbar from '../../Componants/Navbar'
import Footer from '../../Componants/Footer/Footer'
import pwdimg from '../../../assets/password.svg'
import userimg from '../../../assets/user.svg'
import showpasswordimg from '../../../assets/showpwd.svg'


const Login = () => {
    return (
        <>
            <Navbar />
            <div className='container-2xl flex justify-center h-auto w-full py-32 '>
                <div className='h-auto w-auto shadow-2xl  xs:grid-cols-1 py-20 px-20   '>

                    <div className='w-full h-auto grid grid-cols-1  text-center'>
                        <h1 className='text-4xl font-bold  '>Hello Again</h1>
                        <h1 className='text-xl leading-loose'>Enter your credentials to acces your account.</h1>
                    </div>

                    <div className='h-auto w-full mt-8 grid xs:grid-cols-1  '>
                        <div class="relative w-full">
                            <input type="email" id="hs-trailing-icon" name="hs-trailing-icon" className="py-5 w-full px-20 text-lg  block  border border-gray-400  focus:z-10 focus:border-none focus:outline focus:outline-custom-pink " placeholder="Enter Email" />
                            <div class="absolute inset-y-0 left-10 flex items-center pointer-events-none z-20 pr-4">
                                <img src={userimg} className='h-6 w-6'></img>
                            </div>
                        </div>
                    </div>

                    <div className='h-auto w-full mt-8 grid grid-cols-1 '>
                        <div class="relative w-full">
                            <input type="password" id="hs-trailing-icon" name="hs-trailing-icon" className="py-5 w-full px-20 text-lg  block  border border-gray-400  focus:z-10 focus:border-none focus:outline focus:outline-custom-pink " placeholder="Password" />
                            <div class="absolute inset-y-0 left-10 flex items-center pointer-events-none z-20 pr-4">
                                <img src={pwdimg} className='h-6 w-6'></img>
                            </div>
                            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none z-20 pr-4">
                                <img src={showpasswordimg} className='h-6 w-6'></img>
                            </div>
                        </div>
                    </div>

                    <div className='h-auto   mt-8 grid lg:grid-cols-2 md:grid-cols-2 xs:grid-cols-1 '>
                        <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                            <input id="red-checkbox" type="checkbox" value="" className='w-6 h-6  accent-custom-pink text-red-600 bg-gray-100 border-gray-300  focus:ring-red-500  focus:ring-2' />
                            <label for="red-checkbox" className=' text-lg  text-gray-500 ms-2 '>Remember Me</label>
                        </div>
                        <div className='h-auto flex lg:justify-end xs:justify-start xs:ps-0'>
                            <a href='#' className='text-gray-500 hover:text-custom-pink text-lg '>Forgot Password?</a>
                        </div>
                    </div>

                    <div className='h-auto w-full grid xs:grid-cols-1 lg:px-14 mt-8 '>
                        <button className='bg-custom-pink text-white font-bold text-lg w-full h-16 hover:bg-black'>Sign In</button>
                    </div>

                    <div className='h-auto w-full grid grid-cols-2  px-16 mt-6 ' >
                        <p className='text-gray-400  grid grid-cols-1'>Don't have an account?</p><span><a href='#' className='text-custom-pink ms-2 grid grid-cols-1 w-full right-0 font-semibold'>Register Now</a></span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login
