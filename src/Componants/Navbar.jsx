import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import usericon from '../../assets/asset 91.svg'
import wishlisticon from '../../assets/asset 92.svg'
import carticon from '../../assets/asset 93.svg'
import searchicon from '../../assets/asset 90.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
    const result = useSelector((state) => state.cartData);
    console.warn("data in header", result);

    return (
        <>
            <div className='container'>

                <nav className="h-20 w-full shadow-lg border fixed bg-[#f0f2ee] px-16 flex z-50">
                    <div className='logo h-20 w-1/4 flex items-center'>
                        <img src={logo} className='h-10 w-40 '></img>

                    </div>


                    <div class="max-w-screen-xl flex flex-wrap items-center w-full  ps-14">


                        <div className="items-center justify-between hidden  w-full md:flex md:w-auto md:order-1" id="navbar-search">
                            <div className="relative mt-3 md:hidden">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>

                            </div>

                            <ul className=" w-full flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100  md:flex-row md:space-x-8 md:mt-0 md:border-0 text-md text-zinc-600">
                                <li>
                                    <Link to='/' className="block py-2 pl-3 pr-4  text-gray-700  hover:text-red-600 bg-transparent md:p-0" aria-current="page">Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/AboutUs' className="block py-2 pl-3 pr-4 text-gray-700 hover:text-red-600 bg-transparent md:p-0">About us</Link>
                                </li>
                                <li>
                                    <Link to='/Shop' className="block py-2 pl-3 pr-4  text-gray-700 hover:text-red-600 bg-transparent md:p-0">Shop</Link>
                                </li>
                                <li className='dropdown'>
                                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex   text-gray-700  hover:text-red-600 bg-transparent">Pages<svg className="w-2 h-2 ml-2.5 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg></button>

                                    <div id="dropdownNavbar" className=" dropdown-item z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow">
                                        <ul className="dropdown-menu w-52 py-2 px-2 text-sm  text-gray-700  font-normal border shadow-lg absolute" aria-labelledby="dropdownLargeButton">
                                            <li className='drop-dash-li'>
                                                <Link to='/FAQ' className="flex px-4 py-1 hover:text-custom-pink"><i className="dashicon mt-1 me-1 fa-solid fa-minus"></i>FAQs</Link>
                                            </li>
                                            <li className='drop-dash-li'>
                                                <Link to='/Privacy' className="flex px-4 py-1 hover:text-custom-pink"><i className="dashicon mt-1 me-1 fa-solid fa-minus"></i>Privacy Policy</Link>
                                            </li>
                                            <li className='drop-dash-li'>
                                                <Link to='/Terms_Condition' className="flex px-4 py-1 hover:text-custom-pink"><i className="dashicon mt-1 me-1 fa-solid fa-minus"></i>Tearms & Conditions</Link>
                                            </li>
                                            <li className='drop-dash-li'>
                                                <Link to='/Login' className="flex px-4 py-1 hover:text-custom-pink"><i className="dashicon mt-1 me-1 fa-solid fa-minus"></i>Login</Link>
                                            </li>
                                            <li className='drop-dash-li'>
                                                <Link to='/Register' className="flex px-4 py-1 hover:text-custom-pink"><i className="dashicon mt-1 me-1 fa-solid fa-minus"></i>Register</Link>
                                            </li>
                                            <li className='drop-dash-li'>
                                                <Link to='/Forgot_Password' className="flex px-4 py-1 hover:text-custom-pink"><i className="dashicon mt-1 me-1 fa-solid fa-minus"></i>Forgot Password</Link>
                                            </li>
                                            <li className='drop-dash-li'>
                                                <Link to='/Cart' className="flex px-4 py-1 hover:text-custom-pink"><i className="dashicon mt-1 me-1 fa-solid fa-minus"></i>My Cart</Link>
                                            </li>
                                            <li className='drop-dash-li'>
                                                <Link to='/MyWishlist' className="flex px-4 py-1 hover:text-custom-pink"><i className="dashicon mt-1 me-1 fa-solid fa-minus"></i>My WishList</Link>
                                            </li>
                                            <li className='drop-dash-li'>
                                                <a href="#" className="flex px-4 py-1 hover:text-custom-pink"><i className="dashicon mt-1 me-1 fa-solid fa-minus"></i>CheckOut</a>
                                            </li>
                                            <li className='drop-dash-li'>
                                                <a href="#" className="flex px-4 py-1 hover:text-custom-pink"><i className="dashicon mt-1 me-1 fa-solid fa-minus"></i>Error 404</a>
                                            </li>
                                        </ul>

                                    </div>
                                </li>

                                <li>
                                    <Link to='/ContactUs' className="block py-2 pl-3 pr-4  text-gray-700  hover:text-red-600 bg-transparent md:p-0">Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className='icons-last  h-20 w-full ms-auto flex items-center justify-end '>
                        <div className='w-96 flex '><input type="text" id="search-navbar" className="block w-full p-2 pl-2 shadow-sm text-sm text-gray-900  rounded-s-full bg-white focus:outline-none sm:hidden lg:block" placeholder="Search For Products.." /><span><div className=' justify-center h-10 w-8 flex items-center pe-1 bg-white rounded-e-full sm:hidden lg:block'><button><img src={searchicon} /></button></div></span></div>
                        <div className='h-8 w-8 ms-4 '>
                            <a href='#'>   <img src={usericon} className=' z-3 relative ms-4 mt-1 h-7 w-7  '></img></a> <div className=' absolute h-5 w-5 bg-custom-pink outline outline-1 outline-white rounded-full z-2 top-5 right-36'></div></div>
                        <div className='h-8 w-8 ms-4 '>
                            <a href='#'>   <img src={wishlisticon} className=' z-3 relative ms-4 mt-1 h-7 w-7 '></img></a> <div className=' absolute h-5 w-5 bg-custom-pink outline outline-1 outline-white rounded-full z-2 top-5 right-24'></div></div>
                        <div className='h-8 w-8 ms-4 '>
                            <button>     <img src={carticon} className=' z-3 relative ms-4 mt-1 h-7 w-7  '></img></button> <div className=' absolute h-5 w-5 bg-custom-pink outline outline-1 outline-white rounded-full z-2 top-5 right-11 text-white  font-mono text-xs pt-1  leading-tight text-center font-bold'>{result.length}</div></div>

                    </div>





                </nav>

            </div>
        </>

    )
}

export default Navbar
