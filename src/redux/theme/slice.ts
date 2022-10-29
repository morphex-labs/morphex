import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { localStorageKeys } from '../../constants';

function getTheme() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(localStorageKeys.MORPHEX_THEME) as string;
  }

  return 'light';
}

export interface ITheme {
  theme: string;
}

const initialState: ITheme = {
  theme: getTheme(),
};

export const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<{ value: string }>) => {
      const morphexTheme = action.payload.value;
      state.theme = morphexTheme;
      localStorage.setItem(localStorageKeys.MORPHEX_THEME, morphexTheme);
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = theme.actions;

export default theme.reducer;
