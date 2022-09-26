// import { TRPCError } from "@trpc/server";
import z from 'zod';

import { createRouter } from '../createRouter';

export const someSchema = z.object({
  id: z.string(),
});

export const someRouter = createRouter()
  .mutation('mutation-here', {
    input: someSchema,
    async resolve({ ctx, input }) {
      await Promise.resolve('');
      return true;
    },
  })
  .query('query-here', {
    async resolve({ ctx, input }) {
      await Promise.resolve('');
      return true;
    },
  });
