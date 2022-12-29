import { motion } from 'framer-motion';
import React from 'react';
import { InputProps } from './Input';

const LiquidityPayInput: React.FC<InputProps> = ({
  label,
  setValue,
  value,
}) => {
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
          <span>Pay: $0.00</span> <span>Balance: 0.00</span>
        </label>
        <div className="input">
          <input type="number" placeholder="0.0" />
          <div className="input__btns">
            <button type="button" className="input__max">
              MAX
            </button>
            <div className="input__coin">ETH</div>
          </div>
        </div>
      </div>
      <div className="input__outer">
        <label htmlFor="receive-idx">
          <span id="receive-idx">Receive: $0.00</span>{' '}
          <span>Balance: 0.00</span>
        </label>
        <div className="input">
          <input type="number" placeholder="0.0" />
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

export default LiquidityPayInput;
