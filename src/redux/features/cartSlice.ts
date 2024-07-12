import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProducts } from "../../components/types/Product.type";

export type TCartProduct = TProducts & { quantity?: number };

type TInitialState = {
  cart: TCartProduct[];
};

const initialState: TInitialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProducts>) => {
      const existingProduct = state.cart.find(
        (item: TCartProduct) => item._id === action.payload._id
      );

      if (existingProduct?.quantity || existingProduct?.quantity === 0) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingProduct = state.cart.find(
        (item: TCartProduct) => item._id === action.payload
      );

      if (existingProduct?.quantity && existingProduct?.quantity > 0) {
        existingProduct.quantity -= 1;
      }
    },
    removeAllProductById: (state, action: PayloadAction<string>) => {
      const existingProducts = state.cart.filter(
        (item: TCartProduct) => item._id !== action.payload
      );

      state.cart = existingProducts;
    },
    removeAllProduct: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeAllProductById,
  removeAllProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
