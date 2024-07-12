import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TProducts } from "../../components/types/Product.type";

type TCartProduct = TProducts & { quantity?: number };

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
    addTodo: (state, action: PayloadAction<TProducts>) => {
      const existingProduct = state.cart.find((item: TCartProduct) => item._id === action.payload._id);

      if (existingProduct?.quantity) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addTodo } = cartSlice.actions;
export default cartSlice.reducer;
