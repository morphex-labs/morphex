import React from 'react';
import { motion } from 'framer-motion';

export const shortDetail = [
  {
    id: '1',
    title: 'Short ETH',
    number: '$1,321.90',
  },
  {
    id: '2',
    title: 'ETH Price',
    number: '$1,321.90',
  },
  {
    id: '3',
    title: 'Borrow Fee',
    number: '0.001% / 1H',
  },
  {
    id: '4',
    title: 'Available Liquidity',
    number: '$1,321.90',
  },
];
export default function ShortDetail() {
  return (
    <>
      {shortDetail.map((item, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 * index }}
            exit={{ opacity: 0, x: -20 }}
            className="tradeItem"
            key={item.id}
          >
            <h6 className="xsm">{item.title}</h6>
            <p className="xsm">{item.number}</p>
          </motion.div>
        );
      })}
    </>
  );
}
