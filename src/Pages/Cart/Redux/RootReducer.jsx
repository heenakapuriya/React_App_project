import { combineReducers } from "redux";
import cartData  from "./Reducer";
import productData from "../Redux/ProductReducer"
import wishlistData from "./WishlistReducer";


export default combineReducers({
    cartData,
    productData,
    wishlistData
})