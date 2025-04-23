import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//user role
export const fetchUserRole = createAsyncThunk(
  'userRole/fetchUserRole',
  async email => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASEURL}/users/role/${email}`
    );
    return res.data.role;
  }
);

const userRoleSlice = createSlice({
  name: 'userRole',
  initialState: {
    role: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearUserRole: state => {
      state.role = null;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUserRole.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUserRole.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.role = action.payload;
      })
      .addCase(fetchUserRole.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { clearUserRole } = userRoleSlice.actions;
export default userRoleSlice.reducer;
