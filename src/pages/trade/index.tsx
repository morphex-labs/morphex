import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import Side from '../../components/side/Side';
import Positions from '../../components/other/Positions';
import Orders from '../../components/other/Orders';
import Trades from '../../components/other/Trades';

const MainChart = dynamic(() => import('../../components/main/Main'), {
  ssr: false,
});

export default function Trade() {
  const [tab, setTab] = useState('positions');
  return (
    <div className="sideWrap">
      <div className="auto__container">
        <div className="sideWrap__inner">
          <div className="sideWrap__main">
            <MainChart />
          </div>
          <div className="sideWrap__side">
            <Side />
          </div>
          <div className="sideWrap__other">
            <div className="tradeOther__header">
              <button
                type="button"
                onClick={() => setTab('positions')}
                className={`button sm ${tab === 'positions' ? 'active' : ''}`}
              >
                Positions
              </button>
              <button
                type="button"
                onClick={() => setTab('orders')}
                className={`button sm ${tab === 'orders' ? 'active' : ''}`}
              >
                Orders
              </button>
              <button
                type="button"
                onClick={() => setTab('trades')}
                className={`button sm ${tab === 'trades' ? 'active' : ''}`}
              >
                Trades
              </button>
            </div>
            <div className="tradeOther__body">
              {tab === 'positions' && <Positions />}
              {tab === 'orders' && <Orders />}
              {tab === 'trades' && <Trades />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
