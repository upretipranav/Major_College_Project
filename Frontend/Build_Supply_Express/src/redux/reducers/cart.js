// import { createRuducer } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {cart :localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[]  },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const isItemExist = state.cart.find((i) => i._id === item._id);
            if (isItemExist) {
              return {
                ...state,
                cart: state.cart.map((i) => (i._id === isItemExist._id ? item : i)),
              };
            } else {
              return {
                ...state,
                cart: [...state.cart, item],
              };
            }
          },
        
          removeFromCart: (state, action) => {
            return {
              ...state,
              cart: state.cart.filter((i) => i._id !== action.payload),
            };
          },
    }
})
export const cartActions = cartSlice.actions;
