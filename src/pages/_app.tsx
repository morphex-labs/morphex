import { withTRPC } from '@trpc/next';
import type { AppProps } from 'next/app';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { Provider } from 'react-redux';
import superjson from 'superjson';
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { WagmiConfig, createClient } from 'wagmi';
import { ConnectKitProvider, getDefaultClient } from 'connectkit';

import '../scss/main.scss';
import { URL, ftmChain } from '../constants';
import { AppRouter } from '../server/route/app.router';
import { store } from '../redux/store';
import Layout from '../components/Layout';

// Creating the web3 client in wagmi, using "getDefaultClient" from ConnectKit which simplifies for us.
const client = createClient(
  getDefaultClient({
    appName: 'Morphex',
    chains: [ftmChain],
  })
);

// Adding in the wagmi/connectkit providers in MyApp
// NOTE: Not sure if we need to duplicate the provider from redux if we're adding in the web3 providers,
// so for now I just wrapped everything with the web3 providers. ConnectKitProvider goes inside WagmiConfig
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <WagmiConfig client={client}>
        <ConnectKitProvider
          theme="auto"
          mode="light"
          options={{
            embedGoogleFonts: true,
            disclaimer:
              'Morphex is a fully decentralized stablecoin protocol. No representation or warranty is made concerning any aspect of the Morphex Protocol, including its suitability, quality, availability, accessibility, accuracy or safety. Your access to and use of the Morphex Protocol through this interface is entirely at your own risk and could lead to substantial losses. You take full responsibility for your use of the interface, and acknowledge that you use it on the basis of your own enquiry, without solicitation or inducement by Contributors.',
          }}
        >
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
        </ConnectKitProvider>
      </WagmiConfig>
    </Provider>
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
