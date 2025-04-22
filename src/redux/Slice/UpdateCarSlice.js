import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch a car by ID
export const fetchCar = createAsyncThunk(
  'car/fetchCar',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASEURL}/cars/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to update car details
export const updateCar = createAsyncThunk(
  'car/updateCar',
  async ({ id, data }, thunkAPI) => {
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_BASEURL}/cars-update/${id}`,
        data
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Initial state
const initialState = {
  car: null,
  loading: false,
  error: null,
};

// Slice
const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    setCarField: (state, action) => {
      const { field, value } = action.payload;
      state.car = {
        ...state.car,
        [field]: value,
      };
    },
    setCarLocationField: (state, action) => {
      const { field, value } = action.payload;
      state.car = {
        ...state.car,
        location: {
          ...state.car?.location,
          [field]: value,
        },
      };
    },
    setCarImage: (state, action) => {
      const { index, url } = action.payload;
      const newImages = [...state.car.image];
      newImages[index] = url;
      state.car.image = newImages;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCar.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCar.fulfilled, (state, action) => {
        state.car = action.payload;
        state.loading = false;
      })
      .addCase(fetchCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCar.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        state.loading = false;
        state.car = action.payload;
      })
      .addCase(updateCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { setCarField, setCarLocationField, setCarImage } =
  carSlice.actions;
export default carSlice.reducer;
