import { Product } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartProduct {
  product: Product;
  amount: number;
}

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems') || '{}')
  : [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartItemsFromStorage as CartProduct[],
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const { amount, product } = action.payload;
      const matchingProduct = state.find(
        (item: CartProduct) => item.product.id === product.id
      );
      if (!state.length || !matchingProduct) {
        state.push(action.payload);
      } else {
        if (matchingProduct) {
          matchingProduct.amount += amount;
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(state));
    },
    setProductAmount: (
      state,
      action: PayloadAction<CartProduct & { amount: number }>
    ) => {
      const { amount, product } = action.payload;
      const matchingProduct = state.find(
        (item: CartProduct) => item.product.id === product.id
      );
      if (!state.length || !matchingProduct) {
        state.push(action.payload);
      } else {
        if (matchingProduct) {
          matchingProduct.amount = amount;
        }
      }
      localStorage.setItem('cartItems', JSON.stringify(state));
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      state.splice(
        state.findIndex(item => item.product.id === action.payload.id),
        1
      );
      localStorage.setItem('cartItems', JSON.stringify(state));
    }
  }
});

export default cartSlice.reducer;

export const {
  addProduct,
  setProductAmount,
  removeProduct
} = cartSlice.actions;
