import { createSlice } from '@reduxjs/toolkit';

const customerSlice = createSlice({
  name: 'customers',
  initialState: {
    selectedCustomer: null
  },
  reducers: {
    setSelectedCustomer: (state, action) => {
      state.selectedCustomer = action.payload;
    }
  }
});

export const { setSelectedCustomer } = customerSlice.actions;
export default customerSlice.reducer;
