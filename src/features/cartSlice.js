import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    cart: [],
    totalAmount: 0,
  },
  reducers: {
    showSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },

    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].amount += 1;
      } else {
        const newItem = {
          ...action.payload,
          amount: 1,
        };

        state.cart = [...state.cart, newItem];
      }
      state.totalAmount += 1;
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );

      state.cart[itemIndex].amount -= 1;
      state.totalAmount -= 1;

      if (state.cart[itemIndex].amount === 0) state.cart.splice(itemIndex, 1);
    },

    cancelItem: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );

      state.totalAmount -= state.cart[itemIndex].amount;
      state.cart.splice(itemIndex, 1);
    },

    removeAllItem: (state) => {
      state.cart = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  showSidebar,
  addToCart,
  removeFromCart,
  cancelItem,
  removeAllItem,
} = cartSlice.actions;
