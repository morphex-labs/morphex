import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OpenPopup {
  openWallet: boolean;
  openMenu: boolean;
}

const initialState: OpenPopup = {
  openWallet: false,
  openMenu: false,
};

export const popupOuter = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    togglePopup: (state, action: PayloadAction<{ value: boolean }>) => {
      state.openWallet = action.payload.value;
    },
    toggleMenu: (state, action: PayloadAction<{ value: boolean }>) => {
      state.openMenu = action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { togglePopup, toggleMenu } = popupOuter.actions;

export default popupOuter.reducer;
