import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import carReducer from './Slice/carSlice';
import carupDateReducer from './Slice/UpdateCarSlice';
import userRoleReducer from './Slice/userRoleSlice';
import totalSalesReducer from './Slice/totalSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    updateCar: carupDateReducer,
    userRole: userRoleReducer,
    totalSales: totalSalesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
