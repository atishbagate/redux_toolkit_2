import { createSlice } from "@reduxjs/toolkit";

export const calculateSlide = createSlice({
  name: "calculate",
  initialState: {
    value: 0
  },

  reducers: {
    add: (state, action) => {
      state.value += action.payload;
    },
    sub: (state, action) => {
      state.value -= action.payload;
    },
    divide: (state, action) => {
      state.value /= action.payload;
    },
    multi: (state, action) => {
      state.value *= action.payload;
    }
  }
});

export const { add, sub, divide, multi } = calculateSlide.actions;

export default calculateSlide.reducer;
