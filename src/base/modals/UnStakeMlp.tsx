import React from 'react';
import Modal from './Modal';

export default function UnStakeMlp({ closeFunc }: { closeFunc: () => void }) {
  return (
    <Modal title="Unstake MLP" closeFunc={closeFunc}>
      <div className="input__outer">
        <label htmlFor="unstake-id">
          <span id="unstake-id">Unstake</span> <span>Max: 0.00</span>
        </label>
        <div className="input">
          <input type="number" placeholder="0.00" />
          <div className="input__btns">
            <div className="input__coin">MLP</div>
          </div>
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
