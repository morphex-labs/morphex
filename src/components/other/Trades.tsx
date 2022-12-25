/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { trades } from '../../base/Moduls';
import TradeItem from './TradeItem';

export default function Trades() {
  const [table, setTable] = useState(true);

  return (
    <div className="tradeOther">
      {table ? (
        trades.map((item, index) => {
          return <TradeItem {...item} key={index} index={index} />;
        })
      ) : (
        <div className="tradeOther__box">
          <p className="xsm">No trades found</p>
        </div>
      )}
    </div>
  );
}
