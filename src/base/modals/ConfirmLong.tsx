/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Modal from './Modal';
import { arrowBottom } from '../SVG';

export default function ConfirmLong({ closeFunc }: { closeFunc: () => void }) {
  return (
    <Modal title="Confirm Long" closeFunc={closeFunc}>
      <div className="modalTable">
        <div className="modalTable__row">
          <h6 className="xsm">Pay</h6>
          <p className="xsm">
            0.00 ETH <span>($12.21)</span>
          </p>
        </div>
        <div className="modalTable__arrow">{arrowBottom}</div>
        <div className="modalTable__row">
          <h6 className="xsm">Long</h6>
          <p className="xsm">
            0.00 ETH <span>($12.21)</span>
          </p>
        </div>
      </div>
      <div className="modal__items">
        <div className="modalItem">
          <h6 className="xsm">Leverage </h6>
          <p className="xsm">0.00x</p>
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
          <p className="xsm">$0.00</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Allow up to 1% slippage</h6>
          <div className="modalCheck single">
            <input type="checkbox" />
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label htmlFor="" />
          </div>
        </div>
      </div>
      <div className="modal__btn">
        <button type="button" className="button primary sm">
          Long
        </button>
      </div>
    </Modal>
  );
}
