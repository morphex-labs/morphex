import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import useDebounce from '../hooks/input/useDebounce';
import { saveSettings } from '../redux/settings/slice';

const Settings: React.FC = () => {
  const maxAllowedSlippage = 10;

  const dispatch = useDispatch();
  const settings = useSelector((state: RootState) => state.settings);

  const [allowedSlippage, setAllowSlippage] = useState(
    settings.allowedSlippage
  );
  const [displayPnl, setDisplayPnl] = useState(settings.displayPnl);
  const [includePnl, setIncludePnl] = useState(settings.includePnl);

  const [error, setError] = useState<null | string>(null);

  const debouncedValue = useDebounce<string>(allowedSlippage, 800);

  useEffect(() => {
    checkAllowedSlippage(debouncedValue);
  }, [debouncedValue]);

  const save = () => {
    if (!error) {
      dispatch(saveSettings({ allowedSlippage, displayPnl, includePnl }));
      toast.success(
        `Settings saved successfully:\n 
        Allowed Slippage: ${allowedSlippage}
        Display PnL after fees: ${displayPnl ? 'Yes' : 'No'} 
        Include PnL in leverage display: ${includePnl ? 'Yes' : 'No'}`
      );
    }
  };

  const handleSlippageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllowSlippage(e.target.value);
  };

  const checkAllowedSlippage = (dbValue: string) => {
    setError('');
    if (dbValue.includes('.')) {
      const valueParts = dbValue.split('.');
      if (parseInt(valueParts[0], 10) > 10) {
        setError(`Allowed Slippage cannot be more than ${maxAllowedSlippage}%`);
      }
    } else if (parseInt(dbValue, 10) > 10) {
      setError(`Allowed Slippage cannot be more than ${maxAllowedSlippage}%`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, skewX: -30 }}
      animate={{ opacity: 1, scale: 1, skewX: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, scale: 0, skewX: -30 }}
    >
      <div className="sett__drop">
        <h6>Settings</h6>
        <div className="settInput">
          <label htmlFor="none">
            Allowed Slippage (MAX: {maxAllowedSlippage}%)
          </label>
          <div className="input">
            <input
              type="number"
              placeholder={allowedSlippage}
              onChange={handleSlippageChange}
            />
            <div className="input__btns">
              <div className="input__coin">%</div>
            </div>
          </div>
          {error && <p className="errorPTag">{error}</p>}
        </div>
        <div className="settCheck">
          <input
            type="checkbox"
            checked={displayPnl}
            onChange={() => setDisplayPnl(!displayPnl)}
          />
          <label htmlFor="none"> Display PnL after fees</label>
        </div>
        <div className="settCheck">
          <input
            type="checkbox"
            checked={includePnl}
            onChange={() => setIncludePnl(!includePnl)}
          />
          <label htmlFor="none"> Include PnL in leverage display</label>
        </div>
        <button
          type="button"
          className="button primary sm"
          style={{ width: '100%' }}
          onClick={save}
          disabled={error?.length !== 0}
        >
          Save Settings
        </button>
      </div>
    </motion.div>
  );
};

export default Settings;
