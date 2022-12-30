import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { procedure, router } from '../trpc';

const cyrillicPattern = /^[\u0400-\u04FF]+$/;

export interface ValidateCodeResult {
  isValid: boolean;
  message: string;
}

export interface SendCodeResult {
  success: boolean;
}

export const codeSchema = z.object({ code: z.string() });

export type CodeInput = z.TypeOf<typeof codeSchema>;

export const referralsRouter = router({
  validateCode: procedure
    .input(codeSchema)
    .mutation(({ ctx, input }): ValidateCodeResult => {
      const { code } = input;
      if (code.length < 4) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Referral code must be at least 4 characters',
        });
      }

      if (cyrillicPattern.test(code)) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Referral code must have latin characters',
        });
      }

      return {
        isValid: true,
        message: 'Referral code is valid.',
      };
    }),
  sendCode: procedure
    .input(codeSchema)
    .mutation(({ ctx, input }): SendCodeResult => {
      const { code } = input;
      // TODO: Send code somewhere

      return {
        success: true,
      };
    }),
});
