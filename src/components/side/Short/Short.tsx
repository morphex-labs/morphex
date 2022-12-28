import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { arrowBottom } from '../../../base/SVG';
import RangeSlider from '../../../base/RangeSlider';
import GenericBtn from '../../buttons/GenericBtn';

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

interface InputProps {
  label: string;
  value: string;
  setValue: (prop: string) => void;
  currencry: string;
  leverage?: string;
}

const Input = ({ label, value, setValue, currencry, leverage }: InputProps) => {
  return (
    <div className="input__outer">
      <p className="xsm" />
      <label htmlFor="none">
        {label} <span>{leverage ? <>Leverage: {leverage}.00x</> : ''}</span>
      </label>
      <div className="input ">
        <input
          type="text"
          placeholder="0.0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="input__btns">
          <div className="input__number">{currencry}</div>
        </div>
      </div>
    </div>
  );
};

export default function Short() {
  const [swap, setSwap] = useState(false);
  const [type, setType] = useState('market');
  const [coin1, setCoin1] = useState('');
  const [coin2, setCoin2] = useState('');
  const [leverageValue, setLeverageValue] = useState('2');

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
        {!swap ? (
          <Input
            value={coin1}
            setValue={setCoin1}
            label="Pay"
            currencry="ETH"
          />
        ) : (
          <Input
            value={coin1}
            setValue={setCoin1}
            label="Short"
            leverage={leverageValue}
            currencry="ETH"
          />
        )}
        <div
          role="presentation"
          className="trade__inputs-arrow"
          onClick={() => setSwap(!swap)}
        >
          {arrowBottom}
        </div>
        {swap ? (
          <Input
            value={coin2}
            setValue={setCoin2}
            label="Pay"
            currencry="ETH"
          />
        ) : (
          <Input
            value={coin2}
            setValue={setCoin2}
            label="Short"
            leverage={leverageValue}
            currencry="ETH"
          />
        )}
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
        classNamesMain="button primary sm"
        classNamesConnect="button primary sm"
      />
    </div>
  );
}
