import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../app/slice/cartSlice';
export const store = configureStore({
  reducer: {
    cart:cartReducer,
  },
})