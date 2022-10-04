import { RootState } from '../store';

export const selectWalletOpen = (state: RootState) =>
  state.popupOuter.openWallet;
export const selectMenuOpen = (state: RootState) => state.popupOuter.openMenu;
