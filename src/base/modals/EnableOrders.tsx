import React from 'react';
import Modal from './Modal';

export default function EnableOrders({ closeFunc }: { closeFunc: () => void }) {
  return (
    <Modal title="Enable orders" closeFunc={closeFunc}>
      <div className="modalNote">
        <div className="modalNote__title">
          Note that orders are not guaranteed to be executed.
        </div>
        <p className="xsm">
          This can occur in a few situations including but not exclusive to:
        </p>
        <ul>
          <li>Insufficient liquidity to execute the order</li>
          <li>
            The mark price which is an aggregate of exchange prices did not
            reach the specified price{' '}
          </li>

          <li>
            The specified price was reached but not long enough for it to be
            executed
          </li>

          <li>No keeper picked up the order for execution </li>
        </ul>
        <p className="xsm">
          Additionally, trigger orders are market orders and are not guaranteed
          to settle at the trigger price.
        </p>
        <div className="modalCheck">
          <input type="checkbox" />
          <label htmlFor="none">
            Accept that orders are not guaranteed to execute and trigger orders
            may not settle 0 at the trigger price{' '}
          </label>
        </div>
      </div>

      <div className="modal__btn">
        <button type="button" className="button primary sm">
          Accept terms to enable orders
        </button>
      </div>
    </Modal>
  );
}
