import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import Modal from './Modal';
import GenericBtn from '../../components/buttons/GenericBtn';
import { saveIsDisclaimerAccepted } from '../../redux/orders-disclaimer/slice';

export default function EnableOrders({ closeFunc }: { closeFunc: () => void }) {
  const dispatch = useDispatch();
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAcceptDisclaimer = () => {
    if (isAccepted) {
      dispatch(
        saveIsDisclaimerAccepted({ isOrderDisclaimerShown: isAccepted })
      );
      closeFunc();
      toast.success('Disclaimer has been accepted');
    }
  };

  return (
    <Modal title="Enable orders" closeFunc={closeFunc}>
      <div className="modalNote">
        <div className="modalNote__title">
          Note that orders are not guaranteed to be executed.
        </div>
        <p className="xsm">
          This can occur in a few situations including but not exclusive to:
        </p>
        <ul>
          <li>Insufficient liquidity to execute the order</li>
          <li>
            The mark price which is an aggregate of exchange prices did not
            reach the specified price{' '}
          </li>

          <li>
            The specified price was reached but not long enough for it to be
            executed
          </li>

          <li>No keeper picked up the order for execution </li>
        </ul>
        <p className="xsm">
          Additionally, trigger orders are market orders and are not guaranteed
          to settle at the trigger price.
        </p>
        <div className="modalCheck">
          <input
            type="checkbox"
            checked={isAccepted}
            onChange={() => setIsAccepted(!isAccepted)}
          />
          <label htmlFor="none">
            Accept that orders are not guaranteed to execute and trigger orders
            may not settle 0 at the trigger price{' '}
          </label>
        </div>
      </div>

      <div className="modal__btn">
        <GenericBtn
          btnTextMain="Accept terms to enable orders"
          classNamesMain={`button primary sm ${
            !isAccepted ? 'disabledBtn' : ''
          }`}
          classNamesConnect="button primary sm"
          onClickFunc={handleAcceptDisclaimer}
          disabled={!isAccepted}
        />
      </div>
    </Modal>
  );
}
