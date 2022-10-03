import { configureStore } from '@reduxjs/toolkit';
import filter from '../store/filterSlice';
const store = configureStore({
  reducer: { filter },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
