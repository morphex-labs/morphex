import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import GenericBtn from '../../buttons/GenericBtn';
import PayInput from '../CurrencyInputs/PayInput';
import ReceiveInput from '../CurrencyInputs/ReceiveInput';

import ConfirmSwap from '../../../base/modals/ConfirmSwap';
import EnableOrders from '../../../base/modals/EnableOrders';

import { setConfirmType } from '../../../redux/currency-selector/slice';
import { selectConfirmType } from '../../../redux/currency-selector/selectors';
import { selectOrderDisclaimer } from '../../../redux/orders-disclaimer/selectors';

export default function Swap() {
  const dispatch = useDispatch();

  const [coin1, setCoin1] = useState<string>('');
  const [coin2, setCoin2] = useState<string>('');

  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [isConfirmLimitOpen, setIsConfirmLimitOpen] = useState<boolean>(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState<boolean>(false);

  const isOrderDisclaimerShown = useSelector(selectOrderDisclaimer);
  const type = useSelector(selectConfirmType);

  const handleConfirmOpen = () => {
    if (type === 'limit' && !isOrderDisclaimerShown) {
      setIsDisclaimerOpen(!isDisclaimerOpen);
      return;
    }

    type === 'market'
      ? setIsConfirmOpen(!isConfirmOpen)
      : setIsConfirmLimitOpen(!isConfirmLimitOpen);
  };

  useEffect(() => {
    if (coin1.length > 0 && coin2.length > 0) {
      setIsDisabled(false);
    } else if (!coin1 || !coin2) {
      setIsDisabled(true);
    }
  }, [coin1, coin2]);

  return (
    <div className="trade">
      <div className="trade__type">
        <div
          role="presentation"
          onClick={() => dispatch(setConfirmType({ confirmType: 'market' }))}
          className={`trade__type-btn ${type === 'market' ? 'active' : ''}`}
        >
          Market
        </div>
        <div
          role="presentation"
          onClick={() => dispatch(setConfirmType({ confirmType: 'limit' }))}
          className={`trade__type-btn ${type === 'limit' ? 'active' : ''}`}
        >
          Limit
        </div>
      </div>
      <div className="trade__inputs">
        <PayInput value={coin1} setValue={setCoin1} label="Pay" />
        <div className="spaceDelimeter" />
        <ReceiveInput value={coin2} setValue={setCoin2} label="Receive" />
      </div>
      <h6 className="xsm">Fees</h6>
      {type === 'market' && (
        <AnimatePresence mode="wait">
          {isConfirmOpen ? (
            <ConfirmSwap
              closeFunc={() => setIsConfirmOpen(false)}
              pay={coin1}
              short={coin2}
              type={type}
            />
          ) : (
            ''
          )}
        </AnimatePresence>
      )}
      {type === 'limit' && isOrderDisclaimerShown && (
        <AnimatePresence mode="wait">
          {isConfirmLimitOpen ? (
            <ConfirmSwap
              closeFunc={() => setIsConfirmLimitOpen(false)}
              pay={coin1}
              short={coin2}
              type={type}
            />
          ) : (
            ''
          )}
        </AnimatePresence>
      )}
      {type === 'limit' && !isOrderDisclaimerShown && (
        <AnimatePresence mode="wait">
          {isDisclaimerOpen ? (
            <EnableOrders closeFunc={() => setIsDisclaimerOpen(false)} />
          ) : (
            ''
          )}
        </AnimatePresence>
      )}

      <GenericBtn
        btnTextMain="Confirm"
        classNamesMain={`button primary sm ${isDisabled ? 'disabledBtn' : ''}`}
        classNamesConnect="button primary sm"
        onClickFunc={handleConfirmOpen}
        disabled={isDisabled}
      />
    </div>
  );
}
