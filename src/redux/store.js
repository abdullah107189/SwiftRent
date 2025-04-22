import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import carReducer from './Slice/carSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
