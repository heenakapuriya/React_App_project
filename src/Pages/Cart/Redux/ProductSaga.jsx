import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './Constant';
import productdataList from "../../Homepage/PopularProductSection/PopularProductCard.json"

function* getProducts() {
    
    yield put({type: SET_PRODUCT_LIST, productdataList})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
}

export default productSaga;