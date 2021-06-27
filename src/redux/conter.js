import { createSlice } from "@reduxjs/toolkit";

export const counterSlide = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.count -= action.payload;
    }
  }
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount
} = counterSlide.actions;
export default counterSlide.reducer;
