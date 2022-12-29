import { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

import Modal from './Modal';
import { arrowBottom } from '../SVG';
import { selectAllCurrencies } from '../../redux/currency-selector/selectors';
import { mock } from '../../utils/mockRequest';
import GenericBtn from '../../components/buttons/GenericBtn';

interface ConfirmProps {
  closeFunc: () => void;
  pay: string;
  short: string;
  type: string;
}

export default function ConfirmSwap({
  closeFunc,
  short,
  pay,
  type,
}: ConfirmProps) {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    shortCurrency: { symbol: shortSymbol, name: shortName },
    payCurrency: { symbol: paySymbol, name: payName },
  } = useSelector(selectAllCurrencies);

  const handleConfirmOpen = () => {
    // Test function to show all values
    closeFunc();
    setLoading(true);
    toast.promise(mock(true, 2000), {
      success: () => {
        setLoading(false);
        return `Transactions confirmed with values:
        Type: ${type}
        Pay: ${payName} - ${paySymbol} amount $${pay}
        Long: ${shortName} - ${shortSymbol} amount $${short}
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
    <Modal
      title={type === 'market' ? 'Confirm Swap' : 'Confirm Limit Order - Swap'}
      closeFunc={closeFunc}
    >
      <div className="modalTable">
        <div className="modalTable__row">
          <h6 className="xsm">Pay</h6>
          <p className="xsm">
            0.00 ETH <span>($12.21)</span>
          </p>
        </div>
        <div className="modalTable__arrow">{arrowBottom}</div>
        <div className="modalTable__row">
          <h6 className="xsm">Receive</h6>
          <p className="xsm">
            0.00 ETH <span>($12.21)</span>
          </p>
        </div>
      </div>
      <div className="modal__items">
        <div className="modalItem">
          <h6 className="xsm">Min. Receive </h6>
          <p className="xsm">ETH</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Spread </h6>
          <p className="xsm">$0.00</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Fees</h6>
          <p className="xsm">$0.00</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">ETH Price</h6>
          <p className="xsm">0.00 USD</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">USDT Price</h6>
          <p className="xsm">0.00 USD</p>
        </div>
      </div>
      <div className="modal__btn">
        <GenericBtn
          btnTextMain="Confirm Swap"
          classNamesMain={`button primary sm ${loading ? 'disabledBtn' : ''}`}
          classNamesConnect="button primary sm"
          onClickFunc={handleConfirmOpen}
          disabled={loading}
        />
      </div>
    </Modal>
  );
}
