import { ICity } from 'interfaces';
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  data: [],
  isFiltered: false,
  filteredData: [],
};
export const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setIsFiltered: (state, action: { payload: boolean }) => {
      state.isFiltered = action.payload;
    },
    setFilteredData: (state, action) => {
      state.filteredData = action.payload;
    },
  },
});
export const { setData, setIsFiltered, setFilteredData } = slice.actions;
export default slice.reducer;
//: {payload: string, type: string}
