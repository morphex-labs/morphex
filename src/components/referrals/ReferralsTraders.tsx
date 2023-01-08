import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import WritePaperIcon from '../../../public/images/icons/write-paper.png';

const ReferralsTraders: React.FC = () => {
  const [noRebatesHistory, setNoRebatesHistory] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, y: 10 }}
      className="referralsTab__body-inner"
    >
      <div className="referralsTab__body-inner__header">
        <div className="referralsTab__body-inner__header-item">
          <h6 className="xsm">Total Trading Volume</h6>
          <p className="xsm">$0.00</p>
        </div>
        <div className="referralsTab__body-inner__header-item">
          <h6 className="xsm">Total Rebates</h6>
          <p className="xsm">$0.00</p>
        </div>
      </div>
      <div className="referralsTab__body-inner__info">
        <h6 className="xsm">Active referral code</h6>
        <div className="referralsTab__body-inner__info-group">
          <h6 className="xsm">U34ALW9</h6>
          <p className="xsm">(5% Discound Tier 1)</p>
          <Image
            src={WritePaperIcon}
            alt="Write paper icon"
            width={12}
            height={12}
          />
        </div>
      </div>
      <div className="referralsTab__body-inner__content">
        {noRebatesHistory ? (
          <div className="referralsTab__body-inner__content-empty">
            <h6 className="xsm">No rebates distribution history yet</h6>
          </div>
        ) : (
          <div className="referralsTab__body-inner__content-table">
            <div className="referralsTab__body-inner__content-table__item">
              <p className="xsm">30 November 2022, 12:21PM</p>
              <h6 className="xsm">Decreased ETH Long | -24.42 USD</h6>
            </div>
            <div className="referralsTab__body-inner__content-table__item">
              <p className="xsm">30 November 2022, 12:21PM</p>
              <h6 className="xsm">Decreased ETH Long | -24.42 USD</h6>
            </div>
            <div className="referralsTab__body-inner__content-table__item">
              <p className="xsm">30 November 2022, 12:21PM</p>
              <h6 className="xsm">Decreased ETH Long | -24.42 USD</h6>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ReferralsTraders;
