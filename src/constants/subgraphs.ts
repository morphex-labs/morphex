export const MAINNET = 56;
export const TESTNET = 97;
export const ETH_MAINNET = 1;
export const AVALANCHE = 43114;
export const AVALANCHE_FUJI = 43113;
export const ARBITRUM = 42161;
export const ARBITRUM_TESTNET = 421611;

export const SUBGRAPH_URLS = {
  [ARBITRUM]: {
    stats: 'https://api.thegraph.com/subgraphs/name/gmx-io/gmx-stats',
    referrals:
      'https://api.thegraph.com/subgraphs/name/gmx-io/gmx-arbitrum-referrals',
    nissohVault: 'https://api.thegraph.com/subgraphs/name/nissoh/gmx-vault',
  },

  [AVALANCHE]: {
    stats: 'https://api.thegraph.com/subgraphs/name/gmx-io/gmx-avalanche-stats',
    referrals:
      'https://api.thegraph.com/subgraphs/name/gmx-io/gmx-avalanche-referrals',
  },

  common: {
    chainLink: 'https://api.thegraph.com/subgraphs/name/deividask/chainlink',
  },
};
