import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../AllSlice/ProductSlice/ProductSlice";
import AddtoCartSlice, { getTotal } from "../AllSlice/AddtoCart/AddtoCart";
export const store = configureStore({
  reducer: {
    Cart: AddtoCartSlice,
    product: ProductSlice,
  },
});
store.dispatch(getTotal());
