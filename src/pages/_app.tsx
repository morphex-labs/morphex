/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { WagmiConfig, createClient } from 'wagmi';
import { fantom, fantomTestnet } from 'wagmi/chains';
import { getDefaultClient } from 'connectkit';

import '../scss/main.scss';
import { store } from '../redux/store';
import Layout from '../components/Layout';
import { trpc } from '../utils/trpc';

// Creating the web3 client in wagmi, using "getDefaultClient" from ConnectKit which simplifies for us.
const client = createClient(
  getDefaultClient({
    appName: 'Morphex',
    chains: [fantom, fantomTestnet],
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <WagmiConfig client={client}>
        <Head>
          <title>Morphex</title>
          <meta name="description" content="Morphex Swap - Lend & Borrow" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/favicon.svg" />
        </Head>
        <Toaster
          position="top-right"
          toastOptions={{
            className: '',
            duration: 4000,
            success: {
              style: {
                padding: '8px',
                fontSize: '12px',
              },
            },
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WagmiConfig>
    </Provider>
  );
}

export default trpc.withTRPC(
  dynamic(() => Promise.resolve(MyApp), {
    ssr: false,
  })
);
