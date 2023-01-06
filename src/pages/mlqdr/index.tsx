import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const Swap = dynamic(() => import('../../components/Swap'));
const Mint = dynamic(() => import('../../components/Mint'));
const Staking = dynamic(() => import('../../components/Staking'));

export default function LQDR() {
  return (
    <>
      <div className="lqdr">
        <div className="auto__container">
          <div className="lqdr__inner">
            <div className="lqdr__inner-row">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                exit={{ opacity: 0, x: -20 }}
                className="lqdr__inner-box"
              >
                <Mint />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                exit={{ opacity: 0, x: 20 }}
                className="lqdr__inner-box"
              >
                <Swap />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Staking />
    </>
  );
}
