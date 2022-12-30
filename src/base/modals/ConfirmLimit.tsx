/* eslint-disable @typescript-eslint/restrict-template-expressions */
import toast from 'react-hot-toast';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from './Modal';
import { arrowBottom } from '../SVG';
import { selectAllCurrencies } from '../../redux/currency-selector/selectors';
import { mock } from '../../utils/mockRequest';
import GenericBtn from '../../components/buttons/GenericBtn';

interface ConfirmLimitProps {
  closeFunc: () => void;
  leverage?: string;
  price?: string;
  pay: string;
  label: string;
  type: string;
  actionName: string;
}

export default function ConfirmLimit({
  closeFunc,
  leverage,
  label,
  pay,
  price,
  type,
  actionName,
}: ConfirmLimitProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    longCurrency: { symbol: longSymbol, name: longName },
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
        Type: ${type} ${actionName}
        Leverage: ${leverage}
        Pay: ${payName} - ${paySymbol} amount $${pay}
        Long: ${longName} - ${longSymbol} amount $${label}
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
    <Modal title={`Confirm Limit Order - ${actionName}`} closeFunc={closeFunc}>
      <div className="modalTable">
        <div className="modalTable__row">
          <h6 className="xsm">Pay</h6>
          <p className="xsm">
            0.00 ETH <span>($12.21)</span>
          </p>
        </div>
        <div className="modalTable__arrow">{arrowBottom}</div>
        <div className="modalTable__row">
          <h6 className="xsm">{actionName}</h6>
          <p className="xsm">
            0.00 ETH <span>($12.21)</span>
          </p>
        </div>
      </div>
      <div className="modal__items">
        <div className="modalItem">
          <h6 className="xsm">Available Liquidity </h6>
          <p className="xsm">0.00 USDC</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Collateral In</h6>
          <p className="xsm">USDC</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Leverage</h6>
          <p className="xsm">{leverage || '0'}.00x</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Liquidation Price</h6>
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
          <h6 className="xsm">Limit Price </h6>
          <p className="xsm">$0.00</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Borrow Fee </h6>
          <p className="xsm">0.00% / 1H</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Allowed Slippage</h6>
          <p className="xsm">0.00%</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Execution Fee</h6>
          <p className="xsm">$0.00</p>
        </div>
      </div>
      <div className="modal__btn">
        <GenericBtn
          btnTextMain="Create Order"
          classNamesMain={`button primary sm ${loading ? 'disabledBtn' : ''}`}
          classNamesConnect="button primary sm"
          onClickFunc={handleConfirm}
          disabled={loading}
        />
      </div>
    </Modal>
  );
}
