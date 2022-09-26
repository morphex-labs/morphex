import { withTRPC } from '@trpc/next';
import type { AppProps } from 'next/app';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { Provider } from 'react-redux';
import superjson from 'superjson';
import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';

import '../scss/app.scss';
import { URL } from '../constants';
import { AppRouter } from '../server/route/app.router';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
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
      <Component {...pageProps} />
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
