import React from 'react'
import logo from '../../../assets/logo.svg'
import paypalimg from '../../../assets/asset 87.png'
import uparrowimg from '../../../assets/asset 106.svg'

const Footer = () => {
    return (
        <>
            <div className=' container-2xl h-auto xs:px-0 md:px-32 pt-20' >

                <div className='w-full h-auto   pb-20   border-0 border-b  grid lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-1 '>
                    <div className='w-full  grid grid-cols-1 ps-12'>
                        <div className='w-auto'>
                            <a href='#'> <img className='h-auto w-32' src={logo}></img></a>
                        </div>
                        <div className='w-full h-auto '>
                            <p className='text-lg text-gray-800 '>The home and elements needed to create <br />beautiful products.</p>
                        </div>
                        <div className='w-full flex'>
                            <div className='w-10 h-10'><a href='#'><i className="fa-brands fa-facebook-f text-gray-500 hover:text-custom-pink text-lg"></i></a></div>
                            <div className='w-10 h-10'><a href='#'><i className="fa-brands fa-twitter  text-gray-500 hover:text-custom-pink text-lg"></i></a></div>
                            <div className='w-10 h-10'><a href='#'><i className="fa-brands fa-linkedin-in  text-gray-500 hover:text-custom-pink text-lg"></i></a></div>
                            <div className='w-10 h-10'><a href='#'><i className="fa-brands fa-youtube  text-gray-500 hover:text-custom-pink text-lg"></i></a></div>

                        </div>
                    </div>


                    <div className='w-full grid grid-cols-1 ps-12 '>
                        <div className='w-full text-2xl font-semibold'>
                            Company
                        </div>
                        <div className='w-full text-lg mt-8'>
                            <a href='#' className='hover:text-custom-pink text-gray-800'>About Us</a>
                        </div>
                        <div className='w-full text-lg pt-1 '>
                            <a href='#' className='hover:text-custom-pink text-gray-800' >Careers</a>
                        </div>
                        <div className='w-full text-lg pt-1 '>
                            <a href='#' className='hover:text-custom-pink text-gray-800'>Store Locations</a>
                        </div>
                        <div className='w-full text-lg pt-1 '>
                            <a href='#' className='hover:text-custom-pink text-gray-800'>Our Blog</a>
                        </div>
                        <div className='w-full text-lg pt-1 '>
                            <a href='#' className='hover:text-custom-pink text-gray-800'>Reviews</a>
                        </div>
                    </div>



                    <div className='w-full grid grid-cols-1 ps-12  '>
                        <div className='w-full text-2xl font-semibold'>
                            Shop
                        </div>
                        <div className='w-full text-lg mt-8'>
                            <a href='#' className='hover:text-custom-pink text-gray-800'>Game & Video</a>
                        </div>
                        <div className='w-full text-lg pt-1 '>
                            <a href='#' className='hover:text-custom-pink text-gray-800' >Phone & Tablets</a>
                        </div>
                        <div className='w-full text-lg pt-1 '>
                            <a href='#' className='hover:text-custom-pink text-gray-800'>Computers & Laptop</a>
                        </div>
                        <div className='w-full text-lg pt-1 '>
                            <a href='#' className='hover:text-custom-pink text-gray-800'>Sport Watches</a>
                        </div>
                        <div className='w-full text-lg pt-1 '>
                            <a href='#' className='hover:text-custom-pink text-gray-800'>Discounts</a>
                        </div>
                    </div>


                    <div className='w-full grid grid-cols-1 ps-12  '>
                        <div className='w-full text-2xl font-semibold'>
                            Support
                        </div>
                        <div className='w-full text-lg mt-8'>
                            <a href='#' className='hover:text-custom-pink text-gray-800'>FAQs</a>
                        </div>
                        <div className='w-full text-lg pt-1 '>
                            <a href='#' className='hover:text-custom-pink text-gray-800' >Reviews</a>
                        </div>
                        <div className='w-full text-lg pt-1 '>
                            <a href='#' className='hover:text-custom-pink text-gray-800'>Contact Us</a>
                        </div>
                        <div className='w-full text-lg pt-1 '>
                            <a href='#' className='hover:text-custom-pink text-gray-800'>Shipping</a>
                        </div>
                        <div className='w-full text-lg pt-1 '>
                            <a href='#' className='hover:text-custom-pink text-gray-800'>Returns</a>
                        </div>
                    </div>


                    <div className='w-full grid grid-cols-1 ps-12'>
                        <div className='w-full text-2xl font-semibold'>
                            Talk To Us
                        </div>
                        <div className='w-full'>
                            <p className='text-lg text-gray-800 mt-8 '>Find a location nearest you. See <a href='#' className='underline text-custom-pink'>  Our Stores</a></p>
                        </div>
                        <div className='w-full text-2xl font-semibold text-gray-500 mt-3 hover:text-custom-pink'>
                            <a href='#'>   +624 423 26 72</a>
                        </div>

                        <div className='w-full text-lg  text-gray-500 mt-3 hover:text-custom-pink'>
                            <a href='#'>support@harry.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' w-full px-32 flex z-5  '>
                <div className='pt-5 pb-10 flex'>
                    <div className='w-1/2 '>
                        <p className='text-lg text-gray-500'>Copyright © 2023 by <a href='#' className='text-custom-pink text-lg '> Hamart  </a>
                            All rights reserved.</p>
                    </div>
                    <div className='w-1/2 '>
                        <img src={paypalimg} className='ms-96'></img>
                    </div>

                </div>
                <a href='#'> <div className='h-12 w-12 rounded-full bg-black shadow-lg shadow-slate-600 z-1 text-white ms-52'>
                    <i class="fa-solid fa-angle-up text-center ms-4 mt-4 "></i>
                </div>
                </a>
            </div>

        </>
    )
}

export default Footer
