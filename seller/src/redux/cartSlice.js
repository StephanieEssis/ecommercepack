import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find(p => p._id === item._id);
      if (existing) {
        existing.quantity += item.quantity || 1;
      } else {
        state.cartItems.push({ ...item, quantity: item.quantity || 1 });
      }
      // ➡️ Mettre à jour total
      state.total = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(p => p._id !== action.payload);
      // ➡️ Mettre à jour total
      state.total = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find(p => p._id === id);
      if (item) {
        item.quantity = quantity;
      }
      // ➡️ Mettre à jour total
      state.total = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
