import React, { useState } from 'react';
import Modal from './Modal';
import RangeSlider from '../RangeSlider';

export default function RemoveLiquid({ closeFunc }: { closeFunc: () => void }) {
  const [leverageValue, setLeverageValue] = useState('0');

  return (
    <Modal title="Remove Liquidity" closeFunc={closeFunc}>
      <div className="modalAmount">
        <h6 className="xsm">Amount</h6>
        <h6>{Number(leverageValue)}%</h6>
        <RangeSlider
          min="0"
          max="100"
          type2="type2"
          value="0"
          onChange={(e) => {
            setLeverageValue(e.target.value);
          }}
        />
      </div>
      <div className="modal__items">
        <div className="modalItem uniq">
          <div className="modalItem__coin">
            <img src="/images/icons/lqdr.png" alt="lqdr" />
            LQDR
          </div>
          <p className="xsm">0.00</p>
        </div>
        <div className="modalItem uniq">
          <div className="modalItem__coin">
            <img src="/images/icons/mlqdr.png" alt="mlqdr" />
            MLQDR
          </div>
          <p className="xsm">0.00</p>
        </div>
      </div>
      <div className="modal__btn">
        <button type="button" className="button primary sm">
          Submit
        </button>
      </div>
    </Modal>
  );
}
