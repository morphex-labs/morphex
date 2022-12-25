import React, { useState } from 'react';
import Modal from './Modal';

export default function EditPosition({ closeFunc }: { closeFunc: () => void }) {
  const [tab, setTab] = useState('deposit');
  return (
    <Modal title="Edit Long ETH" closeFunc={closeFunc}>
      <div className="modalTab">
        <div className="modalTab__header">
          <button
            type="button"
            onClick={() => setTab('deposit')}
            className={`button sm ${tab === 'deposit' ? 'active' : ''}`}
          >
            Deposit
          </button>
          <button
            type="button"
            onClick={() => setTab('withdraw')}
            className={`button sm ${tab === 'withdraw' ? 'active' : ''}`}
          >
            Withdraw
          </button>
        </div>
      </div>
      {tab === 'deposit' && (
        <div className="modalTab__body">
          <div className="input__outer">
            <label htmlFor="deposit-id5">
              <span id="deposit-id5">Deposit</span> <span>Max: 23.43</span>
            </label>
            <div className="input">
              <input type="number" placeholder="0.00" />
              <div className="input__btns">
                <div className="input__max">MAX</div>
                <div className="input__coin">ETH</div>
              </div>
            </div>
          </div>
          <div className="modal__items">
            <div className="modalItem">
              <h6 className="xsm">Size</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Collateral </h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Leverage</h6>
              <p className="xsm">2.00x</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Mark Price</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Liquidation Price</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Execution Fee</h6>
              <p className="xsm">0.00 ETH</p>
            </div>
          </div>
          <div className="modal__btn">
            <button type="button" className="button primary sm">
              Confirm Swap
            </button>
          </div>
        </div>
      )}
      {tab === 'withdraw' && (
        <div className="modalTab__body">
          <div className="input__outer">
            <label htmlFor="withdraw-id">
              <span id="withdraw-id">Withdraw</span> <span>Max: 23.43</span>
            </label>
            <div className="input">
              <input type="number" placeholder="0.00" />
              <div className="input__btns">
                <div className="input__max">MAX</div>
                <div className="input__coin">ETH</div>
              </div>
            </div>
          </div>
          <div className="modal__items">
            <div className="modalItem">
              <h6 className="xsm">Size</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Collateral </h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Leverage</h6>
              <p className="xsm">2.00x</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Mark Price</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Liquidation Price</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Execution Fee</h6>
              <p className="xsm">0.00 ETH</p>
            </div>
          </div>
          <div className="modal__btn">
            <button type="button" className="button primary sm">
              Confirm Swap
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
