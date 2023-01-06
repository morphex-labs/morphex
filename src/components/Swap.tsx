import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { arrowBottom } from '../base/SVG';
import ManageLiquid from '../base/modals/ManageLiquid';
import AddLiquid from '../base/modals/AddLiquid';
import RemoveLiquid from '../base/modals/RemoveLiquid';

interface InputProps {
  label: string;
  coinImage: string;
  coinTitle: string;
  balance: number;
  value: string;
  setValue: (value: any) => void;
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
      <label htmlFor="none">
        <div className="input__lqdr">
          <img src={coinImage} alt="mlqdr" />
          {coinTitle}
        </div>
        <div className="input__row">
          <div className="input__coin">{balance}</div>
          <div className="input__max">
            <span role="presentation" onClick={() => setValue(balance * 0.5)}>
              50%
            </span>{' '}
            <span role="presentation" onClick={() => setValue(balance)}>
              MAX
            </span>
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
          <div className="input__onumber">Balance</div>
        </div>
      </div>
    </div>
  );
};

export default function Swap() {
  const [swap, setSwap] = useState<boolean>(false);
  const [coin1, setCoin1] = useState<string>('');
  const [coin2, setCoin2] = useState<string>('');
  const [manageLiquid, setManageLiquid] = useState<boolean>(false);
  const [addLiquid, setAddLiquid] = useState<boolean>(false);
  const [removeLiquid, setRemoveLiquid] = useState<boolean>(false);

  const balanceLqdr = 1000;
  const balanceMlqdr = 1200;

  return (
    <>
      <div className="swap">
        <div className="swap__header">
          <div className="swap__header-text">
            <h6>Swap</h6>
            <h6 className="xsm">mLQDR & LQDR</h6>
          </div>
          <button
            type="button"
            className="button secondary sm rad"
            onClick={() => setManageLiquid(true)}
          >
            Manage Liquidity
          </button>
        </div>
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
            <div
              role="presentation"
              className="swap__inputs-arrow"
              onClick={() => setSwap(!swap)}
            >
              {arrowBottom}
            </div>
            {swap ? (
              <Input
                value={coin2}
                setValue={setCoin2}
                label="Output"
                coinImage="/images/icons/lqdrLarge.png"
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
          <div className="swapItem">
            <h6 className="xsm">Price impact</h6>
            <p className="xsm">0.00%</p>
          </div>
        </div>
        <div className="swap__footer">
          <button type="button" className="button primary sm">
            Approve
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {manageLiquid ? (
          <ManageLiquid
            setAddLiquid={setAddLiquid}
            setRemoveLiquid={setRemoveLiquid}
            closeFunc={() => setManageLiquid(false)}
          />
        ) : (
          ''
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {addLiquid ? <AddLiquid closeFunc={() => setAddLiquid(false)} /> : ''}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {removeLiquid ? (
          <RemoveLiquid closeFunc={() => setRemoveLiquid(false)} />
        ) : (
          ''
        )}
      </AnimatePresence>
    </>
  );
}
