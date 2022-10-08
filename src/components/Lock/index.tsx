/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

type LockProps = {
  activated: boolean;
  setActivated(value: boolean): void;
};

const Lock: React.FC<LockProps> = ({ activated, setActivated }) => {
  return (
    <div className={`lock ${activated ? 'active' : ''}`} id="lock">
      <div
        className={`lock__inner ${activated ? 'active' : ''}`}
        id="lockInner"
      >
        <h4>Lock to get MRX</h4>
        <h5>How much do you want to lock?</h5>
        <div className="lockItem">
          <div className="lockItem__row">
            <p className="sm">
              <span>
                <img src="/images/icons/lqdr.svg" alt="" />
              </span>
              LQDR
            </p>
            <p className="sm">0.0</p>
          </div>
          <div className="lockItem__info">
            <p className="sm">Balance</p>
            <p className="sm">0.0</p>
          </div>
        </div>
        <h5>Lock until</h5>
        <div className="lockItem sm">
          <div className="lockItem__row">
            <input type="text" id="datepicker" placeholder="28/12/2022" />
          </div>
        </div>
        <div className="lock__inner-row">
          <a href="#">2 weeks</a>
          <a href="#">1 month</a>
          <a href="#">3 month</a>
          <a href="#">6 month</a>
          <a href="#">1 year</a>
        </div>
        <div className="lock__inner-info">
          <p className="sm">Total voting escrow</p>
          <p className="sm">0.0 MRX</p>
        </div>
        <a href="#" className="button" style={{ marginBottom: '10px' }}>
          Preview
        </a>
        <a href="#" className="button uniq" onClick={() => setActivated(false)}>
          Close
        </a>
      </div>
    </div>
  );
};

export default Lock;
