/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const GaugeItem = () => {
  return (
    <tr>
      <td>
        <p>Name</p>
        Uniswap V3 FRAX/USDC
      </td>
      <td>
        <p>Address</p>
        0x1E91C7...0387052
      </td>
      <td>
        <p>Weight</p>
        0.00%
      </td>
      <td>
        <p>Can Vote</p>
        Yes
      </td>
    </tr>
  );
};

const Gauges = () => {
  return (
    <section className="list">
      <div className="auto__container">
        <div className="list__inner gauges">
          <div className="list__inner-main-wrapper">
            <div className="list__inner-main">
              <table className="big long">
                <thead>
                  <tr>
                    <th>
                      <h6>
                        <p>
                          MRX Balance
                          <span>0 veFXS</span>
                        </p>
                      </h6>
                    </th>
                    <th>
                      <h6>
                        <p>
                          Unused Weight
                          <span>-</span>
                        </p>
                      </h6>
                    </th>
                    <th>
                      <h6>
                        <p>
                          Weekly Rewards
                          <span>87.5K FXS</span>
                        </p>
                      </h6>
                    </th>
                    <th>
                      <h6>
                        <p>
                          Voting Time Left
                          <span className="colored">2D 13H 35M</span>
                        </p>
                      </h6>
                    </th>
                  </tr>
                </thead>
                <thead className="space">
                  <th />
                </thead>
                <thead className="top">
                  <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Weight</th>
                    <th>Can Vote</th>
                  </tr>
                </thead>
                <thead className="space">
                  <th />
                </thead>
                <tbody>
                  {/* TODO: Fix this when pulling actuall data */}
                  {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
                  {[...new Array(5).fill(0)].map((v, _) => (
                    <GaugeItem />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gauges;
