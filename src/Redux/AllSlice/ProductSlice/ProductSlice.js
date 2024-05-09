import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    SetProduts: (state, payload) => {
      state.data = payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { SetProduts } = productSlice.actions;
export default productSlice.reducer;
