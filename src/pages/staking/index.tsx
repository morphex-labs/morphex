/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Lock from '../../components/Lock';

const Staking = () => {
  const [activated, setActivated] = useState(false);

  const handleOpenLockPopup = () => {
    setActivated(!activated);
  };

  return (
    <>
      <section className="staking">
        <div className="auto__container">
          <div className="staking__inner">
            <div className="staking__inner-main">
              <div className="stakingItem">
                <h4 className="sm">TVL</h4>
                <p>$0.00</p>
              </div>
              <div className="stakingItem">
                <h4 className="sm">MRX Staked</h4>
                <p>$0.00</p>
              </div>
              <div className="stakingItem">
                <h4 className="sm">My locked MRX</h4>
                <p>
                  <span
                    role="none"
                    id="lockBtn"
                    onClick={handleOpenLockPopup}
                  />
                  0.00
                </p>
              </div>
              <div className="stakingItem">
                <h4 className="sm">Locked until</h4>
                <p>00/00/00</p>
              </div>
            </div>
            <div className="staking__inner-content">
              <div className="stakingItem">
                <h4 className="sm">MRX Staked</h4>
                <p>
                  $0.00
                  <small>0</small>
                </p>
              </div>
              <div className="stakingItem">
                <h4 className="sm">Total liquidity</h4>
                <p>0.00</p>
              </div>
              <div className="stakingItem">
                <h4 className="sm">APR</h4>
                <p>%0.00</p>
              </div>
              <div className="stakingItem buttons">
                <a
                  href="#"
                  className="button primary"
                  id="stake"
                  onClick={handleOpenLockPopup}
                >
                  Stake
                </a>
                <a
                  href="#"
                  className="button secondary"
                  id="unstake"
                  onClick={handleOpenLockPopup}
                >
                  Unstake
                </a>
              </div>
            </div>
            <div className="staking__inner-table">
              <table>
                <thead>
                  <tr>
                    <th>
                      <h4>
                        <span>
                          <img src="/images/icons/main-icon.png" alt="" />
                        </span>
                        BNB
                      </h4>
                    </th>
                    <th>
                      Earned <strong>0.000</strong>
                    </th>
                    <th>0.000</th>
                    <th>
                      <a href="#" className="button">
                        Claim
                      </a>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </section>
      <Lock activated={activated} setActivated={setActivated} />
    </>
  );
};

export default Staking;
