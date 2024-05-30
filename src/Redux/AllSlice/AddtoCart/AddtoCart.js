import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartItem: [],
  totoalCartItem: 0,
  TotalAmount: 0,
};

export const AddtoCartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      state.CartItem.push({ ...action.payload, cartQuantity: 1 });
    },
  },
});

export const { addtoCart } = AddtoCartSlice.actions;
export default AddtoCartSlice.reducer;
