import React from 'react';

import { InputProps } from './Input';

const PriceInput = ({ label, value, setValue }: InputProps) => {
  const markPrice = 100;
  return (
    <div className="input__outer">
      <p className="xsm" />
      <label htmlFor="none">
        {label}
        <span>Mark: ${markPrice}</span>
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
      </div>
    </div>
  );
};

export default PriceInput;
