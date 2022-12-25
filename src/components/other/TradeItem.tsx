import React from 'react';
import { motion } from 'framer-motion';

interface TradeItemProps {
  index: number;
  date: string;
  desc: string;
}

export default function TradeItem({ index, date, desc }: TradeItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.3 * index }}
      exit={{ opacity: 0, y: 10 }}
      className="tradeOther__box"
    >
      <p className="xsm">{date}</p>
      <h6 className="xsm">{desc}</h6>
    </motion.div>
  );
}
