import React from 'react';

const Borrow = () => {
  return (
    <section className="borrow">
      <div className="auto__container">
        <div className="borrow__inner">
          <div className="borrow__inner-row">
            <div className="borrow__inner-col">
              <div className="borrow__inner-col-top">
                <h4>My Collateral</h4>
                <h3>
                  <span>
                    <img src="/images/icons/main-icon.png" alt="" />
                  </span>
                  0.00 USD
                  <small>0 BNB</small>
                </h3>
              </div>
              <div className="borrow__inner-col-bottom row">
                <div className="borrowItem">
                  <h4>
                    Net Borrowing APR
                    <span>
                      <img src="/images/icons/question-circle.svg" alt="" />
                    </span>
                  </h4>
                  <h2>2%</h2>
                </div>
                <div className="borrowItem__side">
                  <div className="borrowItem">
                    <h4>
                      Morphex Rewards
                      <span>
                        <img src="/images/icons/question-circle.svg" alt="" />
                      </span>
                    </h4>
                    <h3>0%</h3>
                  </div>
                  <div className="borrowItem">
                    <h4>
                      Borrowing APR (Fee)
                      <span>
                        <img src="/images/icons/question-circle.svg" alt="" />
                      </span>
                    </h4>
                    <h3>2%</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="borrow__inner-col">
              <div className="borrow__inner-col-top">
                <h4>My Borrowed Funds</h4>
                <h3>
                  <span>
                    <img src="/images/icons/icon-logo.svg" alt="" />
                  </span>
                  0.00 MPX
                </h3>
              </div>
              <div className="borrow__inner-col-bottom">
                <div className="borrowLines">
                  <h4>Borrowing Utilization</h4>
                  <div className="borrowLines__side">
                    <div className="check">
                      <input type="checkbox" id="checkbox" />
                      <div className="check__box" />
                    </div>
                    <h4>Liquidation Alert</h4>
                  </div>
                </div>
                <div className="borrowLines">
                  <div className="progress__outer">
                    <div className="progress">
                      <div
                        className="progress__inner"
                        style={{ width: '75%' }}
                        id="progress"
                      />
                    </div>
                    <p className="sm">0%</p>
                    <p className="sm">75%</p>
                    <p className="sm">100%</p>
                  </div>
                </div>
                <div className="borrowLines">
                  <h4>
                    Liquidation BNB price: <span>$0</span>
                  </h4>
                  <div className="borrowLines__side">
                    <h4>
                      Borrow Limit: <span>$0</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="borrow__inner-list">
            <table className="sm">
              <thead>
                <tr>
                  <th>Collateral</th>
                  <th>Price</th>
                  <th>Collateral ratio</th>
                  <th>Collateral</th>
                  <th>Borrowed</th>
                  <th>Net Borrowing APR</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg">
                  <td>
                    <p>Collateral</p>
                    <h5>
                      <span>
                        <img src="images/icons/main-icon.png" alt="" />
                      </span>
                      BNB
                    </h5>
                  </td>
                  <td>
                    <p>Price</p>
                    $261.869
                  </td>
                  <td>
                    <p>Collateral ratio</p>
                    66%
                  </td>
                  <td>
                    <p>Collateral</p>
                    <span>
                      0 BNB <small>$0</small>
                    </span>
                  </td>
                  <td>
                    <p>Borrowed</p>0 MRX
                  </td>
                  <td>
                    <p>Net Borrowing APR</p>
                    -2%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Borrow;
