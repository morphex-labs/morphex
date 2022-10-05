const Welcome = () => {
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
                    <a href="#welcome" className="button uniq">
                      Welcome
                    </a>
                  </div>
                </div>
                <div className="introItem">
                  <div className="introItem__inner">
                    <p className="big">
                      Please connect your wallet to continue
                    </p>
                  </div>
                </div>
              </div>
              <div className="introItem">
                <div className="introItem__inner">
                  <a href="#connect-wallet" className="button">
                    Connect Wallet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;