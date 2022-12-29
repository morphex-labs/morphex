import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { localStorageKeys } from '../../constants';

export interface OrderDisclaimer {
  isOrderDisclaimerShown: boolean;
}

const initialState: OrderDisclaimer = {
  isOrderDisclaimerShown: false,
};

function getOrderDisclaimer(): OrderDisclaimer {
  if (typeof window !== 'undefined') {
    const settingsStr = localStorage.getItem(
      localStorageKeys.MORPHEX_ORDER_DISCLAIMER_ACCEPTED
    ) as string;

    if (settingsStr) {
      return JSON.parse(settingsStr) as OrderDisclaimer;
    }
  }

  return initialState;
}

export const orderDisclaimer = createSlice({
  name: 'orderDisclaimer',
  initialState: getOrderDisclaimer(),
  reducers: {
    saveIsDisclaimerAccepted: (
      state,
      action: PayloadAction<OrderDisclaimer>
    ) => {
      const { payload } = action;

      state.isOrderDisclaimerShown = payload.isOrderDisclaimerShown;

      localStorage.setItem(
        localStorageKeys.MORPHEX_ORDER_DISCLAIMER_ACCEPTED,
        JSON.stringify(payload)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveIsDisclaimerAccepted } = orderDisclaimer.actions;

export default orderDisclaimer.reducer;
