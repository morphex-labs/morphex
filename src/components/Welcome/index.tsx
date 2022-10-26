import { ConnectKitButton } from 'connectkit';

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
                  <ConnectKitButton
                    customTheme={{
                      '--ck-connectbutton-background': '#0c00ff',
                      '--ck-connectbutton-color': 'white',
                      '--ck-connectbutton-hover-color': '#453cfc',
                      '--ck-font-family': 'Rubik, sans-serif',
                    }}
                  />
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
