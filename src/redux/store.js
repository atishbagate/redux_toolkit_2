import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./conter";
import calculateReducer from "./calculate";
export default configureStore({
  reducer: {
    counter: counterReducer,
    calculate: calculateReducer
  }
});
