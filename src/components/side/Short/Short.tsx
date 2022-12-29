import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import RangeSlider from '../../../base/RangeSlider';
import GenericBtn from '../../buttons/GenericBtn';
import PayInput from '../CurrencyInputs/PayInput';
import LongShortInput from '../CurrencyInputs/LongShortInput';
import { mock } from '../../../utils/mockRequest';
import { selectAllCurrencies } from '../../../redux/currency-selector/selectors';
import PriceInput from '../CurrencyInputs/PriceInputs';

export const shortInfo = [
  {
    id: '1',
    title: 'Collateral In',
    other: 'USD',
  },
  {
    id: '2',
    title: 'Leverage',
    other: '0.00',
  },
  {
    id: '3',
    title: 'Entry Price',
    other: '0.00',
  },
  {
    id: '4',
    title: 'Liquidity Price',
    other: '0.00',
  },
  {
    id: '5',
    title: 'Fees',
    other: '0.00',
  },
];

export default function Short() {
  const [type, setType] = useState<string>('market');
  const [coin1, setCoin1] = useState<string>('');
  const [coin2, setCoin2] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [leverageValue, setLeverageValue] = useState<string>('2');
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
        Type: ${type}
        Leverage: ${leverageValue}
        Pay: ${payName} - ${paySymbol} amount $${coin1}
        Short: ${longName} - ${longSymbol} amount $${coin2}
        Price: ${price}
      `;
      },
      error: () => {
        setLoading(false);
        return 'Transaction failed!';
      },
      loading: 'Confirming your transaction... please wait.',
    });
  };

  useEffect(() => {
    if (leverageValue === '0') setLeverageValue('2');
    else if (leverageValue === '1') setLeverageValue('2');
  }, [leverageValue]);

  return (
    <div className="trade">
      <div className="trade__type">
        <div
          role="presentation"
          onClick={() => setType('market')}
          className={`trade__type-btn ${type === 'market' ? 'active' : ''}`}
        >
          Market
        </div>
        <div
          role="presentation"
          onClick={() => setType('limit')}
          className={`trade__type-btn ${type === 'limit' ? 'active' : ''}`}
        >
          Limit
        </div>
      </div>
      <div className="trade__inputs">
        <PayInput value={coin1} setValue={setCoin1} label="Pay" />
        <div className="spaceDelimeter" />
        <LongShortInput
          value={coin2}
          setValue={setCoin2}
          label="Short"
          leverage={leverageValue}
        />
        <div className="spaceDelimeter" />
        <PriceInput value={price} setValue={setPrice} label="Price" />
      </div>
      <RangeSlider
        min="0"
        max="30"
        title="title"
        type1="type1"
        value="0"
        onChange={(e) => {
          setLeverageValue(e.target.value);
        }}
      />
      <div className="trade__items">
        {shortInfo.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 * index }}
              exit={{ opacity: 0, x: -20 }}
              className="tradeItem"
              key={item.id}
            >
              <h6 className="xsm">{item.title}</h6>
              <p className="xsm">{item.other}</p>
            </motion.div>
          );
        })}
      </div>

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
