import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

const initialState = {
  CartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  totoalCartItem: 0,
  TotalAmount: 0,
};

export const AddtoCartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const findIndex = state.CartItem.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (findIndex >= 0) {
        state.CartItem[findIndex].cartQuantity += 1;
        localStorage.setItem("cartItem", JSON.stringify(state.CartItem));
        toast.info(`${action.payload.title} again Add to cort`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        const temporary = { ...action.payload, cartQuantity: 1 };
        state.CartItem.push(temporary);
        localStorage.setItem("cartItem", JSON.stringify(state.CartItem));
        toast(`${action.payload.title} Add to cort`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    },
    RemoveCartItem: (state, action) => {
      const removeitem = state.CartItem.filter(
        (item) => item.id !== action.payload.id,
      );
      state.CartItem = removeitem;
      localStorage.setItem("cartItem", JSON.stringify(state.CartItem));
    },
  },
});

export const { addtoCart, RemoveCartItem } = AddtoCartSlice.actions;
export default AddtoCartSlice.reducer;
