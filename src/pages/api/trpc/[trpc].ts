import * as trpcNext from '@trpc/server/adapters/next';
import toast from 'react-hot-toast';

import { appRouter } from '../../../server/routers/_app';
import { createContext } from '../../../server/createContext';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    if (error.code === 'INTERNAL_SERVER_ERROR') {
      toast.error(`Something went wrong with the server: ${error.message}`);
    } else {
      toast.error(error.message);
    }
  },
});
