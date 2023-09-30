import React, { useEffect } from 'react'
import './PopularProductSection.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addToCart ,addToWhishlist} from '../../Cart/Redux/Action'
import productList from "../../Cart/Redux/ProductAction"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const PopularProductCard_top = () => {
  let [showModal, setShowModal] = useState(false)
  let [count, setCount] = useState(1)
  const [add_cart, view_cart] = useState(true)
  const handelClick = () => {
    // toggle false to hide button and display welcome message
    view_cart(false);
  };

  function view_btn() {
    <button onClick={() => dispatch(addToCart(ele))} id='view_cart' className='hidden'> <div className='addtocart h-12 w-full pt-2 bg-black text-white text-center font-semibold items-center justify-center absolute bottom-0 hover:bg-custom-pink duration-500'><i className=" me-2 fa-solid fa-cart-plus duration-500"></i>View Cart</div></button>
  }

  let dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList())
  }, [])
  return (
    <>
      <div className='container-2xl mx-auto'>
        <div className='w-11/12 2xl:w-10/12 mx-auto'>

          <div className='flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 xl:gap-16 2xl:gap-10 mt-10'>

              {data.filter((el) => { return el.type === 'top rated' }).map((ele) => {
                return (
                  <div key={ele.id} className='main-product-card h-auto w-[290px] mt-5'>
                    <div className='bg-[#F6F8FA] h-[350px] w-[290px] relative'>
                      <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5  sale-div z-0'>{ele.Sal}</div>
                      <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div z-0'>{ele.Pr}</div>

                      <div className='h-40 w-12 z-5 three-icon right-0  mt-8 absolute duration-500'>

                        <button onClick={() => dispatch(addToWhishlist(ele))} className='h-10 heart w-10 bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl text-gray-700 hover:text-white duration-500"></i></button>

                        <div onClick={() => setShowModal(true)} className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>

                        {showModal ? (
                          <div>
                            <div
                              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                              <div className="relative w-full bg-white mb-6 mt-20 mx-auto max-w-6xl">

                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">

                                  <div className="w-full text-end h-auto">
                                    <button className="px-6 py-2 text-4xl font-thin hover:rotate-90 hover:duration-300" type="button" onClick={() => setShowModal(false)} >
                                      x
                                    </button>
                                  </div>

                                  <div className='flex justify-center gap-10'>
                                    <div className='w-[48%] h-auto'>
                                      <img src={ele.image} className='w-full h-[450px] px-10' />

                                      <div className='flex justify-center gap-5 my-7 px-10'>
                                        <div className='w-1/4'>
                                          <img src={ele.image} className='w-full h-auto' />
                                        </div>

                                        <div className='w-1/4'>
                                          <img src={ele.image} className='w-full h-auto' />
                                        </div>

                                        <div className='w-1/4'>
                                          <img src={ele.image} className='w-full h-auto' />
                                        </div>

                                        <div className='w-1/4'>
                                          <img src={ele.image} className='w-full h-auto' />
                                        </div>
                                      </div>

                                    </div>
                                    <div className='w-[52%] h-auto'>


                                      <h1 className='text-4xl font-semibold'>{ele.Name}</h1>
                                      <p className='mt-7 text-custom-font'>Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p>
                                      <p className='mt-10'><del>{ele.Delprice}</del> ${ele.proce}</p>

                                      <div className='flex mt-5'>
                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => { if (count !== 1) setCount(count - 1) }}>-</div>
                                        <div className='border px-8 py-2 cursor-pointer'>{count}</div>
                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => setCount(count + 1)}>+</div>
                                      </div>

                                      <div className='flex mt-5 gap-2'>
                                        <button onClick={() => dispatch(addToCart(ele))} className='bg-black hover:bg-custom-pink hover:duration-500 text-white px-16 py-3'>Add to cart</button>
                                        <button onClick={() => dispatch(addToWhishlist(ele))} className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-regular fa-heart text-xl"></i></button>
                                        <button className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-solid fa-link text-xl"></i></button>
                                      </div>

                                      <hr className='mt-10 mr-10' />

                                      <div><b>SKU:</b> 29045-SB-1</div>
                                      <div className='cursor-pointer mt-1'><b>Categories:</b> iphone Cases, Android Cases, Accessrois</div>
                                      <div className='mt-5 flex'><b>Tages: </b> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Planer</p> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Electric</p></div>
                                      <div className='mt-5 flex gap-2'><b>Share: </b> <div><i class="fa-brands fa-facebook"></i></div> <div><i class="fa-brands fa-twitter"></i></div> <div><i class="fa-brands fa-linkedin"></i></div> <div><i class="fa-brands fa-youtube"></i></div> </div>
                                    </div>

                                  </div>

                                </div>
                              </div>
                            </div>
                            <div className=" opacity-50 fixed inset-0 z-40 bg-black"></div>
                          </div>
                        ) : null}

                        <div className='h-10 chain w-10  bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'>
                          <i className="fa-solid fa-link text-xl hover:text-white pt-1 ps-2 text-gray-700 duration-500"></i></div>
                      </div>
                      <div className='h-full w-full overflow-hidden'>
                        <img src={ele.image} alt='photo' className='image-scale bg-center h-full w-full z-20 '></img>
                      </div>

                      <button onClick={() => dispatch(addToCart(ele), view_btn())} id='add_cart' > <div className='addtocart h-12 w-full pt-2 bg-black text-white text-center font-semibold items-center justify-center absolute bottom-0 hover:bg-custom-pink duration-500'><i className=" me-2 fa-solid fa-cart-plus duration-500"></i>Add To Cart</div></button>



                    </div>

                    <div className='h-auto w-full '>
                      <h1 className=' text-gray-700 mt-2 hover:text-custom-pink hover:duration-500'>{ele.Name}</h1>
                      <h1 className=' text-gray-700 font-semibold mt-1'><del>{ele.Delprice}</del> ${ele.proce}</h1>
                    </div>

                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>


  )
}


export default PopularProductCard_top

