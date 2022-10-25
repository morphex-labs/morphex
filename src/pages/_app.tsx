import { withTRPC } from '@trpc/next';
import type { AppProps } from 'next/app';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { Provider } from 'react-redux';
import superjson from 'superjson';
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { WagmiConfig, createClient, Chain } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

import '../scss/main.scss';
import { URL } from '../constants';
import { AppRouter } from '../server/route/app.router';
import { store } from '../redux/store';
import Layout from '../components/Layout';

const ftmScan = { name: 'Ftmscan', url: 'https://ftmscan.com/' }; // blockexplorer for Fantom

// Since Fantom is not a default chain supported by wagmi, we need to import the Chain type and create our own
const ftm: Chain = {
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

// Creating the web3 client in wagmi, using "getDefaultClient" from ConnectKit which simplifies for us.
const client = createClient(
  getDefaultClient({
    appName: 'Morphex',
    chains: [ftm],
  })
);

// Adding in the wagmi/connectkit providers in MyApp
// NOTE: Not sure if we need to duplicate the provider from redux if we're adding in the web3 providers,
// so for now I just wrapped everything with the web3 providers. ConnectKitProvider goes inside WagmiConfig
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Provider store={store}>
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
                },
              },
            }}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    const links = [
      loggerLink(),
      httpBatchLink({
        maxBatchSize: 10,
        url: URL,
      }),
    ];

    return {
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            'x-ssr': '1',
          };
        }
        return {};
      },
      links,
      transformer: superjson,
    };
  },
  ssr: false,
})(
  dynamic(() => Promise.resolve(MyApp), {
    ssr: false,
  })
);
