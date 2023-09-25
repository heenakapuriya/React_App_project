import createSagaMiddleware from "redux-saga"
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import productSaga from './ProductSaga'

const sagaMiddleware =createSagaMiddleware();

const Store=configureStore(
    {
        reducer:RootReducer,
        middleware:()=>[sagaMiddleware]
    }
);
sagaMiddleware.run(productSaga);

export default Store