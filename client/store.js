import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import purchaseReducer from "./features/purchaseSlice";
import userReducer from "./features/userInfoSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    purchase: purchaseReducer,
    user: userReducer,
  },
});
