import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import carReducer from './Slice/carSlice';
import carUpDateReducer from './Slice/UpdateCarSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    updateCar: carUpDateReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
