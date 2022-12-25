import React, { useState } from 'react';
import { arrowBottom } from '../../../base/SVG';

interface InputProps {
  label: string;
  value: string;
  currencry: string;
  setValue: (prop: string) => void;
}

const Input = ({ label, value, setValue, currencry }: InputProps) => {
  return (
    <div className="input__outer">
      <p className="xsm" />
      <label htmlFor="inputValue">{label}</label>
      <div className="input ">
        <input
          id="inputValue"
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

export default function Swap() {
  const [swap, setSwap] = useState<boolean>(false);
  const [coin1, setCoin1] = useState<string>('');
  const [coin2, setCoin2] = useState<string>('');

  return (
    <div className="trade">
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
            label="Receive"
            currencry="USDC"
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
            label="Receive"
            currencry="USDC"
          />
        )}
      </div>
      <h6 className="xsm">Fees</h6>
      <button type="button" className="button primary sm">
        Connect Wallet
      </button>
    </div>
  );
}
