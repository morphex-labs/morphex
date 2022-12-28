import { configureStore } from '@reduxjs/toolkit';

import { menuNavigation } from './navigation/slice';
import { settings } from './settings/slice';
import { theme } from './theme/slice';

export const store = configureStore({
  reducer: {
    menuNavigation: menuNavigation.reducer,
    theme: theme.reducer,
    settings: settings.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
