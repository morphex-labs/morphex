/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Modal from './Modal';
import { arrowBottom } from '../SVG';

interface InputProps {
  label: string;
  coinImage: string;
  coinTitle: string;
  balance: number;
  value: string;
  setValue: (prop: any) => void;
}

const Input = ({
  label,
  coinImage,
  coinTitle,
  balance,
  value,
  setValue,
}: InputProps) => {
  return (
    <div className="input__outer">
      <p className="xsm">{label}</p>
      <label htmlFor="input-lqdr-id">
        <div id="input-lqdr-id" className="input__lqdr">
          <img src={coinImage} alt="mlqdr" />
          {coinTitle}
        </div>
        <div className="input__row">
          <div className="input__coin">{balance}</div>
          <div className="input__max">
            <span onClick={() => setValue(balance * 0.5)}>50%</span>{' '}
            <span onClick={() => setValue(balance)}>MAX</span>
          </div>
        </div>
      </label>
      <div className="input reverse">
        <input
          type="text"
          placeholder="0.0"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="input__btns">
          <div className="input__number">Balance</div>
        </div>
      </div>
    </div>
  );
};

export default function AddLiquid({ closeFunc }: { closeFunc: () => void }) {
  const [swap, setSwap] = useState<boolean>(false);
  const [coin1, setCoin1] = useState<string>('');
  const [coin2, setCoin2] = useState<string>('');

  const balanceLqdr = 1000;
  const balanceMlqdr = 1200;

  return (
    <Modal title="Add Liquidity" closeFunc={closeFunc}>
      <div className="swap__body">
        <div className="swap__inputs">
          {!swap ? (
            <Input
              value={coin1}
              setValue={setCoin1}
              label="Input"
              coinImage="/images/icons/lqdrLarge.png"
              coinTitle="LQDR"
              balance={balanceLqdr}
            />
          ) : (
            <Input
              value={coin1}
              setValue={setCoin1}
              label="Input"
              coinImage="/images/icons/mlqdr.png"
              coinTitle="MLQDR"
              balance={balanceMlqdr}
            />
          )}
          <div className="swap__inputs-arrow" onClick={() => setSwap(!swap)}>
            {arrowBottom}
          </div>
          {swap ? (
            <Input
              value={coin2}
              setValue={setCoin2}
              label="Output"
              coinImage="/images/icons/lqdr.png"
              coinTitle="LQDR"
              balance={balanceLqdr}
            />
          ) : (
            <Input
              value={coin2}
              setValue={setCoin2}
              label="Output"
              coinImage="/images/icons/mlqdr.png"
              coinTitle="MLQDR"
              balance={balanceMlqdr}
            />
          )}
        </div>
      </div>
      <div className="swap__footer">
        <button type="button" className="button primary sm">
          Confirm
        </button>
        <button type="button" className="button secondary sm">
          Optimize
        </button>
      </div>
    </Modal>
  );
}
