import React from 'react';
import { useSelector } from 'react-redux';
import { CopyrightStyles, Ticker } from 'react-ts-tradingview-widgets';

import { selectTheme } from '../../redux/theme/selectors';

const styles: CopyrightStyles = {
  parent: {
    display: 'none',
  },
};

const TwTicker = () => {
  const theme = useSelector(selectTheme);

  return (
    <Ticker
      colorTheme={theme === 'dark' ? 'dark' : 'light'}
      isTransparent
      showSymbolLogo
      locale="en"
      symbols={[
        {
          proName: 'BINANCE:FTMUSD',
          title: 'Fantom',
        },
        {
          proName: 'BITSTAMP:BTCUSD',
          title: 'Bitcoin',
        },
        {
          proName: 'BITSTAMP:ETHUSD',
          title: 'Ethereum',
        },
      ]}
      copyrightStyles={styles}
    />
  );
};

export default TwTicker;
