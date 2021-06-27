import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./conter";
export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
