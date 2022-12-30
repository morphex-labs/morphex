import {
  ARBITRUM,
  ARBITRUM_TESTNET,
  AVALANCHE,
  SUBGRAPH_URLS,
} from '../constants/subgraphs';
import { createClient } from './utils';

export const chainlinkClient = createClient(SUBGRAPH_URLS.common.chainLink);

export const arbitrumGraphClient = createClient(SUBGRAPH_URLS[ARBITRUM].stats);
export const arbitrumReferralsGraphClient = createClient(
  SUBGRAPH_URLS[ARBITRUM].referrals
);
export const nissohGraphClient = createClient(
  SUBGRAPH_URLS[ARBITRUM].nissohVault
);

export const avalancheGraphClient = createClient(
  SUBGRAPH_URLS[AVALANCHE].stats
);
export const avalancheReferralsGraphClient = createClient(
  SUBGRAPH_URLS[AVALANCHE].referrals
);

export function getGmxGraphClient(chainId: number) {
  if (chainId === ARBITRUM) {
    return arbitrumGraphClient;
  }
  if (chainId === AVALANCHE) {
    return avalancheGraphClient;
  }
  if (chainId === ARBITRUM_TESTNET) {
    return null;
  }

  throw new Error(`Unsupported chain ${chainId}`);
}
