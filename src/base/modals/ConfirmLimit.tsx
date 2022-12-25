import React from 'react';
import Modal from './Modal';
import { arrowBottom } from '../SVG';

export default function ConfirmLimit({ closeFunc }: { closeFunc: () => void }) {
  return (
    <Modal title="Confirm Limit Order" closeFunc={closeFunc}>
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
          <h6 className="xsm">Available Liquidity </h6>
          <p className="xsm">0.00 USDC</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Collateral In</h6>
          <p className="xsm">USDC</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Leverage</h6>
          <p className="xsm">0.00x</p>
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
        <button type="button" className="button primary sm">
          Create Order
        </button>
      </div>
    </Modal>
  );
}
