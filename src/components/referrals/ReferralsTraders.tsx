import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import WritePaperIcon from '../../../public/images/icons/write-paper.png';
import AddReferralCode from '../../base/modals/AddReferralCode';

const ReferralsTraders: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [noRebatesHistory, setNoRebatesHistory] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

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
            width={15}
            height={15}
            onClick={handleOpenModal}
            style={{ cursor: 'pointer' }}
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
            <div className="referralsTab__body-inner__content-table__header">
              <h6 className="xsm">History</h6>
            </div>
            <div className="referralsTab__body-inner__content-table__item">
              <p className="xsm">
                00 January 2023 | Amount of rebate distributed:
              </p>
              <h6 className="xsm">0</h6>
            </div>
            <div className="referralsTab__body-inner__content-table__item">
              <p className="xsm">
                00 January 2023 | Amount of rebate distributed:
              </p>
              <h6 className="xsm">0</h6>
            </div>
            <div className="referralsTab__body-inner__content-table__item">
              <p className="xsm">
                00 January 2023 | Amount of rebate distributed:
              </p>
              <h6 className="xsm">0</h6>
            </div>
          </div>
        )}
      </div>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <AddReferralCode
            closeFunc={() => setIsOpen(false)}
            actionName="Edit"
          />
        ) : (
          ''
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ReferralsTraders;
