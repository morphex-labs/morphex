import { RootState } from '../store';

export const selectMenuOpen = (state: RootState) =>
  state.menuNavigation.openMenu;

export const selectSettings = (state: RootState) =>
  state.menuNavigation.openSettings;

export const selectMoreTab = (state: RootState) =>
  state.menuNavigation.openMoreTab;
