import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import carReducer from './Slice/carSlice';
import carupDateReducer from './Slice/UpdateCarSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    updateCar: carupDateReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
