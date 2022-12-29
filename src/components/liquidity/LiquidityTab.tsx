import React, { useState } from 'react';

import GenericBtn from '../buttons/GenericBtn';
import LiquidityPayInput from '../side/CurrencyInputs/LiquidityPayInput';
import LiquidityReceiveInput from '../side/CurrencyInputs/LiquidityReceiveInput';

export default function LiquidityTab() {
  const [state, setState] = useState('mint');
  const [coin1, setCoin1] = useState('');
  const [coin2, setCoin2] = useState('');

  return (
    <div className="liquidityTab">
      <div className="liquidityTab__header">
        <button
          type="button"
          onClick={() => setState('mint')}
          className={`button sm ${state === 'mint' ? 'active' : ''}`}
        >
          Mint MLP
        </button>
        <button
          type="button"
          onClick={() => setState('redeem')}
          className={`button sm ${state === 'redeem' ? 'active' : ''}`}
        >
          Redeem MLP
        </button>
      </div>
      {state === 'mint' && (
        <LiquidityPayInput label="Pay" setValue={setCoin1} value={coin1} />
      )}
      {state === 'redeem' && (
        <LiquidityReceiveInput
          label="Receive"
          setValue={setCoin2}
          value={coin2}
        />
      )}
      <div className="liquidityTab__footer">
        <GenericBtn
          btnTextMain="Confirm"
          classNamesMain="button primary sm"
          classNamesConnect="button primary sm"
        />
      </div>
    </div>
  );
}
