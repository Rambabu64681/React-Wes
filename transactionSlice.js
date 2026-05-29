import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    selectedTransaction: null,
    filters: { status: 'ALL' }
  },
  reducers: {
    setSelectedTransaction: (state, action) => {
      state.selectedTransaction = action.payload;
    },
    setTransactionStatusFilter: (state, action) => {
      state.filters.status = action.payload;
    }
  }
});

export const { setSelectedTransaction, setTransactionStatusFilter } = transactionSlice.actions;
export default transactionSlice.reducer;
