import { NextPage } from 'next';
import React from 'react';

const Liquidations: NextPage = () => {
  return (
    <section className="list">
      <div className="auto__container">
        <div className="list__inner">
          <div className="list__inner-buttons">
            <div className="list__inner-buttons-wrapper">
              <a className="button uniq" href="#to-be-liquidated">
                To be liquidated
              </a>
              <a className="button" href="#close-to-liquidations">
                Close to Liquidations
              </a>
            </div>
            <a className="button uniq sm" href="#liquidation-history">
              History
            </a>
          </div>
          <div className="list__inner-main-wrapper">
            <div className="list__inner-main">
              <table className="long">
                <thead className="top">
                  <tr>
                    <th>Address</th>
                    <th>Collateral Captured</th>
                    <th>Borrowing Utilization</th>
                  </tr>
                </thead>
                <thead className="space">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <th />
                </thead>
                <tbody>
                  <tr>
                    <td className="head">
                      <p>Address</p>
                      0x1E91C7...0387052
                    </td>
                    <td>
                      <p>Collateral Captured</p>
                      <span>
                        1.015 BNB
                        <small>($281.758)</small>
                      </span>
                    </td>
                    <td>
                      <p>Borrowing Utilization</p>
                      81%
                    </td>
                  </tr>
                  <tr>
                    <td className="head">
                      <p>Address</p>
                      0x1E91C7...0387052
                    </td>
                    <td>
                      <p>Collateral Captured</p>
                      <span>
                        1.015 BNB
                        <small>($281.758)</small>
                      </span>
                    </td>
                    <td>
                      <p>Borrowing Utilization</p>
                      81%
                    </td>
                  </tr>
                  <tr>
                    <td className="head">
                      <p>Address</p>
                      0x1E91C7...0387052
                    </td>
                    <td>
                      <p>Collateral Captured</p>
                      <span>
                        1.015 BNB
                        <small>($281.758)</small>
                      </span>
                    </td>
                    <td>
                      <p>Borrowing Utilization</p>
                      81%
                    </td>
                  </tr>
                  <tr>
                    <td className="head">
                      <p>Address</p>
                      0x1E91C7...0387052
                    </td>
                    <td>
                      <p>Collateral Captured</p>
                      <span>
                        1.015 BNB
                        <small>($281.758)</small>
                      </span>
                    </td>
                    <td>
                      <p>Borrowing Utilization</p>
                      81%
                    </td>
                  </tr>
                  <tr>
                    <td className="head">
                      <p>Address</p>
                      0x1E91C7...0387052
                    </td>
                    <td>
                      <p>Collateral Captured</p>
                      <span>
                        1.015 BNB
                        <small>($281.758)</small>
                      </span>
                    </td>
                    <td>
                      <p>Borrowing Utilization</p>
                      81%
                    </td>
                  </tr>
                  <tr>
                    <td className="head">
                      <p>Address</p>
                      0x1E91C7...0387052
                    </td>
                    <td>
                      <p>Collateral Captured</p>
                      <span>
                        1.015 BNB
                        <small>($281.758)</small>
                      </span>
                    </td>
                    <td>
                      <p>Borrowing Utilization</p>
                      81%
                    </td>
                  </tr>
                  <tr>
                    <td className="head">
                      <p>Address</p>
                      0x1E91C7...0387052
                    </td>
                    <td>
                      <p>Collateral Captured</p>
                      <span>
                        1.015 BNB
                        <small>($281.758)</small>
                      </span>
                    </td>
                    <td>
                      <p>Borrowing Utilization</p>
                      81%
                    </td>
                  </tr>
                  <tr>
                    <td className="head">
                      <p>Address</p>
                      0x1E91C7...0387052
                    </td>
                    <td>
                      <p>Collateral Captured</p>
                      <span>
                        1.015 BNB
                        <small>($281.758)</small>
                      </span>
                    </td>
                    <td>
                      <p>Borrowing Utilization</p>
                      81%
                    </td>
                  </tr>
                  <tr>
                    <td className="head">
                      <p>Address</p>
                      0x1E91C7...0387052
                    </td>
                    <td>
                      <p>Collateral Captured</p>
                      <span>
                        1.015 BNB
                        <small>($281.758)</small>
                      </span>
                    </td>
                    <td>
                      <p>Borrowing Utilization</p>
                      81%
                    </td>
                  </tr>
                  <tr>
                    <td className="head">
                      <p>Address</p>
                      0x1E91C7...0387052
                    </td>
                    <td>
                      <p>Collateral Captured</p>
                      <span>
                        1.015 BNB
                        <small>($281.758)</small>
                      </span>
                    </td>
                    <td>
                      <p>Borrowing Utilization</p>
                      81%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Liquidations;
