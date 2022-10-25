/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectKitButton } from 'connectkit';

import { selectMenuOpen } from '../../redux/navigation/selectors';
import NavLinks from './NavLinks';
import { toggleMenu } from '../../redux/navigation/slice';

const Header = () => {
  const dispatch = useDispatch();
  const openMenu = useSelector(selectMenuOpen);

  const handleMenuToggle = () => dispatch(toggleMenu({ value: !openMenu }));

  return (
    <header className="header" id="header">
      <div className="auto__container">
        <div className="header__inner">
          <Link href="/">
            <a className="header__inner-logo">
              <img src="/images/logo.svg" alt="" />
            </a>
          </Link>
          <nav
            className={`nav ${openMenu ? 'active' : ''}`}
            id="menu"
            onClick={handleMenuToggle}
          >
            <NavLinks />
          </nav>
          <div className="header__inner-user">
            <div className="header__inner-user-icon">
              <img src="/images/icons/icon-logo.svg" alt="" />
            </div>
            <p>$0.00</p>

            {/* Using ConnectKit wallet button */}
            <ConnectKitButton />
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
