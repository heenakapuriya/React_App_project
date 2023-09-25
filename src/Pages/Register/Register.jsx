import React from 'react'
import Navbar from '../../Componants/Navbar'
import Footer from '../../Componants/Footer/Footer'
import pwdimg from '../../../assets/password.svg'
import userimg from '../../../assets/user.svg'
import showpasswordimg from '../../../assets/showpwd.svg'
import emailimg from '../../../assets/email.svg'


const Register = () => {
    return (

        <>
            <Navbar />
            <div className='container-2xl h-auto flex py-32  justify-center '>
                <div className='h-auto grid grid-cols-1  shadow-2xl py-20 px-5'>

                    <div className='w-full h-auto  text-center xs:grid-cols-1'>
                        <h1 className='text-4xl font-bold  '>Register Now!</h1>
                        <h1 className='text-xl leading-loose'>You can signup with you social account below</h1>
                    </div>

                    <div className='h-auto w-full mt-8 flex px-20 xs:grid-cols-1'>
                        <div class="relative w-full">
                            <input type="text" id="hs-trailing-icon" name="hs-trailing-icon" className="py-5 w-full px-20 text-lg  block  border border-gray-400  focus:z-10 focus:border-none focus:outline focus:outline-custom-pink " placeholder="Enter Your Name" />
                            <div class="absolute inset-y-0 left-10 flex items-center pointer-events-none z-20 pr-4">
                                <img src={userimg} className='h-6 w-6'></img>
                            </div>
                        </div>
                    </div>

                    <div className='h-auto w-full mt-8 flex px-20 xs:grid-cols-1'>
                        <div class="relative w-full">
                            <input type="email" id="hs-trailing-icon" name="hs-trailing-icon" className="py-5 w-full px-20 text-lg  block  border border-gray-400  focus:z-10 focus:border-none focus:outline focus:outline-custom-pink " placeholder="Enter Your Email" />
                            <div class="absolute inset-y-0 left-10 flex items-center pointer-events-none z-20 pr-4">
                                <img src={emailimg} className='h-6 w-6'></img>
                            </div>
                        </div>
                    </div>

                    <div className='h-auto w-full mt-8 flex px-20 xs:grid-cols-1'>
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

                    <div className='h-auto w-full mt-8 flex px-20 xs:grid-cols-1'>
                        <div class="relative w-full">
                            <input type="password" id="hs-trailing-icon" name="hs-trailing-icon" className="py-5 w-full px-20 text-lg  block  border border-gray-400  focus:z-10 focus:border-none focus:outline focus:outline-custom-pink " placeholder="Comfirm Password" />
                            <div class="absolute inset-y-0 left-10 flex items-center pointer-events-none z-20 pr-4">
                                <img src={pwdimg} className='h-6 w-6'></img>
                            </div>
                            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none z-20 pr-4">
                                <img src={showpasswordimg} className='h-6 w-6'></img>
                            </div>
                        </div>
                    </div>



                    <div className='h-auto w-full  px-20 mt-8 xs:grid-cols-1 '>
                        <button className='bg-custom-pink text-white font-bold text-lg w-full h-16 hover:bg-black'>Sign Up</button>
                    </div>

                    <div className='h-auto w-full  px-16 mt-6 grid xs:grid-cols-1 md:grid-cols-2' >
                        <p className='text-gray-400 md:ms-28 flex xs:justify-center '>Already have an account?</p><span><a href='#' className='text-custom-pink ms-2 flex xs:justify-center font-semibold'>Log in</a></span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register
