import React from 'react'
import Navbar from '../../Componants/Navbar'
import Footer from '../../Componants/Footer/Footer'
import faqimg from '../../../assets/faq.jpg'
import generalimg from '../../../assets/general.svg'
import commuityimg from '../../../assets/community.svg'
import supportimg from '../../../assets/support.svg'

import { Link, Outlet } from 'react-router-dom'



const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className='container-xxl pt-20 w-full h-auto xs:px-0 md:px-32 '>
        <div className='main_faq_homelink h-auto w-full pt-28'>
          <div className='w-full h-auto '>
            <h1 className='text-5xl font-bold text-center'>Frequently Asked Questions</h1>
          </div>

          <div className='home_wishlist w-full pt-3 flex justify-center text-lg'>
            <a href='#' className='  text-center hover:text-custom-pink'> Home </a>
            <li className='ps-3 text-gray-500'>Frequently Asked Questions</li>
          </div>
        </div>

        <div className='w-full mt-14 mb-14 bg-slate-300'>
          <img src={faqimg} className='bg-cover sm:w-full xs:w-full'></img>
        </div>

        <div className='h-auto w-full  '>
          <ul class="flex  flex-wrap">
            <Link to='GeneralQuestion' className=' hover:bg-custom-light-pink hover:text-custom-pink focus:bg-custom-light-pink focus:text-custom-pink'>
              <li class="-mb-px">
                <a class="  py-3 px-6  font-semibold text-lg flex" href="#"><span><img
                  src={generalimg}
                  className='h-5 w-5 mt-1 me-2'

                ></img></span>General Questions</a>
              </li>
            </Link>

            <Link to='Community' className=' hover:bg-custom-light-pink hover:text-custom-pink'>
              <li class="-mb-px">
                <a class=" py-3 px-6  font-semibold text-lg flex" href="#"><span><img
                  src={commuityimg}
                  className='h-5 w-5 mt-1 me-2'
                ></img></span>Community</a>
              </li>
            </Link>

            <Link to='Support' className=' hover:bg-custom-light-pink hover:text-custom-pink'>
              <li class="-mb-px ">
                <a class=" py-3 px-6  font-semibold text-lg flex" href="#"><span><img
                  src={supportimg}
                  className='h-5 w-5 mt-1 me-2'

                ></img></span>Supports</a>
              </li>
            </Link>

          </ul>

        </div>

        
      </div>
      <Outlet/>
      <Footer />
     
    </>
  )
}

export default FAQ
