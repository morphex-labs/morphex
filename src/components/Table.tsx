import React from 'react';
import { motion } from 'framer-motion';
import { MRX } from '../base/Moduls';

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
          </tr>
        </thead>
        <tbody>
          {MRX.map((item, index) => {
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
                  <div className="mobileTitle">Pool</div>
                  {item.pool}
                </td>
                <td>
                  <div className="mobileTitle">Weight</div>
                  {item.weight}
                </td>
                <td>
                  <div className="mobileTitle">Utilization</div>
                  {item.utilization}
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
