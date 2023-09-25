import React from 'react'
import Navbar from '../../Componants/Navbar'
import Footer from '../../Componants/Footer/Footer'
import emptycartimg from '../../../assets/empty-cart.png'
import Subscribe from '../Homepage/Subscribe_section/Subscribe'

const MyWishlist = () => {
  return (
    <>
      <Navbar />
      <div className='container pt-20 h-auto w-full'>
        <div className='wishlist_main h-auto w-full px-auto py-32 bg-[#F1F1F1]'>
          <h1 className='text-7xl font-bold  text-center'>My WishList</h1>
          <div className='home_wishlist w-full pt-3 flex justify-center'>
            <a href='#' className='text-center hover:text-custom-pink'> Home </a>
            <li className='ps-3 text-gray-500'>Wishlist</li>
          </div>
        </div>

        <div className='w-full h-auto pt-60 pb-20'>
          <img src={emptycartimg} className='h-52 m-auto'></img>
          <div className='w-full text-center'>
            <h1 className='text-xl pt-7'>Your Cart is Empty</h1>
          </div>
          <div className='w-full flex justify-center mt-5'>
            <button className='bg-[#F1F1F1] px-8 py-4 font-bold hover:bg-black hover:text-white'>Go To Shop</button>
          </div>
        </div>

      </div>
      <Subscribe/>
      <Footer />
    </>
  )
}

export default MyWishlist
