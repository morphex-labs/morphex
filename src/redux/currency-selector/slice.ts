import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Currency {
  symbol: string;
  name: string;
}

type ConfirmType = 'market' | 'limit';

export interface ISelectCurrency {
  confirmType: ConfirmType;
  payCurrency: Currency;
  longCurrency: Currency;
  shortCurrency: Currency;
  swapCurrency: Currency;
}

const initialState: ISelectCurrency = {
  confirmType: 'market',
  payCurrency: {
    name: 'Fantom',
    symbol: 'FTM',
  },
  longCurrency: {
    name: 'Fantom',
    symbol: 'ETH',
  },
  shortCurrency: {
    name: 'Fantom',
    symbol: 'ETH',
  },
  swapCurrency: {
    name: 'Fantom',
    symbol: 'ETH',
  },
};

export const selectCurrency = createSlice({
  name: 'selectCurrency',
  initialState,
  reducers: {
    setPayCurrency: (state, action: PayloadAction<Currency>) => {
      const { payload } = action;

      state.payCurrency.symbol = payload.symbol;
      state.payCurrency.name = payload.name;
    },
    setLongShortCurrency: (state, action: PayloadAction<Currency>) => {
      const { payload } = action;

      state.longCurrency.symbol = payload.symbol;
      state.longCurrency.name = payload.name;

      state.shortCurrency.symbol = payload.symbol;
      state.shortCurrency.name = payload.name;
    },
    setSwapCurrency: (state, action: PayloadAction<Currency>) => {
      const { payload } = action;

      state.swapCurrency.symbol = payload.symbol;
      state.swapCurrency.name = payload.name;
    },
    setConfirmType: (
      state,
      action: PayloadAction<{ confirmType: ConfirmType }>
    ) => {
      const { payload } = action;

      state.confirmType = payload.confirmType;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPayCurrency,
  setLongShortCurrency,
  setSwapCurrency,
  setConfirmType,
} = selectCurrency.actions;

export default selectCurrency.reducer;
