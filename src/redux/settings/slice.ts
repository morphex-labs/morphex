import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { localStorageKeys } from '../../constants';

export interface ISettings {
  allowedSlippage: string;
  displayPnl: boolean;
  includePnl: boolean;
}

const initialState: ISettings = {
  allowedSlippage: '0.5',
  displayPnl: false,
  includePnl: false,
};

function getSettings(): ISettings {
  if (typeof window !== 'undefined') {
    const settingsStr = localStorage.getItem(
      localStorageKeys.MORPHEX_GLOBAL_SETTINGS
    ) as string;

    if (settingsStr) {
      return JSON.parse(settingsStr) as ISettings;
    }
  }

  return initialState;
}

export const settings = createSlice({
  name: 'settings',
  initialState: getSettings(),
  reducers: {
    saveSettings: (state, action: PayloadAction<ISettings>) => {
      const { payload } = action;

      state.allowedSlippage = payload.allowedSlippage;
      state.displayPnl = payload.displayPnl;
      state.includePnl = payload.includePnl;

      localStorage.setItem(
        localStorageKeys.MORPHEX_GLOBAL_SETTINGS,
        JSON.stringify(payload)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveSettings } = settings.actions;

export default settings.reducer;
