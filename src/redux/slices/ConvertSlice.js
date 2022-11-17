import { createSlice } from "@reduxjs/toolkit";

export const ConvertSlice = createSlice({
  name: "convert",
  initialState: {
    number: 0,
    price: 0,
  },
  reducers: {
    converting: (state, action) => {
      state.number = action.payload / state.price;
    },
    getPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { converting, getPrice } = ConvertSlice.actions;
export default ConvertSlice.reducer;
