import { withTRPC } from '@trpc/next';
import type { AppProps } from 'next/app';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { Provider } from 'react-redux';
import superjson from 'superjson';
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import '../scss/main.scss';
import { URL } from '../constants';
import { AppRouter } from '../server/route/app.router';
import { store } from '../redux/store';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Morphex</title>
        <meta name="description" content="Morphex Swap - Lend & Borrow" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Rubik:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
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
