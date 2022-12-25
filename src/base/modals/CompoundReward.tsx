import React from 'react';
import Modal from './Modal';

export default function CompoundReward({
  closeFunc,
}: {
  closeFunc: () => void;
}) {
  return (
    <Modal title="Compound  Rewards" closeFunc={closeFunc}>
      <div className="modal__checks">
        <div className="modalCheck">
          <input type="checkbox" />
          <label htmlFor="none">Stake Multiplier Points</label>
        </div>
        <div className="modalCheck">
          <input type="checkbox" />
          <label htmlFor="none">Claim MRX Rewards</label>
        </div>
        <div className="modalCheck">
          <input type="checkbox" />
          <label htmlFor="none">Stake MRX Rewards</label>
        </div>
        <div className="modalCheck">
          <input type="checkbox" />
          <label htmlFor="none">Claim esMPX Rewards</label>
        </div>
        <div className="modalCheck">
          <input type="checkbox" />
          <label htmlFor="none">Stake esMPX Rewards</label>
        </div>
        <div className="modalCheck">
          <input type="checkbox" />
          <label htmlFor="none">Claim FTM Rewards</label>
        </div>
      </div>
      <div className="modal__btn">
        <button type="button" className="button primary sm">
          Compound
        </button>
      </div>
    </Modal>
  );
}
