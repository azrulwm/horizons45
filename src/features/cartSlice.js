import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    cart: [],
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
    },
  },
});

export const { showSidebar, addToCart } = cartSlice.actions;
