import React from 'react'
import Navbar from '../../../Componants/Navbar'
import Footer from '../../../Componants/Footer/Footer'
// import emptycartimg from '../../../assets/empty-cart.png'
import Subscribe from '../../Homepage/Subscribe_section/Subscribe'
import { useSelector,useDispatch } from 'react-redux'
import { decrmentQuntity,incrmentQuntity,removeToCart } from './Action'



const Cartpage = () => {
  let dispatch=useDispatch();
  const cartData = useSelector((state) => state.cartData)
  let amount = cartData.length && cartData.map((item) => item.Price).reduce((pre, next) => pre + next)
  console.log(cartData)
 

  return (
    <>
      <Navbar />
      <div className='container pt-20 h-auto w-full px-32'>
        <div className='wishlist_main h-auto w-full px-auto py-32 bg-[#F1F1F1]'>
          <h1 className='text-7xl font-bold  text-center'>My Cart</h1>
          <div className='home_wishlist w-full pt-3 flex justify-center'>
            <a href='#' className='text-center hover:text-custom-pink'> Home </a>
            <li className='ps-3 text-gray-500'>My Cart</li>
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

              {
               
             
                cartData.map((item) => 
                  <tr key={item.id} className='border text-center'>
                    <td className='border'><img src={item.image} className='w-auto h-24 mx-auto my-3' /></td>
                    <td className='border'>{item.Name}</td>
                    <td className='border'>${item.proce.toFixed()}</td>
                    <td className='flex justify-center items-center mt-10 gap-5'>
                      <button className='border px-3 py-1' onClick={() => dispatch(decrmentQuntity(item.id))}>-</button>
                      <p className=''>{item.quntity}</p>
                      <button className='border px-3 py-1' onClick={() => dispatch(incrmentQuntity(item.id))}>+</button>
                    </td>
                    <td className='border'>${item.Price.toFixed()}</td>
                    <td className='border'><button onClick={() => dispatch(removeToCart(item.id))}>x</button></td>
                  </tr>
                )
              }
            </tbody>
          </table>
          <div><span>Amount</span><span>{amount}</span></div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default Cartpage
