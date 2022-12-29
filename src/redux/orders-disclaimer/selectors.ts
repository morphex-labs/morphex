import { RootState } from '../store';

export const selectOrderDisclaimer = (state: RootState) =>
  state.orderDisclaimer.isOrderDisclaimerShown;
