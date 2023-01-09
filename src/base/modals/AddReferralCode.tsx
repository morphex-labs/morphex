import React, { useState } from 'react';
import useDebounce from '../../hooks/input/useDebounce';
import Modal from './Modal';

interface InputProps {
  closeFunc: () => void;
  actionName: string;
}

const AddReferralCode: React.FC<InputProps> = ({ actionName, closeFunc }) => {
  const [code, setCode] = useState<string>('');
  const debouncedValue = useDebounce<string>(code, 800);

  return (
    <Modal title={`${actionName} referral code`} closeFunc={closeFunc}>
      <div className="referral__body">
        <input
          type="text"
          placeholder="Enter referral code"
          value={code}
          className="referral__body-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCode(e.target.value)
          }
        />
      </div>
      <div className="referral__footer">
        <button type="button" className="button primary sm">
          {actionName}
        </button>
      </div>
    </Modal>
  );
};

export default AddReferralCode;
