import {  ADD_WISHLIST, REMOVE_WISHLIST } from "./Constant"

let wishlistData = (data = [], action) => {
    switch(action.type){
        case ADD_WISHLIST:
            return [action.data, ...data]

            case REMOVE_WISHLIST:
            let removeItem = data.filter((item) => item.id !== action.data)
            return [...removeItem]

            default:
                return data
    }
}
export default wishlistData
