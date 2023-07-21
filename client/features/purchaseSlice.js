import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchase: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_desc: null,
    dishes: null,
  },
};

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    setPurchase: (state, action) => {
      state.purchase = action.payload;
    },
  },
});

export const { setPurchase } = purchaseSlice.actions;

// SELECTORS
export const selectPurchase = (state) => state.purchase.purchase;

export default purchaseSlice.reducer;
