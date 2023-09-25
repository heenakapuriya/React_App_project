import React from 'react'
import Navbar from '../Componants/Navbar'
import { useState, useEffect } from 'react'
import productList from './Cart/Redux/ProductAction'
import { addToCart } from './Cart/Redux/Action'
import { useSelector, useDispatch } from 'react-redux'

const Shop = () => {
    let [count, setCount] = useState("")
    let dispatch = useDispatch()
    let data = useSelector(state => state.productData)

    useEffect(() => {
        dispatch(productList())
    }, [])
    return (
        <div>
        <Navbar/>
            <div className='container-2xl w-full h-auto pt-40'>
                <div className='w-10/12 h-auto mx-auto flex justify-between p-5 border'>
                    <h1 className='text-lg'>Showing 1-9 of 27 results</h1>
                    <div>
                        <select name='filter' className='pl-3 pr-12 py-2 border'>
                            <option value='Short Filtering'>Short Filtering</option>
                            <option value='Latest product'>Latest product</option>
                            <option value='Price low to high'>Price low to high</option>
                            <option value='Price high to low'>Price high to low</option>
                        </select>
                    </div>
                </div>
                <div className='w-11/12 h-auto mx-auto flex gap-10'>
                    <div className='w-3/12 h-auto'>
                        <div className="max-w-screen-xl mx-auto px-3 bg-white min-h-sceen">

                            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8  ">

                                <div className="py-3 border-none">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                            <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Ipad Phones & Tablets</span>
                                            <span className="transition group-open:rotate-90">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("phone")}>Phone</li>
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("tablet")}>Tablet</li>
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("ipad")}>Ipad</li>
                                        </ul>
                                    </details>
                                </div>

                                <div className="py-3 border-none">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                            <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>setCount & Virtual</span>
                                            <span className="transition group-open:rotate-90">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("planner")}>Planer</li>
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("virtual")}>Virtual</li>
                                        </ul>
                                    </details>
                                </div>


                                <div className="py-3 border-none">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                            <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Spinning Reel & Kettle</span>
                                            <span className="transition group-open:rotate-90">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("spinning reel")}>Spinning Reel</li>
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("kettle")}>Kettle</li>
                                        </ul>
                                    </details>
                                </div>


                                <div className="py-3 border-none">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                            <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Computers Moniter & Laptop</span>
                                            <span className="transition group-open:rotate-90">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("computer")}>Computer</li>
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("moniter")}>Moniter</li>
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("laptop")}>Laptop</li>
                                        </ul>
                                    </details>
                                </div>


                                <div className="py-3 border-none">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                            <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Exercise Bike & Shaver Clean</span>
                                            <span className="transition group-open:rotate-90">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("exercise-bike")}>Exercise-Bike</li>
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("shaver clean")}>Shaver-Clean</li>
                                        </ul>
                                    </details>
                                </div>


                                <div className="py-3 border-none">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                            <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Wireless & Watches</span>
                                            <span className="transition group-open:rotate-90">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("wireless")}>Wireless</li>
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("watch")} >Watch</li>
                                        </ul>
                                    </details>
                                </div>


                                <div className="py-3 border-none">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                            <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Camera Bluetooth & Headset</span>
                                            <span className="transition group-open:rotate-90">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("camera")}>Camera</li>
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("bluetooth")}>Bluetooth</li>
                                            <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("headset")}>Headset</li>
                                        </ul>
                                    </details>
                                </div>
                            </div>




                            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8  ">
                                <div className="border-none">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none border-0 border-b h-12  mt-5 w-full">
                                            <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Brands</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='rotate-0'><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                            <div className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                                <input type='search' placeholder='Search Here' className='border w-full mt-5 h-10 p-2 focus:outline-none '></input>
                                                <div className='w-auto h-32 mt-5 overflow-y-scroll'>
                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black text-red-600 bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Sony</label>
                                                    </div>

                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black text-red-600 bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Logitech</label>
                                                    </div>

                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black text-red-600 bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Samsung</label>
                                                    </div>


                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black text-red-600 bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Apple</label>
                                                    </div>

                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black text-red-600 bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Deepcool</label>
                                                    </div>


                                                </div>
                                            </div>
                                        </ul>
                                    </details>

                                </div>

                                <div className=" border-none ">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none border-0 border-b h-12  mt-5 w-full">
                                            <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink '>Colors</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='rotate-0'><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                            <div className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">

                                                <div className='w-auto h-40 mt-5 overflow-y-scroll  '>
                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black  bg-gray-100 border-gray-300  mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Black</label>
                                                    </div>

                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black  bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>White</label>
                                                    </div>

                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Red</label>
                                                    </div>


                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black  bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Yellow</label>
                                                    </div>

                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black  bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Green</label>
                                                    </div>

                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black  bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Orange</label>
                                                    </div>

                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black  bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Pink</label>
                                                    </div>

                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black  bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Gray</label>
                                                    </div>

                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black  bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>Blue</label>
                                                    </div>

                                                </div>
                                            </div>
                                        </ul>
                                    </details>

                                </div>


                                <div className=" border-none ">
                                    <details className="group">
                                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none border-0 border-b h-12  mt-5 w-full">
                                            <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink '>Prize</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='rotate-0'><path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </summary>
                                        <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                            <div className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">

                                                <div className='w-auto h-40 mt-5   '>
                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black  bg-gray-100 border-gray-300  mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>$10.00 - $49.00</label>
                                                    </div>

                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black  bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>$50.00 - $99.00</label>
                                                    </div>

                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>$100.00 - $199.00</label>
                                                    </div>


                                                    <div class=" items-center flex xs:w-full sm:grid-cols-1    ">
                                                        <input id="checkbox" type="checkbox" value="" className='w-4 h-4 accent-black  bg-gray-100 border-gray-300   mt-2' />
                                                        <label for="checkbox" className=' text-md  text-gray-500 ms-2 mt-2 '>$200.00+</label>
                                                    </div>


                                                </div>
                                            </div>
                                        </ul>
                                    </details>

                                </div>

                            </div>

                        </div>
                        <div className='bg-red-700 w-full'>
                            <button className='bg-custom-pink py-2 w-full text-white font-semibold text-lg hover:bg-blue-500 duration-500'>Reset Filter</button>
                        </div>

                    </div>


                    <div className='w-11/12 h-auto mt-10 '>
                        <div className='flex gap-14 flex-wrap'>
                            {count === "" && data.map((ele) => {
                                return (
                                    <div key={ele.id} className='main-product-card h-auto w-[290px] mt-5'>
                                        <div className='bg-[#F6F8FA] h-[350px] w-[320px] relative'>
                                            <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5  sale-div'>{ele.Sal}</div>
                                            <div className='z-5 bg-black h-auto w-auto text-sm px-3  text-white mt-11 absolute discount-div'>{ele.Pr}</div>

                                            <div className='h-40 w-12 z-5 three-icon right-0 me-3 mt-8 absolute duration-500'>
                                                <div className='h-10 heart w-10 mx-auto bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>
                                                <div className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>
                                                <div className='h-10 chain w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'>
                                                    <i className="fa-solid fa-link text-xl hover:text-white pt-1 ps-2 text-gray-700 duration-500"></i></div>
                                            </div>
                                            <div className='h-full w-full overflow-hidden'>
                                                <img src={ele.image} alt='photo' className='image-scale bg-center h-full w-full z-20'></img>
                                            </div>

                                            <button onClick={() => dispatch(addToCart(ele))} > <div className='addtocart h-12 w-full pt-2 bg-black text-white text-center font-semibold items-center justify-center absolute bottom-0 hover:bg-custom-pink duration-500'><i className=" me-2 fa-solid fa-cart-plus duration-500"></i>Add To Cart</div></button>
                                        </div>

                                        <div className='h-auto w-full '>
                                            <h1 className=' text-gray-700 mt-2 hover:text-custom-pink hover:duration-500'>{ele.Name}</h1>
                                            <h1 className=' text-gray-700 font-semibold mt-1'><del>{ele.Delprice}</del> ${ele.proce}</h1>
                                        </div>

                                    </div>
                                )
                            })}

                            {data.filter((ell) => { return ell.categaty === count }).map((elem) => {
                                return (
                                    <div key={elem.id} className='main-product-card h-auto w-[290px] mt-5'>
                                        <div className='bg-[#F6F8FA] h-[350px] w-[290px] relative'>
                                            <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5  sale-div'>{elem.Sal}</div>
                                            <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div'>{elem.Pr}</div>

                                            <div className='h-auto w-12 z-5 three-icon right-0 me-3 mt-8 absolute duration-500'>
                                                <div className='h-10 heart w-10 mx-auto bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>
                                                <div className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>
                                                <div className='h-10 chain w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'>
                                                    <i className="fa-solid fa-link text-xl hover:text-white pt-1 ps-2 text-gray-700 duration-500"></i></div>
                                            </div>
                                            <div className='h-full w-full overflow-hidden '>
                                                <img src={elem.image} alt='photo' className='image-scale  bg-center h-full w-full z-20'></img>
                                            </div>

                                            <button onClick={() => dispatch(addToCart(elem))} > <div className='addtocart h-12 w-full pt-2 bg-black text-white text-center font-semibold items-center justify-center absolute bottom-0 hover:bg-custom-pink duration-500'><i className=" me-2 fa-solid fa-cart-plus duration-500"></i>Add To Cart</div></button>
                                        </div>

                                        <div className='h-auto w-full '>
                                            <h1 className=' text-gray-700 mt-2 hover:text-custom-pink hover:duration-500'>{elem.Name}</h1>
                                            <h1 className=' text-gray-700 font-semibold mt-1'><del>{elem.Delprice}</del> ${elem.proce}</h1>
                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
