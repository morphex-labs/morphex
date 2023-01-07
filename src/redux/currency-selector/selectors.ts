import { RootState } from '../store';

export const selectSwap = (state: RootState) =>
  state.selectCurrency.swapCurrency;

export const selectLongShort = (state: RootState) =>
  state.selectCurrency.longShortCurrency;

export const selectPay = (state: RootState) => state.selectCurrency.payCurrency;

export const selectConfirmType = (state: RootState) =>
  state.selectCurrency.confirmType;

export const selectAllCurrencies = (state: RootState) => state.selectCurrency;
