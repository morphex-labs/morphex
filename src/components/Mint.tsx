import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import LqdrEntry from '../base/modals/LqdrEntry';

export default function Mint() {
  const [lqdrEntry, setLqdrEntry] = useState(false);

  return (
    <>
      <div className="mint">
        <div className="mint__header">
          <h6>
            Most efficient <br /> mLQDR entry
          </h6>
          <div className="mint__header-btns">
            <button type="button" className="button primary sm">
              1 LQDR : 0 mLQDR
            </button>
            <button type="button" className="button secondary sm">
              Guide
            </button>
          </div>
        </div>
        <div className="mint__body">
          <div
            role="presentation"
            className="mint__body-entry"
            onClick={() => setLqdrEntry(true)}
          >
            Easy mLQDR - LQDR Entry
          </div>
          <h6>Mint mLQDR</h6>
          <div className="mintItem">
            <h6 className="xsm">Balance</h6>
            <div className="mintItem__info">
              <p className="xsm">
                <img src="/images/icons/lqdrLarge.png" alt="lqdr" />
                LQDR
              </p>
              <p className="xsm">0</p>
            </div>
          </div>
          <div className="mintItem">
            <h6 className="xsm">Balance</h6>
            <div className="mintItem__info">
              <p className="xsm">
                <img src="/images/icons/mlqdr.png" alt="mlqdr" />
                mLQDR
              </p>
              <p className="xsm">0</p>
            </div>
          </div>
        </div>
        <div className="mint__footer">
          <div className="input uniq">
            <input type="text" placeholder="0.0" />
            <div className="input__btns">
              <div className="primary button sm">
                <span>50%</span> <span>MAX</span>
              </div>
            </div>
          </div>
          <button type="button" className="button primary sm">
            Approve
          </button>
        </div>
      </div>
      <AnimatePresence exitBeforeEnter>
        {lqdrEntry ? <LqdrEntry closeFunc={() => setLqdrEntry(false)} /> : ''}
      </AnimatePresence>
    </>
  );
}
