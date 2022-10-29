import { Chain } from 'wagmi';

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

export const localStorageKeys = {
  METAMASK_NOT_FOUND: 'x-wallet-integration',
  MORPHEX_THEME: 'x-morphex-theme',
};

const ftmScan = { name: 'Ftmscan', url: 'https://ftmscan.com/' }; // blockexplorer for Fantom
// Since Fantom is not a default chain supported by wagmi, we need to import the Chain type and create our own
export const ftmChain: Chain = {
  id: 250,
  name: 'Fantom',
  network: 'Fantom Opera',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.ftm.tools/',
    public: 'https://rpc.ftm.tools/',
  },
  blockExplorers: {
    etherscan: ftmScan,
    default: ftmScan,
  },
  multicall: {
    address: '0xb828C456600857abd4ed6C32FAcc607bD0464F4F',
    blockCreated: 2323970,
  },
};
