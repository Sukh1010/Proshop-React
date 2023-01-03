// 1
import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slices/ProductSlice";
import SingleProductReducer from "./slices/SingleProduct";
import UserReducer from "./slices/UserSlice";
import CartReducer from "./slices/CartSlice";
const store = configureStore({
  reducer: {
    products: ProductsReducer,
    singleProduct: SingleProductReducer,
    user: UserReducer,
    cart: CartReducer,
  },
});

export default store;
