import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
    cart: ["testing"],
  },
  reducers: {
    showSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { showSidebar } = cartSlice.actions;
