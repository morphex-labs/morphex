import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OpenPopup {
  openMenu: boolean;
  openSettings: boolean;
  openMoreTab: boolean;
}

const initialState: OpenPopup = {
  openMenu: false,
  openSettings: false,
  openMoreTab: false,
};

export const menuNavigation = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleMenu: (state, action: PayloadAction<{ value: boolean }>) => {
      state.openMenu = action.payload.value;
    },
    toggleSettings: (state, action: PayloadAction<{ value: boolean }>) => {
      state.openSettings = action.payload.value;
    },
    toggleMoreTab: (state, action: PayloadAction<{ value: boolean }>) => {
      state.openMoreTab = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMenu, toggleSettings, toggleMoreTab } =
  menuNavigation.actions;

export default menuNavigation.reducer;
