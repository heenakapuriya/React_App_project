import React from 'react'
import Navbar from '../../Componants/Navbar'
import Footer from '../../Componants/Footer/Footer'
import msgicon from '../../../assets/contact-icon-1.png'
import locationicon from '../../../assets/contact-icon-2.png'
import peapleicon from '../../../assets/contact-icon-3.png'
import australiaicon from '../../../assets/astralia.png'
import sanfransiscoicon from '../../../assets/sanfransisco.png'
import egypticon from '../../../assets/igypt.png'

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className='container-2xl'>
                <div className='text-center  px-56 pt-44 pb-72 w-full h-auto bg-gradient-to-r from-amber-50 from-10% via-green-50 via-50% to-purple-50 to-90%'>
                    <p className='font-semibold text-sm'>GET TO KNOW US</p>
                    <h1 className='text-7xl font-bold '>Have a project in mind? <br />Let’s talk.</h1>
                </div>

                <div className='px-32'>
                    <div className='h-auto w-full mx-auto  mb-32 -mt-44 flex justify-between '>

                        <div className='h-auto w-[400px] bg-white shadow-lg'>
                            <div className='h-auto w-full flex justify-center pt-14 pb-10 px-36'>
                                <img src={msgicon}></img></div>
                            <div className='h-auto w-full px-20'>
                                <p className='underline text-gray-400 text-center'>Contact</p>
                            </div>
                            <div className='h-auto w-full text-center pt-5 pb-10 '>
                                <a href='#' className=' font-semibold text-black text-2xl hover:text-custom-pink '>location@website.com</a>
                                <br />
                                <a href='#' className=' font-semibold text-black text-2xl hover:text-custom-pink'>+(602) 762 472 96</a>
                            </div>
                        </div>

                        <div className='h-auto w-[400px] bg-white shadow-lg'>
                            <div className='h-auto w-full  flex justify-center pt-14 pb-10  px-36'>
                                <img src={locationicon}></img></div>
                            <div className='h-auto w-full px-20'>
                                <p className='underline text-gray-400 text-center'>Location</p>
                            </div>
                            <div className='h-auto w-full text-center pt-5 pb-10  '>
                                <a href='#' className=' font-semibold text-black text-2xl hover:text-custom-pink '>88 New South Head Rd, Triple,<br /> New York</a>

                            </div>
                        </div>

                        <div className='h-auto w-[400px] bg-white shadow-lg '>
                            <div className='h-auto w-full  flex justify-center pt-14 pb-10 px-36'>
                                <img src={peapleicon}></img></div>
                            <div className='h-auto w-full px-20 '>
                                <p className='underline text-gray-400 text-center'>Social Media</p>
                            </div>
                            <div className='h-auto w-full   text-center pt-5 pb-10   '>
                                <a href='#' className=' font-semibold text-black text-2xl hover:text-custom-pink '>Follow on social media</a>
                                <br />
                                <div className='w-full flex mt-2 justify-center'>
                                    <div className='w-10 h-10'><a href='#'><i className="fa-brands fa-facebook-f text-gray-400 hover:text-custom-pink text-lg"></i></a></div>
                                    <div className='w-10 h-10'><a href='#'><i className="fa-brands fa-twitter  text-gray-400 hover:text-custom-pink text-lg"></i></a></div>
                                    <div className='w-10 h-10'><a href='#'><i className="fa-brands fa-linkedin-in  text-gray-400 hover:text-custom-pink text-lg"></i></a></div>
                                    <div className='w-10 h-10'><a href='#'><i className="fa-brands fa-youtube  text-gray-400 hover:text-custom-pink text-lg"></i></a></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mx-32 border border-gray-400 px-20 py-24'>
                    <h1 className='text-3xl font-semibold'>Send a message</h1>
                    <form>
                        <div className='flex w-full h-14  mt-10'>
                            <div className='w-1/2 pe-5'>
                                <input type='text' className='h-full w-full bg-[#F5F5F8] focus:outline-none focus:border border-custom-pink px-5 focus:bg-white' placeholder='Enter Your Name '>
                                </input>
                            </div>
                            <div className='w-1/2 '>
                                <input type='email' className='h-full w-full bg-[#F5F5F8] focus:outline-none focus:border border-custom-pink px-5 focus:bg-white' placeholder='Enter Your Email '>
                                </input>
                            </div>

                        </div>

                        <div className='flex w-full h-14  mt-5'>
                            <div className='w-1/2 pe-5'>
                                <input type='number' className='h-full w-full bg-[#F5F5F8] focus:outline-none focus:border border-custom-pink px-5 focus:bg-white' placeholder='Mobile no '>
                                </input>
                            </div>
                            <div className='w-1/2 '>
                                <input type='text' className='h-full w-full bg-[#F5F5F8] focus:outline-none focus:border border-custom-pink px-5 focus:bg-white' placeholder='Company '>
                                </input>
                            </div>

                        </div>

                        <div className='flex w-full h-auto  mt-5'>
                            <div className='w-full '>
                                <textarea id="message" rows="4" class="block p-5 h-36 w-full bg-[#F5F5F8] focus:outline-none focus:border border-custom-pink focus:bg-white " placeholder=" Your message "></textarea>
                            </div>
                        </div>

                        <div className='h-auto w-full mt-5 '>
                            <div class="flex items-center ">
                                <input id="red-checkbox" type="checkbox" value="" className='w-5 h-5 accent-custom-pink text-red-600 bg-gray-100 border-gray-300  ' />
                                <label for="red-checkbox" className='ml-2  text-gray-500 '>I am bound by the terms of the Service I accept Privacy Policy. </label>
                            </div>
                        </div>

                        <div className='h-auto w-full mt-5 '>
                            <button className='px-10 py-3 bg-custom-pink text-white font-bold hover:bg-black'>Send message</button>
                        </div>
                    </form>
                </div>

                <div className='px-32 pb-32  w-full h-auto'>
                    <div className='p-20'>
                        <h1 className='font-semibold'>LOCATIONS</h1>
                        <h1 className='text-4xl font-bold'>Come and visit our offices<br /> around the world</h1>

                        <div className='h-auto w-full flex mt-5  border-0 border-b border-gray-100'>
                            <div className='h-auto w-1/3  py-10 '><h1 className='text-xl font-bold'>Australia Office</h1></div>
                            <div className='h-auto w-1/3  flex items-center'>
                                <div className='w-1/3 h-auto'>
                                    <img src={australiaicon} >
                                    </img>
                                </div>
                                <div className='w-full h-auto'>
                                    <div className='w-full h-auto text-gray-800'>
                                        <a href='#' className='hover:text-custom-pink'>contact.location@website.com</a><br />
                                        <a href='#' className='hover:text-custom-pink'>686-324-6838</a>
                                    </div>
                                </div>
                            </div>
                            <div className='h-auto w-1/3  flex items-center justify-end '>
                                <button className='border border-gray-400 text-gray-800 px-8 py-3 font-semibold hover:bg-custom-pink hover:text-white hover:border-none'>View Location</button>
                            </div>
                        </div>

                        <div className='h-auto w-full flex mt-5  border-0 border-b border-gray-100'>
                            <div className='h-auto w-1/3  py-10 '><h1 className='text-xl font-bold'>San Francisco Office</h1></div>
                            <div className='h-auto w-1/3  flex items-center'>
                                <div className='w-1/3 h-auto'>
                                    <img src={sanfransiscoicon} >
                                    </img>
                                </div>
                                <div className='w-full h-auto'>
                                    <div className='w-full h-auto text-gray-800'>
                                        <a href='#' className='hover:text-custom-pink'>contact.location@website.com</a><br />
                                        <a href='#' className='hover:text-custom-pink'>686-324-6810</a>
                                    </div>
                                </div>
                            </div>
                            <div className='h-auto w-1/3  flex items-center justify-end '>
                                <button className='border border-gray-400 text-gray-800 px-8 py-3 font-semibold hover:bg-custom-pink hover:text-white hover:border-none'>View Location</button>
                            </div>
                        </div>

                        <div className='h-auto w-full flex mt-5  border-0 border-b border-gray-100'>
                            <div className='h-auto w-1/3  py-10 '><h1 className='text-xl font-bold'>Egypt Office</h1></div>
                            <div className='h-auto w-1/3  flex items-center'>
                                <div className='w-1/3 h-auto'>
                                    <img src={egypticon} >
                                    </img>
                                </div>
                                <div className='w-full h-auto'>
                                    <div className='w-full h-auto text-gray-800'>
                                        <a href='#' className='hover:text-custom-pink'>contact.location@website.com</a><br />
                                        <a href='#' className='hover:text-custom-pink'>786-324-6810</a>
                                    </div>
                                </div>
                            </div>
                            <div className='h-auto w-1/3  flex items-center justify-end '>
                                <button className='border border-gray-400 text-gray-800 px-8 py-3 font-semibold hover:bg-custom-pink hover:text-white hover:border-none'>View Location</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </>

    )
}

export default ContactUs
