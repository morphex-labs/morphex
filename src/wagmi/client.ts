import { createClient } from 'wagmi';
import { getDefaultClient } from 'connectkit';
import { fantom, fantomTestnet } from 'wagmi/chains';

// Creating the web3 client in wagmi, using "getDefaultClient" from ConnectKit which simplifies for us.
const web3Client = createClient(
  getDefaultClient({
    appName: 'Morphex',
    chains: [fantom, fantomTestnet],
  })
);

export default web3Client;
