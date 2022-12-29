import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectAllCurrencies } from '../../redux/currency-selector/selectors';

import { mock } from '../../utils/mockRequest';
import GenericBtn from '../buttons/GenericBtn';
import LiquidityMintInput from '../side/CurrencyInputs/LiquidityMintInput';
import LiquidityRedeemInput from '../side/CurrencyInputs/LiquidityRedeemInput';

export default function LiquidityTab() {
  const [state, setState] = useState<string>('mint');
  const [mintCoin1, setMintCoin1] = useState<string>('');
  const [mintCoin2, setMintCoin2] = useState<string>('');
  const [redeemCoin1, setRedeemCoin1] = useState<string>('');
  const [redeemCoin2, setRedeemCoin2] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const {
    payCurrency: { symbol: paySymbol },
  } = useSelector(selectAllCurrencies);

  const resetFields = () => {
    setMintCoin1('');
    setMintCoin2('');
    setRedeemCoin1('');
    setRedeemCoin2('');
  };

  const handleConfirm = () => {
    // Test function to show all values
    resetFields();
    setLoading(true);
    toast.promise(mock(true, 2000), {
      success: () => {
        setLoading(false);
        return `Transactions confirmed with values:
        Type: ${state}
        Pay: ${paySymbol} $${state === 'mint' ? mintCoin1 : redeemCoin1}
        Receive: $${state === 'mint' ? mintCoin2 : redeemCoin2}
        `;
      },
      error: () => {
        setLoading(false);
        return 'Transaction failed!';
      },
      loading: 'Confirming your transaction... please wait.',
    });
  };

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
        <LiquidityMintInput
          label="Pay"
          setValue={setMintCoin1}
          value={mintCoin1}
          setValue2={setMintCoin2}
          value2={mintCoin2}
        />
      )}
      {state === 'redeem' && (
        <LiquidityRedeemInput
          label="Pay"
          setValue={setRedeemCoin1}
          setValue2={setRedeemCoin2}
          value={redeemCoin1}
          value2={redeemCoin2}
        />
      )}
      <div className="liquidityTab__footer">
        <GenericBtn
          btnTextMain="Confirm"
          classNamesMain={`button primary sm ${loading ? 'disabledBtn' : ''}`}
          classNamesConnect="button primary sm"
          onClickFunc={handleConfirm}
          disabled={loading}
        />
      </div>
    </div>
  );
}
