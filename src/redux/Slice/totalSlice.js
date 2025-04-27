import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// total sales
export const fetchTotalSales = createAsyncThunk(
  'totalSales/fetchTotalSales',
  async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASEURL}/total-sales`
    );
    return response.data.totalSell;
  }
);

// export const fetchAllUsers = createAsyncThunk(
//   'users/fetchAllUsers',
//   async () => {}
// );

const totalSalesSlice = createSlice({
  name: 'totalSales',
  initialState: {
    amount: 0,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTotalSales.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTotalSales.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.amount = action.payload;
      })
      .addCase(fetchTotalSales.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default totalSalesSlice.reducer;
