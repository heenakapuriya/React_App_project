import React from 'react'
import subscribebackimg from '../../../../assets/asset 89.jpeg'

const Subscribe = () => {
    return (
        <>

            <div className='h-auto w-full relative z-1 justify-center flex grid-cols-1  '>
                <img src={subscribebackimg} className='md:max-h-72 sm:h-80 w-full pt-3 xs:h-96 lg:h-72 '></img>
                <div className='h-auto bg-white lg:mt-10 md:mt-10 sm:mt-8 xs:mt-5 w-10/12   absolute top-0 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 '>
                    <div className=' h-full lg:ps-10  md:p-10 sm:p-7 xs:p-5 grid  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1  '><h1 className='text-4xl font-bold'>Subscribe for<br />
                        Latest Trends & Offers</h1></div>


                    <div className=' h-full  lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1  justify-center'>
                        <div class="flex rounded-md w-full ps-16 mt-14 pe-10  ">
                            <input type="email" className="py-3 px-4 w-full h-20 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 shadow-sm text-sm focus:outline-none relative placeholder:text-lg font-normal text-gray-500 border border-1 border-black " placeholder='Enter your Email' />
                            <button type="button" className="py-2 h-12 px-8 font-semibold bg-black hover:bg-custom-pink text-white text-lg absolute     right-20 mt-4 ">
                                Subscribe
                            </button>

                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Subscribe
