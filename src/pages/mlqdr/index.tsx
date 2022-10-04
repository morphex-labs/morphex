import React from 'react';

const mLQDR = () => {
  return (
    <section className="about">
      <div className="auto__container">
        <div className="about__inner">
          <div className="about__inner-row">
            <div className="about__inner-col">
              <div className="about__inner-col-top">
                <h4>
                  Most efficient <br />
                  mLQDR entry
                </h4>
                <div className="about__inner-col-top-buttons">
                  {/* TODO: Change to Button */}
                  <a href="#" className="button">
                    1 LQDR : 0 mLQDR
                  </a>
                  <a href="#" className="button uniq">
                    Guide
                  </a>
                </div>
              </div>
              <div className="about__inner-col-center">
                <p className="sm">Easy mLQDR - LQDR Entry</p>
                <h4>Mint mLQDR</h4>
                <div className="aboutItem">
                  <p className="sm">Balance</p>
                  <div className="aboutItem__row">
                    <p className="sm">
                      <span>
                        <img src="/images/icons/lqdr.svg" alt="" />
                      </span>
                      LQDR
                    </p>
                    <p className="sm">0</p>
                  </div>
                </div>
                <div className="aboutItem">
                  <p className="sm">Balance</p>
                  <div className="aboutItem__row">
                    <p className="sm">
                      <span>
                        <img src="/images/icons/mlqdr.svg" alt="" />
                      </span>
                      mLQDR
                    </p>
                    <p className="sm">0</p>
                  </div>
                </div>
              </div>
              <div className="about__inner-col-bottom">
                <div className="aboutInfo dark">
                  <p className="sm">0.0</p>
                  <a href="#" className="button">
                    50% MAX
                  </a>
                </div>
                <a href="#" className="button">
                  Approve
                </a>
              </div>
            </div>
            <div className="about__inner-col">
              <div className="about__inner-col-top big">
                <h4>
                  Swap
                  <small>mLQDR & LQDR</small>
                </h4>
                <a href="#" className="button uniq">
                  Manage Liquidity
                </a>
              </div>
              <div className="about__inner-col-center">
                <div className="aboutItem sm uniq">
                  <p className="sm">Input</p>
                  <div className="aboutItem__row">
                    <p className="sm">
                      <span>
                        <img src="/images/icons/lqdr.svg" alt="" />
                      </span>
                      LQDR
                    </p>
                    <div className="aboutItem__row-side">
                      <p className="sm">0.0</p>
                      <a href="#" className="button">
                        50% MAX
                      </a>
                    </div>
                  </div>
                  <div className="aboutInfo">
                    <p className="sm">Balance</p>
                    <p className="sm">0.0</p>
                  </div>
                </div>
                <div className="aboutItem__arrow-wrapper">
                  <div className="aboutItem__arrow">
                    <img src="/images/icons/arrow.svg" alt="" />
                  </div>
                </div>
                <div className="aboutItem uniq">
                  <p className="sm">Output</p>
                  <div className="aboutItem__row">
                    <p className="sm">
                      <span>
                        <img src="/images/icons/mlqdr.svg" alt="" />
                      </span>
                      LQDR
                    </p>
                    <div className="aboutItem__row-side">
                      <p className="sm">0.0</p>
                      <a href="#max-mqldr" className="button">
                        50% MAX
                      </a>
                    </div>
                  </div>
                  <div className="aboutInfo">
                    <p className="sm">Balance</p>
                    <p className="sm">0.0</p>
                  </div>
                </div>
              </div>
              <div className="about__inner-col-bottom">
                <div className="aboutInfo">
                  <p className="sm">Price impact</p>
                  <p className="sm">0.00%</p>
                </div>
                <a href="#" className="button">
                  Approve
                </a>
              </div>
            </div>
          </div>
          <div className="about__footer">
            <div className="about__footer-col">
              <div className="about__footer-col-top big">
                <h4>
                  wFTM & MORPH Rewards
                  <small>Stake mLQRD - LQDR LP</small>
                </h4>
              </div>
              <div className="about__footer-row">
                <div className="about__footer-row-item">
                  <p className="sm">wFTM APR</p>
                  <p className="sm">23.21%</p>
                </div>
                <div className="about__footer-row-item">
                  <p className="sm">MORPH APR</p>
                  <p className="sm">23.21%</p>
                </div>
                <div className="about__footer-row-item">
                  <p className="sm">Combined APR</p>
                  <p className="sm">23.21%</p>
                </div>
              </div>
            </div>
            <div className="about__footer-col">
              <div className="about__footer-col-top">
                <p className="sm">View Contract</p>
                <p className="sm">0xC6c...B77D</p>
              </div>
              <div className="about__footer-row linear">
                <div className="about__footer-row-item">
                  <p className="sm">Total staked</p>
                  <p className="sm">$202.211</p>
                </div>
              </div>
              <a href="#" className="button">
                Enable
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default mLQDR;
