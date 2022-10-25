import { RootState } from '../store';

export const selectMenuOpen = (state: RootState) =>
  state.menuNavigation.openMenu;
