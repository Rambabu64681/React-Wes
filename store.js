import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './transactionSlice.js';
import customerReducer from './customerSlice.js';

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    customers: customerReducer
  }
});
