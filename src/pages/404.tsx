import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <section className="intro">
      <div className="auto__container">
        <div className="intro__inner">
          <a href="home.html" className="intro__inner-logo">
            <img src="/images/logo.svg" alt="" />
          </a>
          <div className="intro__inner-row">
            <div className="intro__inner-row-wrapper">
              <div className="introItem__wrapper">
                <div className="introItem">
                  <div className="introItem__inner">
                    <a href="#w" className="button uniq">
                      404
                    </a>
                  </div>
                </div>
                <div className="introItem">
                  <div className="introItem__inner">
                    <p className="big">
                      Uh oh.. We can&apos;t find the page you are looking for :(
                    </p>
                  </div>
                </div>
              </div>
              <div className="introItem">
                <div className="introItem__inner">
                  <Link href="/" passHref>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="button">Back to Home</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custom404;
