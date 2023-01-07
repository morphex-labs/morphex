import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import { InputProps } from './Input';
import { RootState } from '../../../redux/store';
import ChooseCurrencyLongShort from '../../../base/modals/currency/ChooseCurrencyLongShort';

const LongShortInput = ({ label, value, setValue, leverage }: InputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const symbol = useSelector(
    (state: RootState) => state.selectCurrency.longCurrency.symbol
  );

  const openDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="input__outer">
      <p className="xsm" />
      <label htmlFor="none">
        {label} <span>{leverage ? <>Leverage: {leverage}.00x</> : ''}</span>
      </label>
      <div className="input ">
        <input
          type="number"
          placeholder="0.0"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <div className="input__btns">
          <div
            role="presentation"
            className="input__number"
            onClick={openDropdown}
          >
            {symbol}
          </div>
          <AnimatePresence mode="wait">
            {isOpen ? (
              <ChooseCurrencyLongShort
                closeFunc={() => setIsOpen(false)}
                actionName={label}
              />
            ) : (
              ''
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LongShortInput;
