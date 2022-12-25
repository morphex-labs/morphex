/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Modal from './Modal';

export default function StakeMlp({ closeFunc }: { closeFunc: () => void }) {
  return (
    <Modal title="Stake MLP" closeFunc={closeFunc}>
      <div className="input__outer">
        <label htmlFor="stake-id">
          <span id="stake-id">Stake</span> <span>Max: 0.00</span>
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
