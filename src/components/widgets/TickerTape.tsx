import React from 'react';
import { useSelector } from 'react-redux';
import { CopyrightStyles, TickerTape } from 'react-ts-tradingview-widgets';
import { selectTheme } from '../../redux/theme/selectors';

const styles: CopyrightStyles = {
  parent: {
    display: 'none',
  },
};

const TwTickerTape = () => {
  const theme = useSelector(selectTheme);

  return (
    <TickerTape
      colorTheme={theme === 'dark' ? 'dark' : 'light'}
      copyrightStyles={styles}
      displayMode="regular"
      isTransparent
      locale="en"
      showSymbolLogo
      symbols={[
        {
          title: 'Bitcoin',
          proName: 'BINANCE:BTCUSDT',
        },
        {
          title: 'Ethereum',
          proName: 'BINANCE:ETHUSDT',
        },
        {
          title: 'Fantom',
          proName: 'BINANCE:FTMUSDT',
        },
        {
          title: 'Chainlink',
          proName: 'BINANCE:LINKUSDT',
        },
      ]}
    />
  );
};

export default TwTickerTape;
