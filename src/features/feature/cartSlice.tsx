import { createSlice } from "@reduxjs/toolkit";

interface CartItems {
  [key: string]: number;
}

interface CartState {
  cartPrice: number;
  cartItems: CartItems;
}

const initialState: CartState = {
  cartPrice: 0,
  cartItems: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartPrice = state.cartPrice + parseFloat(payload.price);

      if (state.cartItems.hasOwnProperty(payload.item)) {
        state.cartItems = {
          ...state.cartItems,
          [payload.item]: state.cartItems[payload.item] + 1,
        };
      } else {
        state.cartItems = {
          ...state.cartItems,
          [payload.item]: 1,
        };
      }
    },
    emptyCart: (state) => {
      state.cartPrice = 0;
      state.cartItems = {};
    },
    removeFromCart: (state, { payload }) => {
      state.cartPrice = state.cartPrice - parseFloat(payload.price);

      if (state.cartItems[payload.item] === 1) {
        delete state.cartItems[payload.item]
      } else {
        state.cartItems = {
          ...state.cartItems,
          [payload.item]: state.cartItems[payload.item] - 1,
        };
      }
    },
  },
});

export const { addToCart, emptyCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
