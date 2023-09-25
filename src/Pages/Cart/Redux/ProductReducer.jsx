import { SET_PRODUCT_LIST } from "./Constant"


 const productData = (data = [], action) => {
    switch (action.type) {
            case SET_PRODUCT_LIST:
                console.warn("PRODUCT_LIST condition ", action)
                return [...action.productdataList]
        default:
            return data
    }
}

export default productData