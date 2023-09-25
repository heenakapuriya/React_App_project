import { combineReducers } from "redux";
import cartData  from "./Reducer";
import productData from "../Redux/ProductReducer"

export default combineReducers({
    cartData,
    productData
})