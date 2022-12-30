import { DocumentNode, gql } from '@apollo/client';

import { FEED_ID_MAP } from '../feeds';

export type PriceFeedQuery = {
  rounds: [
    {
      __typename: string;
      unixTimestamp: number;
      value: string;
    }
  ];
};

type PriceAndTimestamp<T> = {
  [key: number]: T;
};

type Prices = number[];

export const mapSymbolToFeedId = (symbol: string) => {
  return Object.entries(FEED_ID_MAP).find((v) =>
    v[0].toLowerCase().includes(symbol.toLowerCase())
  );
};

export const getGqlQueryBySymbol = (symbol: string): DocumentNode => {
  const chainLinkAggregatorContract = mapSymbolToFeedId(symbol)?.[1];

  const GET_ROUNDS = gql`
    {
      rounds(
        first: 100
        skip: 1000
        orderBy: unixTimestamp
        orderDirection: desc
        where: { feed: "${chainLinkAggregatorContract}" }
      ) {
        unixTimestamp
        value
      }
    }
  `;

  return GET_ROUNDS;
};

export const getPriceAndTimestamp = (
  data: PriceFeedQuery
): PriceAndTimestamp<number>[] => {
  const pricesWTimestamp: PriceAndTimestamp<number>[] = [];
  const uniqTs = new Set();
  data.rounds.forEach((item) => {
    const { unixTimestamp, value } = item;
    if (uniqTs.has(unixTimestamp)) {
      return;
    }

    uniqTs.add(item.unixTimestamp);
    const price = Number(value) / 1e8;
    pricesWTimestamp.push([unixTimestamp, price]);
  });

  // @ts-ignore
  pricesWTimestamp.sort((a, b) => a - b);

  return pricesWTimestamp;
};

export const getPrice = (data: PriceFeedQuery): Prices => {
  const prices: Prices = [];
  const uniqTs = new Set();
  data.rounds.forEach((item) => {
    const { unixTimestamp, value } = item;
    if (uniqTs.has(unixTimestamp)) {
      return;
    }

    uniqTs.add(item.unixTimestamp);
    const price = Number(value) / 1e8;
    prices.push(price);
  });

  prices.sort((a, b) => a - b);

  return prices;
};

export const getMinMaxPrice = (data: Prices) => {
  return {
    min: Math.min(...data),
    max: Math.max(...data),
  };
};
