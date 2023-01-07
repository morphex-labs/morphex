/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import UnStakeMlp from '../../base/modals/UnStakeMlp';
import StakeMlp from '../../base/modals/StakeMlp';
import ClaimReward from '../../base/modals/ClaimReward';
import CompoundReward from '../../base/modals/CompoundReward';
import MlpVault from '../../base/modals/MlpVault';
import MpxVault from '../../base/modals/MpxVault';
import MlpWith from '../../base/modals/MlpWith';
import MpxWith from '../../base/modals/MpxWith';

// const MPX = [
//   {
//     id: '59a4a772-845b',
//     title: 'Staked Tokens',
//     number: '0.00',
//   },
//   {
//     id: '59a4a9e8-845b',
//     title: 'Reserved for Vesting',
//     number: '0.00 / 0.00',
//   },
//   {
//     id: '59a4ab32-845b',
//     title: 'Vesting Status',
//     number: '0.0000 / 0.0000',
//   },
//   {
//     id: '59a4af4c-845b',
//     title: 'Claimable',
//     number: '0.0000 MPX',
//   },
// ];

// const MLP = [
//   {
//     id: '59a4b10e-845b',
//     title: 'Staked Tokens',
//     number: '0.00',
//   },
//   {
//     id: '2',
//     title: 'Reserved for Vesting',
//     number: '0.00 / 0.00',
//   },
//   {
//     id: '3',
//     title: 'Vesting Status',
//     number: '0.0000 / 0.0000',
//   },
//   {
//     id: '4',
//     title: 'Claimable',
//     number: '0.0000 MLP',
//   },
// ];
const rewards = [
  {
    id: '1',
    title: 'ETH (WETH)',
    number: '0.0000 ($0.00)',
    price: '',
  },
  {
    id: '59a4b26c-845b',
    title: 'MRX',
    number: '0.0000 ($0.00)',
    price: '',
  },
  {
    id: '59a4b38e-845b',
    title: 'Escrowed MRX',
    number: '0.0000 ($0.00)',
    price: '',
  },
  {
    id: '59a4b4a6-845b',
    title: 'Multiplier Points',
    number: '0.0000',
    price: '',
  },
  {
    id: '59a4b5c8-845b',
    title: 'Staked Multiplier Points',
    number: '0.0000',
    price: '',
  },
  {
    id: '59a4b776-845b',
    title: 'Total',
    number: '$0.00',
    price: '',
  },
];

// const MRXEarn = [
//   {
//     id: '9be43710-845b',
//     title: 'Price',
//     number: '$84.31',
//   },
//   {
//     id: '9be43986-845b',
//     title: 'Wallet',
//     number: '0.00 MRX ($0.00)',
//   },
//   {
//     id: '9be43ab2-845b',
//     title: 'Staked',
//     number: '0.00 MRX ($0.00)',
//   },
//   {
//     id: '9be43bb6-845b',
//     space: true,
//   },
//   {
//     id: '9be43cb0-845b',
//     title: 'APR',
//     number: '14.22%',
//   },
//   {
//     id: '9be43d96-845b',
//     title: 'Rewards',
//     number: '$0.00',
//   },
//   {
//     id: '9be43e86-845b',
//     title: 'Multiplier Points ARP',
//     number: '100.00%',
//   },
//   {
//     id: '9be44188-845b',
//     title: 'Boost Percentage',
//     number: '0.00%',
//   },
//   {
//     id: '9be442dc-845b',
//     space: true,
//   },
//   {
//     id: '9be443cc-845b',
//     title: 'Total Staked',
//     number: '6,872,658 GMX ($235,106,499)',
//   },
//   {
//     id: 'ccfdec60-845b',
//     title: 'Total Supply',
//     number: '8,203,008 GMX ($280,595,113)',
//   },
// ];
const MLPEarn = [
  {
    id: 'ccfdef44-845b',
    title: 'Price',
    number: '$84.31',
  },
  {
    id: 'ccfdf07a-845b',
    title: 'Staked',
    number: '0.00 MRX ($0.00)',
  },
  {
    id: 'ccfdf1f6-845b',
    space: true,
  },
  {
    id: 'ccfdf30e-845b',
    title: 'APR',
    number: '14.22%',
  },
  {
    id: 'ccfdf426-845b',
    title: 'Rewards',
    number: '$0.00',
  },
  {
    id: 'ccfdf548-845b',
    space: true,
  },
  {
    id: 'ccfdf886-845b',
    title: 'Total Staked',
    number: '6,872,658 GMX ($235,106,499)',
  },
];

// const EMRXEarn = [
//   {
//     id: 'ccfdf9f8-845b',
//     title: 'Price',
//     number: '$84.31',
//   },
//   {
//     id: 'ccfdfb6a-845b',
//     title: 'Wallet',
//     number: '0.00 MRX ($0.00)',
//   },
//   {
//     id: 'f3833034-845b',
//     title: 'Staked',
//     number: '0.00 MRX ($0.00)',
//   },
//   {
//     id: 'f383335e-845b',
//     space: true,
//   },
//   {
//     id: 'f3833520-845b',
//     title: 'APR',
//     number: '14.22%',
//   },
//   {
//     id: 'f38336ce-845b',
//     title: 'Multiplier Points ARP',
//     number: '100.00%',
//   },
//   {
//     id: 'f3833868-845b',
//     space: true,
//   },
//   {
//     id: 'f3833a20-845b',
//     title: 'Total Staked',
//     number: '6,872,658 GMX ($235,106,499)',
//   },
//   {
//     id: 'f3833bd8-845b',
//     title: 'Total Supply',
//     number: '8,203,008 GMX ($280,595,113)',
//   },
// ];

export default function Earn() {
  const [tab, setTab] = useState('MLP');
  const [unStakeMlp, setUnStakeMlp] = useState(false);
  const [stakeMlp, setStakeMlp] = useState(false);
  const [claimReward, setClaimReward] = useState(false);
  const [compReward, setCompReward] = useState(false);
  const [mlpVault, setMlpVault] = useState(false);
  const [mlpWith, setMlpWith] = useState(false);
  const [mpxVault, setMpxVault] = useState(false);
  const [mpxWith, setMpxWith] = useState(false);

  return (
    <>
      <div className="earn">
        <div className="auto__container">
          <div className="earn__inner">
            <div className="earn__header">
              <button type="button" className="button primary">
                Earn
              </button>
              <p className="xsm">Stake MRX and MLP to earn rewards.</p>
            </div>
            <div className="earn__inner-row">
              <div className="earn__inner-btns btn1">
                {/* <div
                  role="presentation"
                  onClick={() => setTab('MRX')}
                  className={`earnTab__btn ${tab === 'MRX' ? 'active' : ''}`}
                >
                  MRX
                </div>
                <div
                  role="presentation"
                  onClick={() => setTab('EMRX')}
                  className={`earnTab__btn ${tab === 'EMRX' ? 'active' : ''}`}
                >
                  Escrowed MRX
                </div> */}
                <div
                  role="presentation"
                  onClick={() => setTab('MLP')}
                  className={`earnTab__btn ${tab === 'MLP' ? 'active' : ''}`}
                >
                  MLP
                </div>
              </div>
              <div className="earn__inner-title btn2">
                <h6 className="sm">Total Rewards</h6>
              </div>
              <div className="earn__inner-box">
                {/* {tab === 'MRX' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="earnTab"
                  >
                    <div className="earnTab__info">
                      <div className="earnTab__info-table">
                        <div className="earn__items">
                          {MRXEarn.map((item, index) => {
                            if (item.space)
                              return <span key={item.id} className="space" />;
                            return (
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 * index }}
                                exit={{ opacity: 0, x: -20 }}
                                className="earnItem"
                                key={item.id}
                              >
                                <h6 className="xsm">{item.title}</h6>
                                <p className="xsm">{item.number}</p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="earnTab__footer uniq">
                      <button type="button" className="button sm primary">
                        Buy
                      </button>
                      <button
                        type="button"
                        className="button sm primary"
                        onClick={() => setStakeMlp(true)}
                      >
                        Stake
                      </button>
                      <button
                        type="button"
                        className="button sm secondary"
                        onClick={() => setUnStakeMlp(true)}
                      >
                        Unstake
                      </button>
                    </div>
                  </motion.div>
                )} */}
                {tab === 'MLP' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="earnTab"
                  >
                    <div className="earnTab__info">
                      <div className="earnTab__info-table">
                        <div className="earn__items">
                          {MLPEarn.map((item, index) => {
                            if (item.space)
                              return <span key={item.id} className="space" />;
                            return (
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 * index }}
                                exit={{ opacity: 0, x: -20 }}
                                className="earnItem"
                                key={item.id}
                              >
                                <h6 className="xsm">{item.title}</h6>
                                <p className="xsm">{item.number}</p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="earnTab__footer">
                      <Link href="/liquidity" legacyBehavior>
                        <button type="button" className="button sm primary">
                          Buy
                        </button>
                      </Link>

                      <Link href="/liquidity" legacyBehavior>
                        <button type="button" className="button sm secondary">
                          Sell
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                )}
                {/* {tab === 'EMRX' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="earnTab"
                  >
                    <div className="earnTab__info">
                      <div className="earnTab__info-table">
                        <div className="earn__items">
                          {EMRXEarn.map((item, index) => {
                            if (item.space)
                              return <span key={item.id} className="space" />;
                            return (
                              <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 * index }}
                                exit={{ opacity: 0, x: -20 }}
                                className="earnItem"
                                key={item.id}
                              >
                                <h6 className="xsm">{item.title}</h6>
                                <p className="xsm">{item.number}</p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="earnTab__footer">
                      <button type="button" className="button sm primary">
                        Stake
                      </button>
                      <button type="button" className="button sm secondary">
                        Unstake
                      </button>
                    </div>
                  </motion.div>
                )} */}
              </div>
              <div className="earn__inner-box">
                <div className="earn__items">
                  {rewards.map((item, index) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 * index }}
                        exit={{ opacity: 0, x: -20 }}
                        className="earnItem"
                        key={item.id}
                      >
                        <h6 className="xsm">{item.title}</h6>
                        <p className="xsm">{item.price}</p>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="earn__inner-box-footer">
                  <button
                    type="button"
                    className="button primary sm"
                    onClick={() => setCompReward(true)}
                  >
                    Compound
                  </button>
                  <button
                    type="button"
                    className="button secondary sm"
                    onClick={() => setClaimReward(true)}
                  >
                    Claim
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="earn__header">
              <button type="button" className="button primary">
                Vest
              </button>
              <p className="xsm">Stake MRX and MLP to earn rewards.</p>
            </div>
            <div className="earn__inner-row">
              <div className="earn__inner-title btn1">
                <h6 className="sm">MPX Vault</h6>
              </div>
              <div className="earn__inner-title btn2">
                <h6 className="sm">MLP Vault</h6>
              </div>
              <div className="earn__inner-box">
                <div className="earn__items">
                  {MPX.map((item, index) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 * index }}
                        exit={{ opacity: 0, x: -20 }}
                        className="earnItem"
                        key={item.id}
                      >
                        <h6 className="xsm">{item.title}</h6>
                        <p className="xsm">{item.number}</p>
                      </motion.div>
                    );
                  })}
                </div>
                <div className="earn__inner-box-footer">
                  <button
                    type="button"
                    className="button primary sm"
                    onClick={() => setMpxVault(true)}
                  >
                    Deposit
                  </button>
                  <button
                    type="button"
                    className="button secondary sm"
                    onClick={() => setMpxWith(true)}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
              <div className="earn__inner-box">
                <div className="earn__items">
                  {MLP.map((item, index) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 * index }}
                        exit={{ opacity: 0, x: -20 }}
                        className="earnItem"
                        key={item.id}
                      >
                        <h6 className="xsm">{item.title}</h6>
                        <p className="xsm">{item.number}</p>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="earn__inner-box-footer">
                  <button
                    type="button"
                    className="button primary sm"
                    onClick={() => setMlpVault(true)}
                  >
                    Deposit
                  </button>
                  <button
                    type="button"
                    className="button secondary sm"
                    onClick={() => setMlpWith(true)}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {unStakeMlp ? (
          <UnStakeMlp closeFunc={() => setUnStakeMlp(false)} />
        ) : (
          ''
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {stakeMlp ? <StakeMlp closeFunc={() => setStakeMlp(false)} /> : ''}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {claimReward ? (
          <ClaimReward closeFunc={() => setClaimReward(false)} />
        ) : (
          ''
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {compReward ? (
          <CompoundReward closeFunc={() => setCompReward(false)} />
        ) : (
          ''
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {mlpVault ? <MlpVault closeFunc={() => setMlpVault(false)} /> : ''}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {mlpWith ? <MlpWith closeFunc={() => setMlpWith(false)} /> : ''}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {mpxVault ? <MpxVault closeFunc={() => setMpxVault(false)} /> : ''}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {mpxWith ? <MpxWith closeFunc={() => setMpxWith(false)} /> : ''}
      </AnimatePresence>
    </>
  );
}
