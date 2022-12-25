/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from 'react';
import Modal from './Modal';

export default function ManageLiquid({
  setAddLiquid,
  setRemoveLiquid,
  closeFunc,
}: {
  setAddLiquid: (prop: boolean) => void;
  setRemoveLiquid: (prop: boolean) => void;
  closeFunc: () => void;
}) {
  return (
    <Modal title="General Pool Information" closeFunc={closeFunc}>
      <div className="modalTable">
        <div className="modalTable__header">
          <h6 className="xsm">Token</h6>
          <h6 className="xsm">Total Balance</h6>
          <h6 className="xsm">Value</h6>
        </div>
        <div className="modalTable__row">
          <h6 className="xsm">LQDR</h6>
          <h6 className="xsm">2121.33</h6>
          <h6 className="xsm">$2121.33</h6>
        </div>
        <div className="modalTable__row">
          <h6 className="xsm">mLQDR</h6>
          <h6 className="xsm">3221.31</h6>
          <h6 className="xsm">$3221.31</h6>
        </div>
      </div>
      <div className="modal__items">
        <div className="modalItem ">
          <h6 className="xsm">Dynamic swap fees</h6>
          <p className="xsm">0.1%</p>
        </div>
        <div className="modalItem ">
          <h6 className="xsm">Your share</h6>
          <p className="xsm">0%</p>
        </div>
      </div>
      <div className="modalTable">
        <div className="modalTable__row">
          <h6 className="xsm">Your LP Position</h6>
          <h6 className="xsm">$0.00</h6>
        </div>
      </div>
      <div className="modal__btns">
        <button
          type="button"
          className="button secondary sm"
          onClick={() => setAddLiquid(true)}
        >
          Add Liquidity
        </button>
        <button
          type="button"
          className="button primary sm"
          onClick={() => setRemoveLiquid(true)}
        >
          Remove Liquidity
        </button>
      </div>
    </Modal>
  );
}
