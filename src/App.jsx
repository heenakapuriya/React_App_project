import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FAQ from './Pages/FAQ/FAQ'
import FogotPassword from './Pages/Forgot_password/FogotPassword'
import Register from './Pages/Register/Register'
import Login from './Pages/Loginpage/Login'
import Homepage from './Pages/Homepage/Homepage'
import Privacy from './Pages/Privacypage/Privacy'
import Terms_Condition from './Pages/Terms&Condition/Terms_Condition'
import Error from './Pages/Error404/Error'
import MyWishlist from './Pages/MyWishlist/MyWishlist'
import ContactUs from './Pages/ContactUs/ContactUs'
import AboutUs from './Pages/AboutUs/AboutUs'
import GeneralQuestion from './Pages/FAQ/GeneralQuestion'
import Community from './Pages/FAQ/Community'
import Support from './Pages/FAQ/Support'
import Cartpage from './Pages/Cart/Redux/Cartpage'
import Shop from './Pages/Shop'
import Quickview_eyes from './Componants/Quickview_eyes'
import PopularProductCard_best from './Pages/Homepage/PopularProductSection/PopularProductCard_best'
import PopularProductCard_top from './Pages/Homepage/PopularProductSection/PopularProductCard_top'
import PopularProductCard_Latest from './Pages/Homepage/PopularProductSection/PopularProductCard_Latest'





function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}>

          <Route path="PopularProductCard_top" element={<PopularProductCard_top />}>
            <Route path="QuickView_eye" element={<Quickview_eyes />}></Route></Route>

          <Route path="PopularProductCard_best" element={<PopularProductCard_best />}>
            <Route path="QuickView_eye" element={<Quickview_eyes />}></Route></Route>
          <Route path="PopularProductCard_Latest" element={<PopularProductCard_Latest />}>
            <Route path="QuickView_eye" element={<Quickview_eyes />}></Route></Route>
            </Route>
      

        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/FAQ" element={<FAQ />}>
          <Route path="GeneralQuestion" element={<GeneralQuestion />}></Route>
          <Route path="Community" element={<Community />}></Route>
          <Route path="Support" element={<Support />}></Route>
        </Route>

        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Terms_Condition" element={<Terms_Condition />}></Route>
        <Route path="/Privacy" element={<Privacy />}></Route>
        <Route path="/Forgot_Password" element={<FogotPassword />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/MyWishlist" element={<MyWishlist />}></Route>
        <Route path="/Cart" element={<Cartpage />}></Route>
        <Route path="/*" element={<Error />}></Route>

      </Routes>
    </>
  )
}

export default App
