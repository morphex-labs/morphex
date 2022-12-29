import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

import { InputProps } from './Input';
import ChooseCurrencyPay from '../../../base/modals/currency/ChooseCurrencyPay';
import { selectPay } from '../../../redux/currency-selector/selectors';

interface LiquidityInputProps extends InputProps {
  setValue2: (prop: string) => void;
  value2: string;
}

const LiquidityMintInput: React.FC<LiquidityInputProps> = ({
  label,
  setValue,
  setValue2,
  value,
  value2,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { symbol } = useSelector(selectPay);

  const openDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, y: 10 }}
      className="liquidityTab__body"
    >
      <div className="input__outer">
        <label htmlFor="none">
          <span>{label}: $0.00</span> <span>Balance: 0.00</span>
        </label>
        <div className="input">
          <input
            type="number"
            placeholder="0.0"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(e.target.value)
            }
          />
          <div className="input__btns">
            <button
              type="button"
              className="input__max"
              style={{ marginRight: '50px' }}
            >
              MAX
            </button>
            <div className="input__btns">
              <div
                role="presentation"
                className="input__number"
                onClick={openDropdown}
              >
                {symbol}
              </div>
              <AnimatePresence exitBeforeEnter>
                {isOpen ? (
                  <ChooseCurrencyPay closeFunc={() => setIsOpen(false)} />
                ) : (
                  ''
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div className="input__outer">
        <label htmlFor="receive-idx">
          <span id="receive-idx">Receive: $0.00</span>{' '}
          <span>Balance: 0.00</span>
        </label>
        <div className="input">
          <input
            type="number"
            placeholder="0.0"
            value={value2}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue2(e.target.value)
            }
          />
          <div className="input__btns">
            <button type="button" className="input__max">
              MAX
            </button>
            <div className="input__coin">MLP</div>
          </div>
        </div>
      </div>
      <p className="xsm">Fees: 0.00</p>
    </motion.div>
  );
};

export default LiquidityMintInput;
