import Modal from './Modal';
import { arrowBottom } from '../SVG';

export default function ConfirmSwap({ closeFunc }: { closeFunc: () => void }) {
  return (
    <Modal title="Confirm Swap" closeFunc={closeFunc}>
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
        <button type="button" className="button primary sm">
          Confirm Swap
        </button>
      </div>
    </Modal>
  );
}
