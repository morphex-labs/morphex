import { router } from '../trpc';
import { overviewRouter } from './overview';
import { referralsRouter } from './referrals';

export const appRouter = router({
  referrals: referralsRouter,
  overview: overviewRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
