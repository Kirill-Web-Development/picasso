import { createSlice } from '@reduxjs/toolkit';
import { StateType } from 'app/store';

const init = {
    value: 1,
}

export const pageSlice = createSlice({
  name: 'page',
  initialState: init,
  reducers: {
    incrementPage: (state, action) => {
      state.value += action.payload
    },
  },
});

export const { incrementPage } = pageSlice.actions;

export const selectPage = (state: StateType): number => state.page.value;

export default pageSlice.reducer;