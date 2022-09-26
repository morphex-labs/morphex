import { NextApiRequest, NextApiResponse } from 'next';

interface ContextProps {
  req: NextApiRequest;
  res: NextApiResponse;
}

export function createContext({ req, res }: ContextProps) {
  return {
    req,
    res,
  };
}

export type Context = ReturnType<typeof createContext>;
