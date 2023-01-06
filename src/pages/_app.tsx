/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Head from 'next/head';
import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';

import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { WagmiConfig } from 'wagmi';
import { ApolloProvider } from '@apollo/client';

import '../scss/main.scss';
import { trpc } from '../utils/trpc';
import { store } from '../redux/store';
import web3Client from '../wagmi/client';
import Layout from '../components/Layout';
import { chainlinkClient } from '../subgraph/clients';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={chainlinkClient}>
      <Provider store={store}>
        <WagmiConfig client={web3Client}>
          <Head>
            <title>Morphex</title>
            <meta
              name="description"
              content="Morphex Swap - Lend & Borrow. A decentralized perpetual exchange."
            />
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
    </ApolloProvider>
  );
}

export default trpc.withTRPC(
  dynamic(() => Promise.resolve(MyApp), {
    ssr: false,
  })
);
