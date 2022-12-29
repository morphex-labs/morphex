import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import GenericBtn from '../../buttons/GenericBtn';
import PayInput from '../CurrencyInputs/PayInput';
import ReceiveInput from '../CurrencyInputs/ReceiveInput';
import { selectOrderDisclaimer } from '../../../redux/orders-disclaimer/selectors';
import EnableOrders from '../../../base/modals/EnableOrders';
import ConfirmSwap from '../../../base/modals/ConfirmSwap';

export default function Swap() {
  const [coin1, setCoin1] = useState<string>('');
  const [coin2, setCoin2] = useState<string>('');
  const [type, setType] = useState<string>('market');
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [isConfirmLimitOpen, setIsConfirmLimitOpen] = useState<boolean>(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState<boolean>(false);

  const isOrderDisclaimerShown = useSelector(selectOrderDisclaimer);

  const handleConfirmOpen = () => {
    if (type === 'limit' && !isOrderDisclaimerShown) {
      setIsDisclaimerOpen(!isDisclaimerOpen);
      return;
    }

    type === 'market'
      ? setIsConfirmOpen(!isConfirmOpen)
      : setIsConfirmLimitOpen(!isConfirmLimitOpen);
  };

  return (
    <div className="trade">
      <div className="trade__type">
        <div
          role="presentation"
          onClick={() => setType('market')}
          className={`trade__type-btn ${type === 'market' ? 'active' : ''}`}
        >
          Market
        </div>
        <div
          role="presentation"
          onClick={() => setType('limit')}
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
        <AnimatePresence exitBeforeEnter>
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
        <AnimatePresence exitBeforeEnter>
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
        <AnimatePresence exitBeforeEnter>
          {isDisclaimerOpen ? (
            <EnableOrders closeFunc={() => setIsDisclaimerOpen(false)} />
          ) : (
            ''
          )}
        </AnimatePresence>
      )}

      <GenericBtn
        btnTextMain="Confirm"
        classNamesMain="button primary sm"
        classNamesConnect="button primary sm"
        onClickFunc={handleConfirmOpen}
      />
    </div>
  );
}
