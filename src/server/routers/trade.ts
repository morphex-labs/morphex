import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { procedure, router } from '../trpc';

// export const mintMLPSchema = z.object({ price: z.string() });
// export const redeemMLPSchema = z.object({ price: z.string() });

// export type MintInput = z.TypeOf<typeof mintMLPSchema>;
// export type RedeemInput = z.TypeOf<typeof redeemMLPSchema>;

export const tradeRouter = router({
  mintMLP: procedure.mutation(({ ctx, input }) => {
    // Call mint function
    return input;
  }),
  redeemMLP: procedure.mutation(({ ctx, input }) => {
    // Call redeem function
    return input;
  }),
  mrxIdxComposition: procedure.query(({ ctx, input }) => {
    // Call query function for MRX Index Composition
    return input;
  }),
});
