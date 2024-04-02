import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
