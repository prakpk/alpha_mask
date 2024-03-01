// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';
import paymentReducer from './slices/paymentSlice';
import languageReducer from './slices/languageSlice';
import geoReducer from './slices/geoSlice'; // If you have a geo slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    auth: authReducer,
    payment: paymentReducer,
    language: languageReducer,
    geo: geoReducer,
    // Add other feature reducers here
  },
});
