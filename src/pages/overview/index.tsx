import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import 'react-circular-progressbar/dist/styles.css';
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from 'react-circular-progressbar';

import Table from '../../components/Table';
import { FEED_ID_MAP } from '../../subgraph/feeds';
import {
  getMinMaxPrice,
  getPriceAndTimestamp,
  PriceFeedQuery,
} from '../../subgraph/price-feeds/priceFeedUtil';

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

export default function Overview() {
  const [tab, setTab] = useState('MLP');
  const pool = 66;
  const distribution = 88;

  // START TEST SUBGRAPH for CHAINLINK PRICE FEEDS
  const GET_ROUNDS_BTC = gql`
    {
      rounds(
        first: 20
        skip: 1000
        orderBy: unixTimestamp
        orderDirection: desc
        where: { feed: "${FEED_ID_MAP.ETH_USD}" }
      ) {
        unixTimestamp
        value
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ROUNDS_BTC);

  if (data) {
    const { prices, pricesWTimestamp } = getPriceAndTimestamp(
      data as PriceFeedQuery
    );
    const { min, max } = getMinMaxPrice(prices);

    console.log(min, max);
  }

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
              {tab === 'MLP' && (
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
                    <Link href="/liquidity" passHref>
                      <a className="button sm primary" style={{ width: '50%' }}>
                        Manage Liquidity
                      </a>
                    </Link>
                  </div>
                </motion.div>
              )}
              {tab === 'MPX' && (
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
              )}
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
