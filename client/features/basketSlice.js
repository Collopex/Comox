import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setAddToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    setRemoveFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Could not find item to remove from basket (id: ${action.payload.id})`
        );
      }

      state.items = newBasket;
    },

    setRemoveAll: (state) => {
      let removeAll = [...state.items];
      removeAll.splice(0, removeAll.length);
      state.items = removeAll;
    },
  },
});

export const { setAddToBasket, setRemoveFromBasket, setRemoveAll } =
  basketSlice.actions;

// SELECTORS
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketItemsTotal = (state) =>
  state.basket.items.reduce((acc, item) => (acc += item.price), 0);

export default basketSlice.reducer;
