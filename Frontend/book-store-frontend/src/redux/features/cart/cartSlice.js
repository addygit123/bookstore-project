import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);
        Swal.fire({
          title: "Item added to cart Successfully!",
          icon: "success",
          draggable: true,
        });
      } else
        Swal.fire({
          title: "Item already exist in cart",
          icon: "warning",
        });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// export the action
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
