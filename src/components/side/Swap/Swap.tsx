import toast from 'react-hot-toast';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import GenericBtn from '../../buttons/GenericBtn';
import PayInput from '../CurrencyInputs/PayInput';
import ReceiveInput from '../CurrencyInputs/ReceiveInput';
import { mock } from '../../../utils/mockRequest';
import { selectAllCurrencies } from '../../../redux/currency-selector/selectors';

export default function Swap() {
  const [coin1, setCoin1] = useState<string>('');
  const [coin2, setCoin2] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const {
    longCurrency: { symbol: longSymbol, name: longName },
    payCurrency: { symbol: paySymbol, name: payName },
  } = useSelector(selectAllCurrencies);

  const handleConfirm = () => {
    // Test function to show all values
    setLoading(true);
    toast.promise(mock(true, 2000), {
      success: () => {
        setLoading(false);
        return `Transactions confirmed with values:
    Pay: ${payName} - ${paySymbol} amount $${coin1}
    Receive: ${longName} - ${longSymbol} amount $${coin2}
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
    <div className="trade">
      <div className="trade__inputs">
        <PayInput value={coin1} setValue={setCoin1} label="Pay" />
        <div className="spaceDelimeter" />
        <ReceiveInput value={coin2} setValue={setCoin2} label="Receive" />
      </div>
      <h6 className="xsm">Fees</h6>
      <GenericBtn
        btnTextMain="Confirm"
        classNamesMain={`button primary sm ${loading ? 'disabledBtn' : ''}`}
        classNamesConnect="button primary sm"
        onClickFunc={handleConfirm}
        disabled={loading}
      />
    </div>
  );
}
