/* eslint-disable jsx-a11y/label-has-associated-control */
import toast from 'react-hot-toast';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from './Modal';
import { arrowBottom } from '../SVG';
import { mock } from '../../utils/mockRequest';
import GenericBtn from '../../components/buttons/GenericBtn';
import { selectAllCurrencies } from '../../redux/currency-selector/selectors';

export interface ConfirmProps {
  closeFunc: () => void;
  leverage: string;
  price: string;
  pay: string;
  short: string;
  type: string;
}

export default function ConfirmShort({
  closeFunc,
  leverage,
  price,
  short,
  pay,
  type,
}: ConfirmProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [allowSlippage, setAllowSlippage] = useState<boolean>(false);

  const {
    shortCurrency: { symbol: shortSymbol, name: shortName },
    payCurrency: { symbol: paySymbol, name: payName },
  } = useSelector(selectAllCurrencies);

  const handleConfirm = () => {
    // Test function to show all values
    closeFunc();
    setLoading(true);
    toast.promise(mock(true, 2000), {
      success: () => {
        setLoading(false);
        return `Transactions confirmed with values:
        Type: ${type}
        Leverage: ${leverage}
        Pay: ${payName} - ${paySymbol} amount $${pay}
        Long: ${shortName} - ${shortSymbol} amount $${short}
        Price: ${price}

      `;
      },
      error: () => {
        setLoading(false);
        return 'Transaction failed!';
      },
      loading: 'Confirming your transaction... please wait.',
    });
  };

  return (
    <Modal title="Confirm Short" closeFunc={closeFunc}>
      <div className="modalTable">
        <div className="modalTable__row">
          <h6 className="xsm">Pay</h6>
          <p className="xsm">
            0.00 ETH <span>($12.21)</span>
          </p>
        </div>
        <div className="modalTable__arrow">{arrowBottom}</div>
        <div className="modalTable__row">
          <h6 className="xsm">Short</h6>
          <p className="xsm">
            0.00 ETH <span>($12.21)</span>
          </p>
        </div>
      </div>
      <div className="modal__items">
        <div className="modalItem">
          <h6 className="xsm">Leverage </h6>
          <p className="xsm">{leverage}.00x</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Liquidation Price </h6>
          <p className="xsm">$0.00</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Fees</h6>
          <p className="xsm">$0.00</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Collateral</h6>
          <p className="xsm">$0.00</p>
        </div>
      </div>
      <div className="modal__items">
        <div className="modalItem">
          <h6 className="xsm">Spread </h6>
          <p className="xsm">0.00%</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Entry Price </h6>
          <p className="xsm">0.00x</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Borrow Fee</h6>
          <p className="xsm">$0.00</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Execution Fee</h6>
          <p className="xsm">$0.00</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Allowed Slippage</h6>
          <p className="xsm">0.00%</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Allow up to 1% slippage</h6>
          <div className="modalCheck single">
            <input
              type="checkbox"
              checked={allowSlippage}
              onChange={() => setAllowSlippage(true)}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label htmlFor="" />
          </div>
        </div>
      </div>
      <div className="modal__btn">
        <GenericBtn
          btnTextMain="Confirm"
          classNamesMain={`button primary sm ${loading ? 'disabledBtn' : ''}`}
          classNamesConnect="button primary sm"
          onClickFunc={handleConfirm}
          disabled={loading}
        />
      </div>
    </Modal>
  );
}
