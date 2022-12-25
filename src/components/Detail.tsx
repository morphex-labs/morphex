import React from 'react';
import { motion } from 'framer-motion';

export default function Detail() {
  return (
    <div className="detail">
      <div className="auto__container">
        <div className="detail__inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 * 1 }}
            exit={{ opacity: 0, y: 20 }}
            className="detailItem"
          >
            <div className="detailItem__inner">
              <h4>MPX</h4>
              <p>
                MRX is the utility and governance token. Accrues 30% of the
                platform&apos;s generated fees.
              </p>
              <div className="detailItem__row">
                <button type="button" className="button primary">
                  Buy on Fantom
                </button>
                <button type="button" className="button secondary">
                  Read more
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 * 2 }}
            exit={{ opacity: 0, y: 20 }}
            className="detailItem"
          >
            <div className="detailItem__inner">
              <h4>MLP</h4>
              <p>
                MLP is the utility and governance token. Accrues 30% of the
                platform&apos;s generated fees.
              </p>
              <div className="detailItem__row">
                <button type="button" className="button primary">
                  Buy on Fantom
                </button>
                <button type="button" className="button secondary">
                  Read more
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
