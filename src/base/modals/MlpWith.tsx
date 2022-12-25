import React from 'react';
import Modal from './Modal';

export default function MlpWith({ closeFunc }: { closeFunc: () => void }) {
  return (
    <Modal title="MLP Vault " closeFunc={closeFunc}>
      <div className="input__outer">
        <label htmlFor="deposit-id3">
          <span id="deposit-id3">Deposit </span> <span>Max: 0.00</span>
        </label>
        <div className="input">
          <input type="number" placeholder="0.00" />
          <div className="input__btns">
            <div className="input__coin">MLP</div>
          </div>
        </div>
      </div>
      <div className="modal__items">
        <div className="modalItem">
          <h6 className="xsm">Wallet</h6>
          <p className="xsm">0.00 MLP</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Vault Capacity</h6>
          <p className="xsm">0.00 / 0.00</p>
        </div>
        <div className="modalItem">
          <h6 className="xsm">Reserve Amount</h6>
          <p className="xsm">0.00 / 0.00</p>
        </div>
      </div>
      <div className="modal__btn">
        <button type="button" className="button primary sm">
          Enter an amount
        </button>
      </div>
    </Modal>
  );
}
