import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { ConnectKitProvider } from 'connectkit';

import Footer from '../base/Footer';
import Header from '../base/Header';
import { selectTheme } from '../redux/theme/selectors';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const theme = useSelector(selectTheme);

  return (
    <ConnectKitProvider
      // customTheme={{
      //   '--ck-body-background': theme === 'dark' ? '#334155' : '',
      //   '--ck-secondary-button-background': theme === 'dark' ? '#0029ff' : '',
      // }}
      theme="auto"
      mode={theme === 'dark' ? 'dark' : 'light'}
      options={{
        embedGoogleFonts: true,
        disclaimer:
          'Morphex is a decentralized perpetual exchange. No representation or warranty is made concerning any aspect of the Morphex Protocol, including its suitability, quality, availability, accessibility, accuracy or safety. Your access to and use of the Morphex Protocol through this interface is entirely at your own risk and could lead to substantial losses. You take full responsibility for your use of the interface, and acknowledge that you use it on the basis of your own enquiry, without solicitation or inducement by Contributors.',
      }}
    >
      <div className={`wrapper ${router.pathname === '/' ? 'index' : ''}`}>
        <Header />
        {router.pathname !== '/' && <div className="bgPattern" />}
        <main className="main">
          {/* <MetamaskNotFound isWalletInstalled={isWalletPresent} /> */}
          {children}
        </main>
        <Footer />
      </div>
    </ConnectKitProvider>
  );
};

export default Layout;
