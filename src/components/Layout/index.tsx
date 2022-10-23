import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu, togglePopup } from '../../redux/navigation/slice';
import { isWalletInstalled } from '../../utils/wallet';
import { MetamaskNotFound } from '../dialogs/MetamaskNotFound';
import Footer from '../Footer';
import Header from '../Header';
import PopupOuter from './PopupOuter';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  const isWalletPresent = isWalletInstalled();

  const handleOutsideClick = () => {
    dispatch(togglePopup({ value: false }));
    dispatch(toggleMenu({ value: false }));
  };

  return (
    <>
      <Header />
      <main className="main" onClick={handleOutsideClick}>
        <MetamaskNotFound isWalletInstalled={isWalletPresent} />
        {children}
        <Footer />
        <PopupOuter />
      </main>
    </>
  );
};

export default Layout;
