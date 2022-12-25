/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { motion } from 'framer-motion';
import { saveFees } from '../../base/Moduls';

export default function Table() {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Price</th>
            <th>Pool</th>
            <th>Weight</th>
            <th>Utilization</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {saveFees.map((item, index) => {
            return (
              <motion.tr
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 * index }}
                exit={{ opacity: 0, y: 20 }}
                key={item.id}
              >
                <td>
                  <div className="tableCoin">
                    <div className="tableCoin__icon">
                      <img src={item.icon} alt={item.id} />
                    </div>
                    <div className="tableCoin__text">
                      <h6 className="xsm med">{item.name}</h6>
                      <h6 className="xsm">{item.coin}</h6>
                    </div>
                  </div>
                  <div className="mobileTitle">Name</div>
                </td>
                <td>
                  <div className="mobileTitle">Price</div>
                  {item.price}
                </td>
                <td>
                  <div className="mobileTitle">Available</div>
                  {item.available}
                </td>
                <td>
                  <div className="mobileTitle">Wallet</div>
                  {item.wallet}
                </td>
                <td>
                  <div className="mobileTitle">Fees</div>
                  {item.fees}
                </td>
                <td className="btn">
                  <button type="button" className="button sm primary">
                    Buy with ETH
                  </button>
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
