import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OpenPopup {
  openMenu: boolean;
}

const initialState: OpenPopup = {
  openMenu: false,
};

export const menuNavigation = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleMenu: (state, action: PayloadAction<{ value: boolean }>) => {
      state.openMenu = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMenu } = menuNavigation.actions;

export default menuNavigation.reducer;
