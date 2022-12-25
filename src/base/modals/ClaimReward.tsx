/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Modal from './Modal';

export default function ClaimReward({ closeFunc }: { closeFunc: () => void }) {
  return (
    <Modal title="Claim Rewards" closeFunc={closeFunc}>
      <div className="modal__checks">
        <div className="modalCheck">
          <input type="checkbox" />
          <label htmlFor="none">Claim MPX Rewards</label>
        </div>
        <div className="modalCheck">
          <input type="checkbox" />
          <label htmlFor="none">Claim esMPX Rewards</label>
        </div>
        <div className="modalCheck">
          <input type="checkbox" />
          <label htmlFor="none">Claim FTM Rewards</label>
        </div>
      </div>
      <div className="modal__btn">
        <button type="button" className="button primary sm">
          Claim
        </button>
      </div>
    </Modal>
  );
}
