export const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const URL = `${BASE_URL}/api/trpc`;

export const Messages = {
  MORPHEX_REWARDS: 'Morphex Rewards',
  BORROWING_APR_FEE: 'Borrowing APR (Fee)',
  NET_BORROWING_APR: 'Net Borrowing APR',
  NET_ASSET_VALUE: 'Net Asset Value',
};
