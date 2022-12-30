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

export const getPriceAndTimestamp = (
  data: PriceFeedQuery
): { pricesWTimestamp: PriceAndTimestamp<number>[]; prices: Prices } => {
  const pricesWTimestamp: PriceAndTimestamp<number>[] = [];
  const prices: Prices = [];
  const uniqTs = new Set();
  data.rounds.forEach((item) => {
    const { unixTimestamp, value } = item;
    if (uniqTs.has(unixTimestamp)) {
      return;
    }

    uniqTs.add(item.unixTimestamp);
    const price = Number(value) / 1e8;
    pricesWTimestamp.push([unixTimestamp, price]);
    prices.push(price);
  });

  pricesWTimestamp.sort((a, b) => a - b);

  return {
    pricesWTimestamp,
    prices,
  };
};

export const getMinMaxPrice = (data: Prices) => {
  return {
    min: Math.min(...data),
    max: Math.max(...data),
  };
};
