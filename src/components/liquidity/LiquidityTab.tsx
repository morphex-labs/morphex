import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LiquidityTab() {
  const [state, setState] = useState('mint');

  return (
    <div className="liquidityTab">
      <div className="liquidityTab__header">
        <button
          type="button"
          onClick={() => setState('mint')}
          className={`button sm ${state === 'mint' ? 'active' : ''}`}
        >
          Mint MLP
        </button>
        <button
          type="button"
          onClick={() => setState('redeem')}
          className={`button sm ${state === 'redeem' ? 'active' : ''}`}
        >
          Redeem MLP
        </button>
      </div>
      {state === 'mint' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0, y: 10 }}
          className="liquidityTab__body"
        >
          <div className="input__outer">
            <label htmlFor="none">
              <span>Pay: $0.00</span> <span>Balance: 0.00</span>
            </label>
            <div className="input">
              <input type="number" placeholder="0.0" />
              <div className="input__btns">
                <button type="button" className="input__max">
                  MAX
                </button>
                <div className="input__coin">ETH</div>
              </div>
            </div>
          </div>
          <div className="input__outer">
            <label htmlFor="receive-idx">
              <span id="receive-idx">Receive: $0.00</span>{' '}
              <span>Balance: 0.00</span>
            </label>
            <div className="input">
              <input type="number" placeholder="0.0" />
              <div className="input__btns">
                <button type="button" className="input__max">
                  MAX
                </button>
                <div className="input__coin">MLP</div>
              </div>
            </div>
          </div>
          <p className="xsm">Fees: 0.00</p>
        </motion.div>
      )}
      {state === 'redeem' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0, y: 10 }}
          className="liquidityTab__body"
        >
          <div className="input__outer">
            <label htmlFor="pay-id">
              <span id="pay-id">Pay: $0.00</span> <span>Balance: 0.00</span>
            </label>
            <div className="input">
              <input type="number" placeholder="0.0" />
              <div className="input__btns">
                <button type="button" className="input__max">
                  MAX
                </button>
                <div className="input__coin">ETH</div>
              </div>
            </div>
          </div>
          <div className="input__outer">
            <label htmlFor="receive-id">
              <span id="receive-id">Receive: $0.00</span>{' '}
              <span>Balance: 0.00</span>
            </label>
            <div className="input">
              <input type="number" placeholder="0.0" />
              <div className="input__btns">
                <button type="button" className="input__max">
                  MAX
                </button>
                <div className="input__coin">MLP</div>
              </div>
            </div>
          </div>
          <p className="xsm">Fees: 0.00</p>
        </motion.div>
      )}
      <div className="liquidityTab__footer">
        <button type="button" className="button primary sm">
          Connect wallet
        </button>
      </div>
    </div>
  );
}
