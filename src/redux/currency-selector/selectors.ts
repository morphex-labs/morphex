import { RootState } from '../store';

export const selectSwap = (state: RootState) =>
  state.selectCurrency.swapCurrency;

export const selectLong = (state: RootState) =>
  state.selectCurrency.longCurrency;

export const selectShort = (state: RootState) =>
  state.selectCurrency.shortCurrency;

export const selectPay = (state: RootState) => state.selectCurrency.payCurrency;

export const selectConfirmType = (state: RootState) =>
  state.selectCurrency.confirmType;

export const selectAllCurrencies = (state: RootState) => state.selectCurrency;
