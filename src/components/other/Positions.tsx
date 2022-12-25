/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { positions } from '../../base/Moduls';
import PositionItem from './PositionItem';

export default function Positions() {
  const [table, setTable] = useState(true);

  return (
    <div className="table gen">
      {table ? (
        <table>
          <thead>
            <tr>
              <th>Positions</th>
              <th>Net Value</th>
              <th>Size</th>
              <th>Collateral</th>
              <th>Mark Price</th>
              <th>Entry Price</th>
              <th>Liquidation Price</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {positions.map((item, index) => {
              return <PositionItem {...item} index={index} key={index} />;
            })}
          </tbody>
        </table>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Positions</th>
                <th>Net Value</th>
                <th>Size</th>
                <th>Collateral</th>
                <th>Mark Price</th>
                <th>Entry Price</th>
                <th>Liquidation Price</th>
                <th />
              </tr>
            </thead>
          </table>
          <div className="table__placeholder">
            <p className="xsm">No positions found</p>
          </div>
        </>
      )}
    </div>
  );
}
