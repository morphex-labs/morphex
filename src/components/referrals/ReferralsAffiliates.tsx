/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { motion } from 'framer-motion';

const ReferralsAffiliates: React.FC = () => {
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
          <h6 className="xsm">Total Traders Referred</h6>
          <p className="xsm">0</p>
        </div>
        <div className="referralsTab__body-inner__header-item">
          <h6 className="xsm">Total Trading Volume</h6>
          <p className="xsm">$0.00</p>
        </div>
      </div>
      <div className="referralsTab__body-inner__info">
        <h6 className="xsm">Total rebates</h6>
        <div className="referralsTab__body-inner__info-group">
          <h6 className="xsm">$0.0000</h6>
        </div>
      </div>
      <div className="referralsTab__body-inner__create">
        <h6 className="xsm">Referral Code</h6>
        <button type="button" className="button primary sm">
          Create
        </button>
      </div>
      <div className="referralsTab__body-inner__content">
        <div className="referralsTab__body-inner__content-codes">
          <table>
            <thead>
              <tr>
                <th>
                  <h6 className="xsm">Referral Code</h6>
                </th>
                <th>
                  <h6 className="xsm">Total Volume</h6>
                </th>
                <th>
                  <h6 className="xsm">Traders Referred </h6>
                </th>
                <th>
                  <h6 className="xsm">Total rebates</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h6 className="xsm">U34ALW9</h6>
                </td>
                <td>
                  <h6 className="xsm">$1232.00</h6>
                </td>
                <td>
                  <h6 className="xsm">127</h6>
                </td>
                <td>
                  <h6 className="xsm">$122.00</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6 className="xsm">0L1AFWQ</h6>
                </td>
                <td>
                  <h6 className="xsm">$87652.00</h6>
                </td>
                <td>
                  <h6 className="xsm">754</h6>
                </td>
                <td>
                  <h6 className="xsm">$454.00</h6>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default ReferralsAffiliates;
