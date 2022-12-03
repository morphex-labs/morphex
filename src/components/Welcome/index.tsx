import { ConnectKitButton } from 'connectkit';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';

const Welcome = () => {
  const theme = useSelector(selectTheme);

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
                    <div className="button uniq">Welcome</div>
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
                      '--ck-font-family': 'Rubik, sans-serif',
                      '--ck-connectbutton-color':
                        theme === 'dark' ? '#e5e7eb' : 'white',
                      '--ck-connectbutton-font-size': '15px',
                      '--ck-connectbutton-background':
                        theme === 'dark' ? '#334155' : '#0c00ff',
                      '--ck-connectbutton-hover-color':
                        theme === 'dark' ? '#e5e7eb' : '#453cfc',
                      '--ck-connectbutton-hover-background':
                        theme === 'dark' ? '#475569' : '',
                      '--ck-connectbutton-active-color':
                        theme === 'dark' ? '#e5e7eb' : '#453cfc',
                      '--ck-connectbutton-active-background':
                        theme === 'dark' ? '#475569' : '',
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
