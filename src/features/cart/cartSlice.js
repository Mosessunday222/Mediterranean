import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart:[],
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, actions) {
      // to add newItem
      state.cart.push(actions.payload);
    },
    deleteItem(state, actions) {
      // payload = pizzaID
      state.cart = state.filter((item) => item.pizzaId !== actions.payload);
    },
    increaseItemQuantity(state, actions) {
      // payload = ID
      const item = state.cart.find((item) => item.pizzaId === actions.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, actions) {
      //payload = id
      const item = state.cart.find((item) => item.pizzaId === actions.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export  const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
