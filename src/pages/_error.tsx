/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { NextPageContext } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';

interface ErrorProps {
  statusCode: number;
  err: Error;
}

function ErrorPage({ statusCode, err }: ErrorProps) {
  const router = useRouter();

  const handleRouteChange = () => {
    router.push('/');
  };

  return (
    <div className="auto__container">
      <div className="error__wrapper">
        <div className="error__container">
          <h2 className="error__container-status">{statusCode}</h2>
          <p className="error__container-header">Oops! Something went wrong!</p>

          <div className="resources">
            <div className="resources__box">
              <div className="resources__box-item">
                <h3>Documentation</h3>
                <p>If you have questions please read our documentation</p>
              </div>
            </div>
            <div className="resources__box">
              <div className="resources__box-item">
                <h3>Twitter</h3>
                <p>Follow us on Twitter to stay updated!</p>
              </div>
            </div>
            <div className="resources__box">
              <div className="resources__box-item">
                <h3>Discord</h3>
                <p>
                  Join our community on Discord and be a part of something
                  bigger!
                </p>
              </div>
            </div>
            <div className="resources__box">
              <div className="resources__box-item">
                <h3>Learn</h3>
              </div>
            </div>
          </div>
          {/* <span className="error__container-text">{err}</span> */}
          <button
            type="button"
            className="button secondary error__container-btn"
            onClick={handleRouteChange}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, err };
};

export default ErrorPage;
