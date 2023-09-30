import React from 'react'
import Navbar from '../../Componants/Navbar'
import Footer from '../../Componants/Footer/Footer'
// import emptycartimg from '../../../assets/empty-cart.png'
import Subscribe from '../Homepage/Subscribe_section/Subscribe'
import { useSelector,useDispatch } from 'react-redux'
import { addToCart,removeToWishlist } from '../Cart/Redux/Action'



const MyWishlist = () => {
  let dispatch=useDispatch();
  let cartData = useSelector((state) => state.wishlistData)
  
 

  return (
    <>
      <Navbar />
      <div className='container pt-20 h-auto w-full px-32'>
        <div className='wishlist_main h-auto w-full px-auto py-32 bg-[#F1F1F1]'>
          <h1 className='text-7xl font-bold  text-center'>My WishList</h1>
          <div className='home_wishlist w-full pt-3 flex justify-center'>
            <a href='#' className='text-center hover:text-custom-pink'> Home </a>
            <li className='ps-3 text-gray-500'>My WishList</li>
          </div>
        </div>
        <div className='w-full h-auto pt-60 pb-20'>
          <table className=" table-fixed w-full h-auto border-collapse border border-slate-400  text-center">
            <thead className='border border-slate-300'>
              <tr className='border border-slate-300'>
              <th className='border p-5'>Images</th>
              <th className='border p-5'>Product</th>
              <th className='border p-5'>Unit price</th>
              <th className='border p-5'>Quntity</th>
              <th className='border p-5'>Total</th>
              <th className='border p-5'>remove</th>
              </tr>
            </thead>
            <tbody>

              { cartData.map((item) => 
                  <tr key={item.id} className='border text-center'>
                    <td className='border'><img src={item.image} className='w-auto h-24 mx-auto my-3' /></td>
                    <td className='border'>{item.Name}</td>
                    <td className='border'>${item.proce.toFixed(2)}</td>
                    <td className='flex justify-center items-center mt-10 gap-5'>
                      <button className='border px-3 py-1' >-</button>
                      <p className=''>0</p>
                      <button className='border px-3 py-1' onClick={() => dispatch(addToCart(item))}>+</button>
                    </td>
                    <td className='border'>${item.Price.toFixed(2)}</td>
                    <td className='border'><button onClick={() => dispatch(removeToWishlist(item.id))}>x</button></td>
                  </tr>
                )
              }
            </tbody>
          </table>
          
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default MyWishlist
