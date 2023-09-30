import React from 'react'
import './PopularProductSection.css'
import { addToCart } from '../../Cart/Redux/Action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import  productList  from '../../Cart/Redux/ProductAction'
import { useEffect } from 'react'

const PopularProductCard_Latest = () => {

    let dispatch = useDispatch()
    let data = useSelector((state) => state.productData)

    useEffect(() => {
        dispatch(productList())
    }, [])

    return (
        <>
            <div className='container-2xl mx-auto'>
                <div className='w-11/12 2xl:w-10/12 mx-auto'>

                    <div className='flex justify-center'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 xl:gap-16 2xl:gap-10 mt-10'>

                            {data.filter((el) => { return el.type === 'latest product' }).map((ele) => {
                                return (
                                    <div className='main-product-card h-[350px] w-[290px] mt-5'>
                                        <div className='bg-[#F6F8FA] h-[350px] w-[290px] relative'>
                                            <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5 sale-div'>{ele.Sal}</div>
                                            <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div'>{ele.Pr}</div>

                                            <div className='h-40 w-12 z-5 three-icon right-0  mt-8 absolute duration-500'>
                                                <div className='h-10 heart w-10  bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>
                                                <div className='h-10 eye w-10  bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>
                                                <div className='h-10 chain w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'>
                                                    <i className="fa-solid fa-link text-xl hover:text-white pt-1 ps-2 text-gray-700 duration-500"></i></div>
                                            </div>
                                            <div className='h-full w-full overflow-hidden'>
                                                <img src={ele.image} alt='photo' className=' image-scale  bg-center h-full w-full z-20'></img>
                                            </div>

                                            <button onClick={() => dispatch(addToCart(ele))}> <div className='addtocart h-12 w-full pt-2 bg-black text-white text-center font-semibold items-center justify-center absolute bottom-0 hover:bg-custom-pink duration-500 '><i className=" me-2 fa-solid fa-cart-plus duration-500"></i>Add To Cart</div></button>
                                        </div>

                                        <div className='h-auto w-full '>
                                            <h1 className=' text-gray-700 mt-2 hover:text-custom-pink hover:duration-500'>{ele.Name}</h1>
                                            <h1 className=' text-gray-700 font-semibold mt-1'><del>{ele.Delprice}</del> ${ele.proce}</h1>
                                        </div>

                                    </div>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularProductCard_Latest