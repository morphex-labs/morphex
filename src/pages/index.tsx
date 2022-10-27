import Image from 'next/image';
import { useAccount } from 'wagmi';
import type { NextPage } from 'next';

import { Messages } from '../constants';
import Welcome from '../components/Welcome';
// import toast from 'react-hot-toast';
// import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const { isConnected } = useAccount();
  // const { data, isLoading } = trpc.useQuery(['some.query-here']);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  if (!isConnected) {
    return <Welcome />;
  }

  return (
    <section className="info">
      <div className="auto__container">
        <div className="info__inner">
          <div className="info__inner-head">
            <div className="info__inner-head-item">
              <a href="#welcome" className="button uniq">
                Welcome
              </a>
            </div>
            <div className="info__inner-head-item">
              <p className="big">
                This year we have seen various multicoloured gradients with
                vibrant color palettes and irregular shapes with blur.
              </p>
            </div>
          </div>
          <div className="info__inner-row">
            <div className="info__inner-col">
              <div className="infoItem">
                <h4>Total Collateral</h4>
                <div className="infoItem__price">
                  <h4>0.00 USD</h4>
                  <p>0 BNB</p>
                </div>
              </div>
              <div className="infoItem">
                <h4>Total Borrowed</h4>
                <div className="infoItem__price">
                  <h4>0.00 USD</h4>
                  <p>0 BNB</p>
                </div>
              </div>
              <div className="infoItem">
                <h4>
                  Net Asset Value
                  <span
                    className="hovertext"
                    data-hover={Messages.NET_ASSET_VALUE}
                  >
                    <Image
                      width={12}
                      height={12}
                      src="/images/icons/question-circle.svg"
                      alt="Question mark"
                    />
                  </span>
                </h4>
                <div className="infoItem__price">
                  <h4>0.00 USD</h4>
                </div>
              </div>
            </div>
            <div className="info__inner-col">
              <h4>Morphex Rewards</h4>
              <h2>
                <span>
                  <img src="./images/icons/icon-logo.svg" alt="" />
                </span>
                0.00 MPX
              </h2>
              <div className="info__inner-col-bg">
                <img src="./images/blue-shape.png" alt="" />
              </div>
            </div>
          </div>
          <div className="info__inner-list">
            <table className="sm">
              <thead>
                <tr>
                  <th>Collateral</th>
                  <th>Amount</th>
                  <th>Borrowing Utilization</th>
                  <th>Borrowed</th>
                  <th>
                    Net Borrowing APR{' '}
                    <span
                      className="hovertext ml-2"
                      data-hover={Messages.NET_BORROWING_APR}
                    >
                      <Image
                        width={12}
                        height={12}
                        src="/images/icons/question-circle.svg"
                        alt="Question mark"
                      />
                    </span>
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Collateral</p>
                    <h5>
                      <span>
                        <img src="/images/icons/main-icon.svg" alt="" />
                      </span>
                      BNB
                    </h5>
                  </td>
                  <td>
                    <p>Amount</p>0 BNB
                  </td>
                  <td>
                    <p>Borrowing Utilization</p>
                    0% <span className="bar" />
                  </td>
                  <td>
                    <p>Borrowed</p>0 MPX
                  </td>
                  <td>
                    <p>Net Borrowing APR</p>
                    -2%
                  </td>
                  <td>
                    <p>Actions</p>
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

export default Home;
