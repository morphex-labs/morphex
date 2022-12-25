import React, { useState } from 'react';

import { long, short, swap } from '../../base/SVG';
import Swap from './Swap/Swap';
import SwapDetail from './Swap/SwapDetail';
import LongDetail from './Long/LongDetail';
import ShortDetail from './Short/ShortDetail';
import Long from './Long/Long';
import Short from './Short/Short';

export default function Side() {
  const [tab, seTtab] = useState('long');
  return (
    <div className="tradeSide">
      <div className="tradeSide__box">
        <div className="tradeSide__header">
          <button
            type="button"
            onClick={() => seTtab('long')}
            className={`button sm ${tab === 'long' ? 'active' : ''}`}
          >
            {long} Long
          </button>
          <button
            type="button"
            onClick={() => seTtab('short')}
            className={`button sm ${tab === 'short' ? 'active' : ''}`}
          >
            {short} Short
          </button>
          <button
            type="button"
            onClick={() => seTtab('swap')}
            className={`button sm ${tab === 'swap' ? 'active' : ''}`}
          >
            {swap} Swap
          </button>
        </div>
        <div className="tradeSide__body">
          {tab === 'long' && <Long />}
          {tab === 'short' && <Short />}
          {tab === 'swap' && <Swap />}
        </div>
      </div>
      <div className="tradeSide__box">
        {tab === 'long' && <LongDetail />}
        {tab === 'short' && <ShortDetail />}
        {tab === 'swap' && <SwapDetail />}
      </div>
    </div>
  );
}
