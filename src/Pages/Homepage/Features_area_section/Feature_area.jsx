import React from 'react'
import './Feature_area.css'
import shipingimg from '../../../../assets/asset 102.svg'
import refundimg from '../../../../assets/asset 103.svg'
import suppotimg from '../../../../assets/asset 104.svg'
import paymentimg from '../../../../assets/asset 105.svg'


const Feature_area = () => {
    return (
        <div>
            <div className=' w-full h-auto  grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xs:w-full'>
                <div className=' h-32  m-auto  flex '>
                    <div className=' h-32  flex items-center justify-center'>
                        <div className='h-16 w-16  rounded-full border border-gray-200 flex justify-center items-center'>
                            <img src={shipingimg} className='bg-center h-7 w-7 hover:animate-bounce hover:ease-in-out'></img>
                        </div>
                    </div>
                    <div className='w-auto h-32  py-5 px-2'>
                        <h1 className='font-semibold text-xl'>Free Shipping</h1>
                        <h1 className='font-normal text-gray-700 text-lg'>Free Shipping for Orders over $120</h1>
                    </div>
                </div>

                <div className=' h-32  m-auto flex'>
                    <div className='h-32 flex items-center justify-center'>
                        <div className='h-16 w-16 rounded-full border border-gray-200 flex justify-center items-center'>
                            <img src={refundimg} className='bg-center h-7 w-7 hover:animate-bounce hover:ease-in-out'></img>
                        </div>
                    </div>
                    <div className=' h-32  py-5 px-2'>
                        <h1 className='font-semibold text-xl'>Refund</h1>
                        <h1 className='font-normal text-gray-700 text-lg'>Within 30 days for an
                            exchange.</h1>
                    </div>
                </div>

                <div className=' h-32  m-auto flex'>
                    <div className=' h-32  flex items-center justify-center'>
                        <div className='h-16 w-16  rounded-full border border-gray-200 flex justify-center items-center'>
                            <img src={suppotimg} className='bg-center h-7 w-7 hover:animate-bounce hover:ease-in-out'></img>
                        </div>
                    </div>
                    <div className=' h-32  py-5 px-2'>
                        <h1 className='font-semibold text-xl'>Support</h1>
                        <h1 className='font-normal text-gray-700 text-lg'>24 hours a day, 7 days
                            a week

                        </h1>
                    </div>
                </div>


                <div className=' main_feature_pop_effect pop_up  h-32 m-auto flex'>
                    <div className=' h-32  flex items-center justify-center'>
                        <div className='h-16 w-16  rounded-full border border-gray-200 flex justify-center items-center'>
                            <img src={paymentimg} className='paymentimg bg-center h-7 w-7 hover:animate-bounce hover:ease-in-out'></img>
                        </div>
                    </div>
                    <div className=' h-32  py-5 px-2'>
                        <h1 className='font-semibold text-xl'>Payment</h1>
                        <h1 className='font-normal text-gray-700 text-lg'>Pay with Multiple Credit
                            Cards</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feature_area
