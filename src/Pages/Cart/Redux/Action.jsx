import { ADD_TO_CART, ADD_TO_WHISHLIST, DECRMENT_QUNTITY, INCRMENT_QUNTITY, REMOVE_TO_CART } from "./Constant";

export let addToCart = (data) => {
    return{
        type: ADD_TO_CART,
        data
    }
}

export let removeToCart = (data) => {
    return{
        type: REMOVE_TO_CART,
        data
    }
}

export let incrmentQuntity = (data) => {
    return{
        type: INCRMENT_QUNTITY,
        data
    }
}

export let decrmentQuntity = (data) => {
    return{
        type: DECRMENT_QUNTITY,
        data
    }
}

export let addToWhishlist = (data) => {
    return{
        type: ADD_TO_WHISHLIST,
        data
    }
}
