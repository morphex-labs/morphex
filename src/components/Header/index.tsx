/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectKitButton } from 'connectkit';

import {
  selectMenuOpen,
  selectWalletOpen,
} from '../../redux/navigation/selectors';
import NavLinks from './NavLinks';
import { toggleMenu, togglePopup } from '../../redux/navigation/slice';

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const openWallet = useSelector(selectWalletOpen);
  const openMenu = useSelector(selectMenuOpen);

  const handleMenuClick = () => {
    dispatch(toggleMenu({ value: true }));
    if (openWallet) {
      dispatch(togglePopup({ value: false }));
    }
  };

  // const handleWalletClick = () => dispatch(togglePopup({ value: !openWallet }));
  const handleMenuClose = () => dispatch(toggleMenu({ value: false }));

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
            onClick={handleMenuClose}
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

            {/* <Link href="#">
              <div
                role="none"
                className="button user"
                id="popupBtn"
                onClick={handleWalletClick}
              >
                <span>
                  <img src="/images/icons/metamask.svg" alt="" />
                </span>
                <p>0xC6c...B77D</p>
              </div>
            </Link> */}
          </div>

          {/* Wallet popup (old):
           <div className={`popup ${openWallet ? 'active' : ''}`} id="popUp">
            <h4>Wallet</h4>
            <div className="input">
              <input type="text" placeholder="0xC6c...B77D" />
              <button type="button" className="input__button">
                <img src="/images/icons/copy.svg" alt="" />
              </button>
              <button type="button" className="input__button">
                <img src="/images/icons/share.svg" alt="" />
              </button>
            </div>
            <div className="popup__row">
              <h5>
                <span>
                  <img src="/images/icons/icon-logo.svg" alt="" />
                </span>
                MRX
              </h5>
              <p>0</p>
            </div>
            <button type="button" className="button">
              Disconnect
            </button>
          </div> */}
          <div
            role="none"
            className="burger"
            id="menuBtn"
            onClick={handleMenuClick}
          >
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
