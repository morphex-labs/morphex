import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { procedure, router } from '../trpc';

export const mintMLPSchema = z.object({ price: z.string() });
export const redeemMLPSchema = z.object({ price: z.string() });

export type MintInput = z.TypeOf<typeof mintMLPSchema>;
export type RedeemInput = z.TypeOf<typeof redeemMLPSchema>;

export const overviewRouter = router({
  mintMLP: procedure.input(mintMLPSchema).mutation(({ ctx, input }) => {
    const { price } = input;

    // Call mint function

    return price;
  }),
  redeemMLP: procedure.input(redeemMLPSchema).mutation(({ ctx, input }) => {
    const { price } = input;

    // Call redeem function

    return price;
  }),
  mrxIdxComposition: procedure.query(({ ctx, input }) => {
    // Call query function for MRX Index Composition
    return input;
  }),
});
