import type { NextPage } from 'next';
import Image from 'next/image';
import Welcome from '../components/Welcome';
import { Messages } from '../constants';
// import toast from 'react-hot-toast';
// import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const isWalletConnected = true;
  // const { data, isLoading } = trpc.useQuery(['some.query-here']);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  if (!isWalletConnected) {
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
                    <svg>
                      <g>
                        <path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
                        <path d="M3.94125 4.3395C3.94023 4.36372 3.94416 4.3879 3.95283 4.41054C3.96149 4.43318 3.97469 4.45381 3.99162 4.47116C4.00855 4.48851 4.02885 4.50222 4.05127 4.51143C4.07369 4.52065 4.09776 4.52518 4.122 4.52475H4.74075C4.84425 4.52475 4.92675 4.44 4.94025 4.33725C5.00775 3.84525 5.34525 3.48675 5.94675 3.48675C6.46125 3.48675 6.93225 3.744 6.93225 4.36275C6.93225 4.839 6.65175 5.058 6.2085 5.391C5.70375 5.75775 5.304 6.186 5.3325 6.88125L5.33475 7.044C5.33554 7.09321 5.35564 7.14013 5.39072 7.17465C5.4258 7.20916 5.47304 7.22851 5.52225 7.2285H6.1305C6.18023 7.2285 6.22792 7.20875 6.26309 7.17358C6.29825 7.13842 6.318 7.09073 6.318 7.041V6.96225C6.318 6.42375 6.52275 6.267 7.0755 5.84775C7.53225 5.5005 8.0085 5.115 8.0085 4.30575C8.0085 3.1725 7.0515 2.625 6.00375 2.625C5.0535 2.625 4.0125 3.0675 3.94125 4.3395ZM5.109 8.66175C5.109 9.0615 5.42775 9.357 5.8665 9.357C6.32325 9.357 6.6375 9.0615 6.6375 8.66175C6.6375 8.24775 6.3225 7.95675 5.86575 7.95675C5.42775 7.95675 5.109 8.24775 5.109 8.66175Z" />
                      </g>
                    </svg>
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
