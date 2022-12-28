/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { shortenAddress } from '../utils/shortenAddress';
import useCopyToClipboard from '../hooks/useCopyToClipboard';

const address = '0x4E15361FD6b4BB609Fa63C81A2be19d873717870';

export default function Staking() {
  const shortAddress = useMemo(() => shortenAddress(address), []);

  const [copiedText, copy] = useCopyToClipboard();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0, y: 20 }}
      className="staking"
    >
      <div className="auto__container">
        <div className="staking__inner">
          <div className="staking__inner-col">
            <div className="staking__inner-header">
              <h6>wFTM & MORPH Rewards</h6>
              <h6 className="xsm">Stake mLQRD - LQDR LP</h6>
            </div>
            <div className="stakingItem">
              <div className="stakingItem__row">
                <h6 className="xsm">wFTM APR</h6>
                <p className="xsm">23.21%</p>
              </div>
              <div className="stakingItem__row">
                <h6 className="xsm">MORPH APR</h6>
                <p className="xsm">23.21%</p>
              </div>
              <div className="stakingItem__row">
                <h6 className="xsm">Combined APR</h6>
                <p className="xsm">23.21%</p>
              </div>
            </div>
          </div>
          <div className="staking__inner-col">
            <div className="staking__inner-title">
              <h6 className="xsm">View Contract</h6>
              <p
                className="xsm"
                style={{ cursor: 'pointer' }}
                onClick={() => copy(address)}
              >
                {shortAddress}
              </p>
            </div>
            <div className="stakingItem">
              <div className="stakingItem__row">
                <h6 className="xsm">Total staked</h6>
                <p className="xsm">$202.211</p>
              </div>
            </div>
            <button type="button" className="button secondary sm">
              Enable
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
