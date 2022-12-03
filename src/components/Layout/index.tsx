import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import PopupOuter from './PopupOuter';
import { MetamaskNotFound } from '../dialogs/MetamaskNotFound';
import { isWalletInstalled } from '../../utils/wallet';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const isWalletPresent = isWalletInstalled();

  return (
    <>
      <Header />
      <main className="main">
        <MetamaskNotFound isWalletInstalled={isWalletPresent} />
        {children}
        <Footer />
        <PopupOuter />
      </main>
    </>
  );
};

export default Layout;
