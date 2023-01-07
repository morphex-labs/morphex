import { motion } from 'framer-motion';
import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';

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

const OverviewMPX = () => {
  const distribution = 88;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, y: 10 }}
      className="overviewTab__content"
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
            value={distribution}
            strokeWidth={12}
            styles={buildStyles({
              pathColor: '#0C00FF',
              strokeLinecap: 'butt',
              trailColor: '#B2AEFF',
              pathTransitionDuration: 0.15,
            })}
          >
            <h6 className="xsm">Distribution</h6>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <div className="overviewTab__footer">
        <a
          href="#link-to-external"
          target="_blank"
          rel="noreferrer"
          className="button sm primary"
          style={{ width: '50%' }}
        >
          Buy
        </a>
      </div>
    </motion.div>
  );
};

export default OverviewMPX;
