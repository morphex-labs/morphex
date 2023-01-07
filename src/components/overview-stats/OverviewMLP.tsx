import React from 'react';
import { motion } from 'framer-motion';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import Link from 'next/link';

const MLP = [
  {
    id: '1',
    title: 'Price',
    price: '$0.00',
  },
  {
    id: '2',
    title: 'Supply',
    price: '$0.00',
  },
  {
    id: '3',
    title: 'Market Cap / Total Staked',
    price: '$0.00',
  },
  {
    id: '4',
    title: 'Stablecoin Percentage',
    price: '46.43%',
  },
];

const OverviewMLP: React.FC = () => {
  const pool = 66;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, y: 10 }}
      className="overviewTab"
    >
      <div className="overviewTab__info">
        <div className="overviewTab__info-table">
          {MLP.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 * index }}
                exit={{ opacity: 0, x: -20 }}
                className="overviewItem"
                key={item.id}
              >
                <h6 className="xsm">{item.title}</h6>
                <p className="xsm">{item.price}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="overviewTab__info-progress">
          <CircularProgressbarWithChildren
            value={pool}
            strokeWidth={12}
            styles={buildStyles({
              pathColor: '#0C00FF',
              strokeLinecap: 'butt',
              trailColor: '#B2AEFF',
              pathTransitionDuration: 0.15,
            })}
          >
            <h6 className="xsm">MLP Pool</h6>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className="overviewTab__footer">
        <Link
          href="/liquidity"
          className="button sm primary"
          style={{ width: '50%' }}
        >
          Manage Liquidity
        </Link>
      </div>
    </motion.div>
  );
};

export default OverviewMLP;
