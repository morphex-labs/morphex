/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectKitButton } from 'connectkit';

import NavLinks from './NavLinks';
import { DarkModeSwitch } from '../Switch';
import { toggleMenu } from '../../redux/navigation/slice';
import { selectMenuOpen } from '../../redux/navigation/selectors';
import { selectTheme } from '../../redux/theme/selectors';

const Header = () => {
  const dispatch = useDispatch();
  const openMenu = useSelector(selectMenuOpen);
  const theme = useSelector(selectTheme);

  const handleMenuToggle = () => dispatch(toggleMenu({ value: !openMenu }));

  return (
    <header className="header" id="header">
      <div className="auto__container">
        <div className="header__inner">
          <Link href="/">
            <a className="header__inner-logo">
              <img src="/images/logo.svg" alt="Morphex Logo" />
            </a>
          </Link>
          <nav
            className={`nav ${openMenu ? 'active' : ''}`}
            id="menu"
            onClick={handleMenuToggle}
          >
            <NavLinks />
          </nav>
          <DarkModeSwitch />
          <div className="header__inner-user">
            <div className="header__inner-user-icon">
              <img src="/images/icons/icon-logo.svg" alt="" />
            </div>
            <p>$0.00</p>

            {/* Using ConnectKit wallet button */}
            <ConnectKitButton
              customTheme={{
                '--ck-font-family': 'Rubik, sans-serif',
                '--ck-connectbutton-color':
                  theme === 'dark' ? '#e5e7eb' : '#B1B1B1',
                '--ck-connectbutton-font-size': '15px',
                '--ck-connectbutton-background':
                  theme === 'dark' ? '#334155' : '',
                '--ck-connectbutton-hover-color':
                  theme === 'dark' ? '#e5e7eb' : '#B1B1B1',
                '--ck-connectbutton-hover-background':
                  theme === 'dark' ? '#475569' : '',
                '--ck-connectbutton-active-color':
                  theme === 'dark' ? '#e5e7eb' : '#B1B1B1',
                '--ck-connectbutton-active-background':
                  theme === 'dark' ? '#475569' : '',
              }}
            />
          </div>
          <div
            role="none"
            className="burger"
            id="menuBtn"
            onClick={handleMenuToggle}
          >
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
