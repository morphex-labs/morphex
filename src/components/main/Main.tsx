/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import {
  AdvancedRealTimeChart,
  CopyrightStyles,
  Ticker,
} from 'react-ts-tradingview-widgets';

import { selectTheme } from '../../redux/theme/selectors';

const MainChart = memo(() => {
  const theme = useSelector(selectTheme);

  const styles: CopyrightStyles = {
    parent: {
      display: 'none',
    },
  };

  return (
    <div className="tradeMain">
      <div className="tradeMain__header">
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
      </div>
      {/* <ChartComponent /> */}
      <div id="tradingview-graph1" className="tradeMain__graph">
        <AdvancedRealTimeChart
          theme={theme === 'dark' ? 'dark' : 'light'}
          locale="en"
          autosize
          symbol="BINANCE:FTMUSD"
          interval="240"
          toolbar_bg="#f1f3f6"
          withdateranges
          hide_side_toolbar
          allow_symbol_change
          show_popup_button
          popup_width="1000"
          popup_height="650"
          copyrightStyles={styles}
        />
      </div>
    </div>
  );
});

export default MainChart;
