import { configureStore } from '@reduxjs/toolkit';

import { menuNavigation } from './navigation/slice';
import { settings } from './settings/slice';
import { theme } from './theme/slice';
import { selectCurrency } from './currency-selector/slice';
import { orderDisclaimer } from './orders-disclaimer/slice';

export const store = configureStore({
  reducer: {
    menuNavigation: menuNavigation.reducer,
    theme: theme.reducer,
    settings: settings.reducer,
    selectCurrency: selectCurrency.reducer,
    orderDisclaimer: orderDisclaimer.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
