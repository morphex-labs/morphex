/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import {
  AdvancedRealTimeChart,
  CopyrightStyles,
} from 'react-ts-tradingview-widgets';
import { selectLongShort } from '../../redux/currency-selector/selectors';

import { selectTheme } from '../../redux/theme/selectors';
import TwTickerTape from '../widgets/TickerTape';
import TradeHeader from './TradeHeader';

const MainChart = memo(() => {
  const theme = useSelector(selectTheme);

  const { symbol } = useSelector(selectLongShort);

  const styles: CopyrightStyles = {
    parent: {
      display: 'none',
    },
  };

  return (
    <div className="tradeMain">
      <div style={{ height: '50px' }}>
        <TwTickerTape />
      </div>
      <TradeHeader />
      {/* <ChartComponent /> */}
      <div id="tradingview-graph1" className="tradeMain__graph">
        <AdvancedRealTimeChart
          theme={theme === 'dark' ? 'dark' : 'light'}
          locale="en"
          autosize
          symbol={`BINANCE:${symbol}USD`}
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
