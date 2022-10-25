import React from 'react';
import { isWalletInstalled } from '../../utils/wallet';
import { MetamaskNotFound } from '../dialogs/MetamaskNotFound';
import Footer from '../Footer';
import Header from '../Header';
import PopupOuter from './PopupOuter';

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
