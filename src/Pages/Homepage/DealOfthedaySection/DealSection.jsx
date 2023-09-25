import React from 'react'
import camerabluetoothimg from '../../../../assets/asset 82.jpeg'

const DealSection = (props) => {
  const { voucher_name, discount, ticket_time } = props;
  return (
    <>


      <div className='w-full h-auto  border  border-gray-200  z-5 relative  grid grid-cols-3 '>
        
        <div className='w-full p-7 border-0 border-r-2 border-dashed border-gray-200 col-span-2'>
          <div className='w-full h-auto flex'>
            <div className='w-40 h-auto'>
              <img src={camerabluetoothimg} className='h-28 w-32 bg-center bg-cover'></img>
            </div>
            <div className=' ps-2 w-full h-auto  border-0 '>
              <h1 className='ps-2 font-semibold text-gray-700 text-lg'>{voucher_name}</h1>
              <span className='ps-2 text-red-500 text-xl font-bold '> {discount}</span><span className='text-gray-700 text-xl font-bold ms-2'>Off</span>
              <div className='mt-5 flex w-full h-auto justify-evenly'>
                <div className='h-auto w-10  text-center text-sm  border-0  border-r text-gray-700 font-medium'>1<div>DAY</div></div>
                <div className='h-auto w-10  text-center text-sm border-0  border-r text-gray-700 font-medium'>1<div>HRS</div></div>
                <div className='h-auto w-10  text-center text-sm border-0  border-r text-gray-700 font-medium'>1<div>MIN</div></div>
                <div className='h-auto w-10  text-center text-sm  text-gray-700 font-medium'>1<div>SEC</div></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='w-full   pt-10 grid grid-cols-12'>
          <h2 className=' col-span-12 flex justify-center '>Coupon Active</h2>
          <button className=' col-span-12 mx-9 border-dashed border-2 border-emerald-700 mt-0 mb-10 bg-emerald-100  text-emerald-700 '>{ticket_time}</button>
        </div>
      </div>




    </>
  )
}

export default DealSection
