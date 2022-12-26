/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useSelector } from 'react-redux';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

import { selectTheme } from '../../redux/theme/selectors';

export default function Main() {
  const theme = useSelector(selectTheme);

  return (
    <div className="tradeMain">
      <div className="tradeMain__header">
        <div className="button primary">ETH / USD</div>
        <div className="tradeMain__header-info">
          <h6 className="xsm">Price</h6>
          <p className="xsm">$1,630.70</p>
        </div>
        <div className="tradeMain__header-info">
          <h6 className="xsm">24H Chance</h6>
          <p className="xsm">-0.88%</p>
        </div>
        <div className="tradeMain__header-info">
          <h6 className="xsm">24H High</h6>
          <p className="xsm">1,666.90</p>
        </div>
        <div className="tradeMain__header-info">
          <h6 className="xsm">24H Low</h6>
          <p className="xsm">1,623.70</p>
        </div>
      </div>
      {/* <ChartComponent /> */}
      <div id="tradingview-graph1" className="tradeMain__graph">
        <TradingViewWidget
          symbol="BINANCE:BTCUSDT"
          theme={theme === 'dark' ? Themes.DARK : Themes.LIGHT}
          locale="en"
          autosize
          interval="240"
          toolbar_bg="#f1f3f6"
          withdateranges
          hide_side_toolbar
          allow_symbol_change
          show_popup_button
          popup_width="1000"
          popup_height="650"
        />
      </div>
    </div>
  );
}
