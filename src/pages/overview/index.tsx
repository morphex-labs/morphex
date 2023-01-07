import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useLazyQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';

import {
  getGqlQueryBySymbol,
  getMinMaxPrice,
  getPrice,
  PriceFeedQuery,
} from '../../subgraph/price-feeds/priceFeedUtil';

const Table = dynamic(() => import('../../components/Table'));
const OverviewMLP = dynamic(
  () => import('../../components/overview-stats/OverviewMLP')
);
const OverviewMPX = dynamic(
  () => import('../../components/overview-stats/OverviewMPX')
);

const stats = [
  {
    id: '1',
    title: 'AUM',
    price: '$84.31',
  },
  {
    id: '2',
    title: 'MRX Pool',
    price: '$0.00',
  },
  {
    id: '3',
    title: '24H Volume',
    price: '$0.00',
  },
  {
    id: '4',
    title: 'Short Positions',
    price: '0.00%',
  },
  {
    id: '5',
    title: 'Long Positions',
    price: '0.00%',
  },
  {
    id: '6',
    title: 'Total Fees',
    price: '$84.31',
  },
  {
    id: '7',
    title: 'Total Volume',
    price: '0.00 MRX ($0.00)',
  },
];

export default function Overview() {
  const [tab, setTab] = useState('MLP');

  const [loadPrices, { called, data }] = useLazyQuery(
    getGqlQueryBySymbol('BTC')
  );

  // START TEST SUBGRAPH for CHAINLINK PRICE FEEDS
  useEffect(() => {
    const id = setInterval(() => {
      // const data = getPriceFeedData();
      loadPrices();
      if (called) {
        const prices = getPrice(data as PriceFeedQuery);
        const { min, max } = getMinMaxPrice(prices);
        console.log(`Min: ${min}, Max: ${max}`);
      }
    }, 10000);

    return () => clearInterval(id);
  });

  return (
    <div className="overview">
      <div className="auto__container">
        <div className="overview__inner">
          <div className="overview__inner-row">
            <div className="overview__inner-title">
              <h6 className="sm">Stats</h6>
            </div>
            <div className="overview__inner-btns">
              <div
                role="presentation"
                onClick={() => setTab('MLP')}
                className={`overviewTab__btn ${tab === 'MLP' ? 'active' : ''}`}
              >
                MLP
              </div>
              <div
                role="presentation"
                onClick={() => setTab('MPX')}
                className={`overviewTab__btn ${tab === 'MPX' ? 'active' : ''}`}
              >
                MPX
              </div>
            </div>
            <div className="overview__inner-box">
              {stats.map((stat, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 * index }}
                    exit={{ opacity: 0, x: -20 }}
                    className="overviewItem"
                    key={stat.id}
                  >
                    <h6 className="xsm">{stat.title}</h6>
                    <p className="xsm">{stat.price}</p>
                  </motion.div>
                );
              })}
            </div>
            <div className="overview__inner-box">
              {tab === 'MLP' && <OverviewMLP />}
              {tab === 'MPX' && <OverviewMPX />}
            </div>
          </div>
          <div className="table__outer">
            <div className="table__header">
              <h6 className="sm">MRX Index Composition </h6>
            </div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
