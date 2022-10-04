import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu, togglePopup } from '../../redux/navigation/slice';
import Footer from '../Footer';
import Header from '../Header';
import PopupOuter from './PopupOuter';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const menu = document.getElementById('menu');
  const popup = document.getElementById('popUp');
  const popupOuter = document.getElementById('popupOuter');

  const handleOutsideClick = () => {
    dispatch(togglePopup({ value: false }));
    dispatch(toggleMenu({ value: false }));
  };

  return (
    <>
      <Header />
      <main className="main" onClick={handleOutsideClick}>
        {children}
        <Footer />
        <PopupOuter />
      </main>
    </>
  );
};

export default Layout;
