import React from 'react';
import { motion } from 'framer-motion';

export const swapDetail = [
  {
    id: '1',
    title: 'Swap',
    number: '',
  },
  {
    id: '2',
    title: 'ETH Price',
    number: '$1,321.90',
  },
  {
    id: '3',
    title: 'USDC Price',
    number: '$1.00',
  },
  {
    id: '4',
    title: 'Available Liquidity',
    number: '$1,321.90',
  },
];
export default function SwapDetail() {
  return (
    <>
      {swapDetail.map((item, index) => {
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
