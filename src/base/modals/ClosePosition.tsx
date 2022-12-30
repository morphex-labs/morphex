/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Modal from './Modal';

export default function ClosePosition({
  closeFunc,
}: {
  closeFunc: () => void;
}) {
  const [tab, setTab] = useState('market');
  return (
    <Modal title="Close Long ETH" closeFunc={closeFunc}>
      <div className="modalTab">
        <div className="modalTab__header">
          <button
            type="button"
            onClick={() => setTab('market')}
            className={`button sm ${tab === 'market' ? 'active' : ''}`}
          >
            Market
          </button>
          <button
            type="button"
            onClick={() => setTab('trigger')}
            className={`button sm ${tab === 'trigger' ? 'active' : ''}`}
          >
            Trigger
          </button>
        </div>
      </div>
      {tab === 'market' && (
        <div className="modalTab__body">
          <div className="input__outer">
            <label htmlFor="close-max-id">
              <span id="close-max-id">Close</span> <span>Max: 23.43</span>
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
              <h6 className="xsm">Keep leverage at 2.00x</h6>
              <div className="modalCheck single">
                <input type="checkbox" />
                <label htmlFor="none" />
              </div>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Allow up to 1% slippage</h6>
              <div className="modalCheck single">
                <input type="checkbox" />
                <label htmlFor="none" />
              </div>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Allowed Slippage</h6>
              <p className="xsm">0.00%</p>
            </div>
          </div>
          <div className="modal__items">
            <div className="modalItem">
              <h6 className="xsm">Mark Price</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Entry Price</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Liquidation Price</h6>
              <p className="xsm">$0.00</p>
            </div>
          </div>
          <div className="modal__items">
            <div className="modalItem">
              <h6 className="xsm">Size</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Collateral (ETH)</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">PnL</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Fees</h6>
              <p className="xsm">$0.00</p>
            </div>
          </div>
          <div className="modalTable">
            <div className="modalTable__row">
              <h6 className="xsm">Receive (ETH)</h6>
              <p className="xsm">
                0.00 ETH <span>($0.00)</span>
              </p>
            </div>
          </div>
          <div className="modal__btn">
            <button type="button" className="button primary sm">
              Confirm
            </button>
          </div>
        </div>
      )}
      {tab === 'trigger' && (
        <div className="modalTab__body">
          <div className="input__outer">
            <label htmlFor="none">
              <span>Close</span> <span>Max: 23.43</span>
            </label>
            <div className="input">
              <input type="number" placeholder="0.00" />
              <div className="input__btns">
                <div className="input__max">MAX</div>
                <div className="input__coin">ETH</div>
              </div>
            </div>
          </div>
          <div className="input__outer">
            <label htmlFor="none">
              <span>Price</span> <span>Max: 23.43</span>
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
              <h6 className="xsm">Keep leverage at 2.00x</h6>
              <div className="modalCheck single">
                <input type="checkbox" />
                <label htmlFor="none" />
              </div>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Trigger Price</h6>
              <p className="xsm">-</p>
            </div>
          </div>
          <div className="modal__items">
            <div className="modalItem">
              <h6 className="xsm">Mark Price</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Entry Price</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Liquidation Price</h6>
              <p className="xsm">$0.00</p>
            </div>
          </div>
          <div className="modal__items">
            <div className="modalItem">
              <h6 className="xsm">Size</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Collateral (ETH)</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">PnL</h6>
              <p className="xsm">$0.00</p>
            </div>
            <div className="modalItem">
              <h6 className="xsm">Fees</h6>
              <p className="xsm">$0.00</p>
            </div>
          </div>
          <div className="modalTable">
            <div className="modalTable__row">
              <h6 className="xsm">Receive</h6>
              <p className="xsm">
                0.00 ETH <span>($0.00)</span>
              </p>
            </div>
          </div>
          <div className="modal__btn">
            <button type="button" className="button primary sm">
              Confirm
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
