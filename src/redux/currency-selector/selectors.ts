import { RootState } from '../store';

export const selectSwap = (state: RootState) =>
  state.selectCurrency.swapCurrency;

export const selectLong = (state: RootState) =>
  state.selectCurrency.longCurrency;

export const selectShort = (state: RootState) =>
  state.selectCurrency.shortCurrency;

export const selectAllCurrencies = (state: RootState) => state.selectCurrency;
