import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const res = await axios.get(`${import.meta.env.VITE_BASEURL}/manage-cars`);
  return res.data;
});

export const deleteCar = createAsyncThunk(
  'cars/deleteCar',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASEURL}/cars/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const changeCarStatus = createAsyncThunk(
  'cars/changeCarStatus',
  async ({ id, currentStatus }, { rejectWithValue }) => {
    const newStatus =
      currentStatus === 'Available' ? 'Unavailable' : 'Available';
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_BASEURL}/car-status/${id}/availability`,
        { availability: newStatus }
      );
      if (res.data.modifiedCount > 0) {
        return { id, newStatus };
      }
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    loading: false,
    error: null,
    searchTerm: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload.toLowerCase();
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.cars = state.cars.filter(car => car._id !== action.payload);
      })
      .addCase(changeCarStatus.fulfilled, (state, action) => {
        const { id, newStatus } = action.payload;
        const car = state.cars.find(car => car._id === id);
        if (car) {
          car.availability = newStatus;
        }
      });
  },
});

export const { setSearchTerm } = carSlice.actions;
export default carSlice.reducer;
