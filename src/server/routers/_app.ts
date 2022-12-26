/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { router } from '../trpc';
import { referralsRouter } from './referrals';

export const appRouter = router({
  referrals: referralsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
