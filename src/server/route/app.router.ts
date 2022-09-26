import { createRouter } from '../createRouter';
import { someRouter } from './some.router';

export const appRouter = createRouter().merge('some.', someRouter);

export type AppRouter = typeof appRouter;
