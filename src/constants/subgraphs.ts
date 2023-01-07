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

export const TESTNET_TOKENS = {
  BTC: '0x960A8DFb58D443f5fffac146E5b9EdE87c2bB90A',
  ETH: '0x107919364Fd351874d586C8725bB7B5E9e9cBA7f',
  FTM: '0x3f3760F86aBCE717AE9933F4E164A3049893bE2e',
  USDC: '0x4e2070676A8dC708ba1dcB0496F3699990605b59',
  USDT: '0x60f248A755C4a0c9904A2a76b520abfbA2340B68',
  DAI: '0x8C3968606F69DBfA91D47C5425bcd2F7Aa4EfCD0',
};

export const TESTNET_CONTRACTS = {
  Vault: '0xF0637348DBA68d12845F55c3c319FAea4b39D411',
  USDG: '0xe00DB36DfdBeB71c503cA2F98e1f753793c6162A',
  Router: '0x73511fB88B8af3d2f8237DF8E281c08b526f49c4',
  VaultPriceFeed: '0xF8f4D227D6dC9c2847C472355676Af08c3E02d2F',
  GLP: '0xf2859868bd9567a02A0F258E5F0356ddAb5CeDb0',
  ShortsTracker: '0xFbfcf0Dd410f84cFC4beBa2D916B8A110a984eD6',
  GlpManager: '0xf5FAB05eDCc40DAe20e91372993bc209a791C73A',
  VaultErrorController: '0xCC6310a1adE18CfD13a9766c2399555D17BEC65B',
  VaultUtils: '0xB6ABabAdd33297B767Af3A419C74A15003EDD2b7',
  ReferralStorage: '0x32034bF6693Cf8c4F970962740609BF7A43ff350',
  PositionRouter: '0x79c5Bf91AbBF679Fab7A53B7684c0A7D100a1ac5',
  OrderBook: '0x2e7E983Cd6c0dDFdA268EA443B0172A46105F371',
  PositionManager: '0x80CC6646bD29F5cfA565498fD0dB3260D8a3b385',
  OrderBookReader: '0x5C8f2Efc23208429E4fF2E0fC04AFFddb1830232',
  Reader: '0x6e2eaE54eC68E9089E6923dfd30324fF02248d88',
  RewardReader: '0x2Af126A52723452A7E3B0b2C2921FdCC6dC1410b',
  TokenManager: '0x30162B705C8f98d62E019f9B1e47F35CE53B8784',
  ReferralReader: '0x89773Ee39934aaf208DcF9023A456a74450B992b',
  VaultReader: '0xC821Ba6242d1e981C13fe3198dd5d1789DC48298',
  GMX_MPX: '0x7a0B7eBBfc3b25Fd23182AfA43a95885B9aEca95',
  esGMX_esMPX: '0x7EB2853f8820Ae614ED6a25C96e3366Ce66D953C',
  bnGMX_bnMPX: '0xE283EeeB344D70cB56CE5C5D5600fC88E987b882',
  RewardTracker_sMPX: '0x01EA80d7886d16A8396F1296Dd2Db8d42A4947C2',
  RewardDistributor: '0xdD0eDd7c3FeC20Bb04AFb91491A101A55F6D5Ff9',
  RewardTracker_sbMPX: '0x708040968D08E520daaa99EDa94beb27C54b2e81',
  BonusDistributor: '0x4B2596CDa1E300B0a3499A801b98b8099aE498C7',
  RewardTracker_sbfMPX: '0x137371Ad62c3703f83EB9BDFDF807809Dc158dFa',
  // RewardDistributor^: '0xFF2FB457c449e5A6D1dBCF268F2750F864207621',
  RewardTracker_fMLP: '0x1a616Be630E1c942a127838162C94ea47dB702B3',
  // RewardDistributor^: '0x176870D960Ec2AC17E76cf837d382450231Deb23',
  RewardTracker_fsMLP: '0xEB60AFF101d191f7B5fedC3F32275A9505E8b0df',
  // RewardDistributor^: '0xAD0abC7deCcAC44C56ea674D013F3f5957Bd7779',
  Vester_MPX: '0x419B874e43C13317daCe9a4a947c5579713F8b33',
  Vester_MLP: '0xFdF8C45DB72f069a63F1457A08f78c5A921268F5',
  RewardRouterV2: '0x5dA1403B87F78839CB9256B41133ef8aa2Eed3A6',
  // RewardReader^: '0x867F587C91CB2AbF99bc734FD0b67d39FAB71F69',
  BatchSender: '0xf31571f3e009C3AC96650B2861f7C2B31e88BC68',
  StakedGlp: '0x6885b23aC097c2f6ad033CA997818868594D835C',
  GlpBalance: '0x9686180123aBe1Cc59c2e5763EE6ab51f23BdAFE',
};
