import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMenuOpen,
  selectWalletOpen,
} from '../../redux/navigation/selectors';
import { toggleMenu, togglePopup } from '../../redux/navigation/slice';

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const openWallet = useSelector(selectWalletOpen);
  const openMenu = useSelector(selectMenuOpen);

  // const { body } = document;
  // const menu = document.getElementById('menu');
  // const menuBtn = document.getElementById('menuBtn');
  // const popup = document.getElementById('popUp');
  // const popupOuter = document.getElementById('popupOuter');

  const handleMenuClick = () => {
    dispatch(toggleMenu({ value: true }));
    if (openWallet) {
      dispatch(togglePopup({ value: false }));
    }
  };

  const handleWalletClick = () => dispatch(togglePopup({ value: !openWallet }));
  const handleMenuClose = () => dispatch(toggleMenu({ value: false }));

  return (
    <header className="header" id="header">
      <div className="auto__container">
        <div className="header__inner">
          <a href="/" className="header__inner-logo">
            <img src="/images/logo.svg" alt="" />
          </a>
          <nav className={`nav ${openMenu ? 'active' : ''}`} id="menu">
            <div className="nav__inner">
              <div className="nav__inner-links">
                <Link href="home.html" className="active">
                  Home
                </Link>
                <Link href="liquidations.html">Liquidations</Link>
                <Link href="borrow.html">Borrow</Link>
                <Link href="staking.html">Staking</Link>
                <Link href="gauges.html">Gauges</Link>
                <Link href="mlqdr.html">mLQDR</Link>
                <Link href="#">Voting</Link>
                <p style={{ fontWeight: 'bold' }} onClick={handleMenuClose}>
                  CLOSE
                </p>
              </div>
              <div className="nav__inner-social">
                <Link href="#">
                  <svg
                    id="twitter"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.026 15C11.064 15 14.367 9.99696 14.367 5.66596C14.367 5.52596 14.367 5.38396 14.361 5.24396C15.0041 4.77845 15.5591 4.20211 16 3.54196C15.3993 3.80681 14.7628 3.98137 14.111 4.05996C14.7975 3.6496 15.3117 3.00393 15.558 2.24296C14.913 2.62508 14.207 2.89333 13.471 3.03596C12.9762 2.50898 12.3214 2.15988 11.6081 2.04272C10.8948 1.92556 10.1627 2.04688 9.52534 2.3879C8.88796 2.72891 8.38081 3.27059 8.08245 3.92902C7.78409 4.58745 7.71118 5.32589 7.875 6.02996C6.56974 5.96451 5.29282 5.62543 4.12704 5.0347C2.96127 4.44398 1.93268 3.6148 1.108 2.60096C0.68934 3.32404 0.561574 4.17936 0.750646 4.99323C0.939718 5.80709 1.43145 6.51849 2.126 6.98296C1.60554 6.96528 1.09652 6.82552 0.64 6.57496V6.61996C0.640897 7.37744 0.903307 8.11138 1.38287 8.69772C1.86244 9.28406 2.52975 9.68683 3.272 9.83796C2.99026 9.91558 2.69923 9.95427 2.407 9.95296C2.20098 9.95359 1.99538 9.9345 1.793 9.89596C2.00279 10.548 2.41127 11.1181 2.96125 11.5264C3.51122 11.9347 4.17513 12.1608 4.86 12.173C3.69656 13.0868 2.2594 13.5824 0.78 13.58C0.519321 13.5811 0.258823 13.566 0 13.535C1.50151 14.4922 3.2453 15.0005 5.026 15Z"
                      fill="#787878"
                    />
                  </svg>
                </Link>
                <Link href="#">
                  <svg
                    width="17"
                    height="14"
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9501 1.26916L14.3849 13.0996C14.1913 13.9346 13.6867 14.1424 12.9695 13.749L9.06099 10.9324L7.17505 12.7063C6.96634 12.9104 6.79179 13.0811 6.38956 13.0811L6.67036 9.1883L13.9143 2.78694C14.2293 2.51233 13.846 2.36018 13.4248 2.63479L4.46947 8.14924L0.614112 6.96916C-0.224504 6.71311 -0.239682 6.14905 0.788666 5.75569L15.8686 0.0742409C16.5668 -0.181814 17.1777 0.226389 16.9501 1.26916Z"
                      fill="#787878"
                    />
                  </svg>
                </Link>
                <Link href="#">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_76_356)">
                      <path
                        d="M13.545 2.90696C12.5075 2.43083 11.4127 2.091 10.288 1.89596C10.2778 1.89424 10.2673 1.89572 10.258 1.9002C10.2487 1.90468 10.241 1.91193 10.236 1.92096C10.095 2.17096 9.93899 2.49796 9.82999 2.75396C8.61759 2.56997 7.38438 2.56997 6.17199 2.75396C6.0504 2.46878 5.91285 2.19067 5.75999 1.92096C5.75486 1.91203 5.74714 1.90486 5.73786 1.9004C5.72858 1.89594 5.71816 1.89439 5.70799 1.89596C4.58299 2.08996 3.48799 2.42996 2.45099 2.90696C2.44211 2.91034 2.43469 2.91671 2.42999 2.92496C0.355986 6.02396 -0.213014 9.04696 0.0659858 12.032C0.0669858 12.046 0.0759858 12.06 0.0869858 12.069C1.29471 12.9636 2.64558 13.6466 4.08199 14.089C4.09213 14.0922 4.10302 14.092 4.1131 14.0886C4.12317 14.0852 4.13189 14.0787 4.13799 14.07C4.44599 13.65 4.71999 13.207 4.95599 12.741C4.9609 12.7314 4.96259 12.7204 4.96079 12.7098C4.95898 12.6992 4.95379 12.6894 4.94599 12.682C4.94082 12.6771 4.93469 12.6733 4.92799 12.671C4.49715 12.5054 4.07988 12.3064 3.67999 12.076C3.66882 12.0696 3.66051 12.0592 3.65679 12.047C3.65306 12.0347 3.65421 12.0214 3.65999 12.01C3.66339 12.0025 3.66853 11.996 3.67499 11.991C3.75899 11.928 3.84299 11.862 3.92299 11.796C3.93005 11.7903 3.93853 11.7866 3.94752 11.7854C3.9565 11.7842 3.96565 11.7854 3.97399 11.789C6.59299 12.985 9.42799 12.985 12.015 11.789C12.0236 11.7852 12.0331 11.7839 12.0425 11.7851C12.0518 11.7864 12.0606 11.7901 12.068 11.796C12.148 11.862 12.232 11.928 12.316 11.991C12.3228 11.9959 12.3283 12.0025 12.3319 12.0101C12.3355 12.0177 12.3372 12.0261 12.3368 12.0345C12.3364 12.043 12.334 12.0511 12.3296 12.0584C12.3253 12.0656 12.3192 12.0716 12.312 12.076C11.913 12.3086 11.4952 12.5072 11.063 12.67C11.0561 12.6725 11.0498 12.6764 11.0446 12.6816C11.0395 12.6868 11.0355 12.6931 11.033 12.7C11.0307 12.7066 11.0297 12.7137 11.0303 12.7208C11.0308 12.7278 11.0327 12.7347 11.036 12.741C11.276 13.206 11.551 13.65 11.853 14.07C11.8591 14.0787 11.8678 14.0852 11.8779 14.0886C11.8879 14.092 11.8988 14.0922 11.909 14.089C13.3478 13.648 14.7009 12.9649 15.91 12.069C15.916 12.0648 15.9211 12.0593 15.9247 12.0529C15.9283 12.0465 15.9305 12.0393 15.931 12.032C16.265 8.58096 15.372 5.58296 13.565 2.92596C13.5632 2.92157 13.5604 2.91761 13.557 2.91434C13.5536 2.91107 13.5495 2.90855 13.545 2.90696ZM5.34699 10.214C4.55799 10.214 3.90899 9.48996 3.90899 8.60196C3.90899 7.71296 4.54599 6.98896 5.34699 6.98896C6.15399 6.98896 6.79699 7.71896 6.78499 8.60196C6.78499 9.48996 6.14799 10.214 5.34699 10.214ZM10.663 10.214C9.87499 10.214 9.22499 9.48996 9.22499 8.60196C9.22499 7.71296 9.86199 6.98896 10.663 6.98896C11.47 6.98896 12.114 7.71896 12.101 8.60196C12.101 9.48996 11.47 10.214 10.663 10.214Z"
                        fill="#0029FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_76_356">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link href="#">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_76_358)">
                      <path
                        d="M11.8453 10.5C11.8453 13.7616 9.19406 16.4063 5.922 16.4063C5.14535 16.4073 4.37609 16.2553 3.65816 15.9591C2.94023 15.6628 2.28768 15.2281 1.73777 14.6796C1.18787 14.1312 0.751366 13.4798 0.453198 12.7626C0.15503 12.0455 0.00103347 11.2767 0 10.5C0 7.23713 2.65125 4.59376 5.922 4.59376C6.69876 4.59255 7.46816 4.74437 8.18624 5.04055C8.90432 5.33673 9.55703 5.77147 10.1071 6.31993C10.6571 6.86839 11.0937 7.51984 11.392 8.23706C11.6902 8.95429 11.8443 9.72324 11.8453 10.5ZM18.3422 10.5C18.3422 13.5713 17.0166 16.0598 15.3812 16.0598C13.7458 16.0598 12.4202 13.5699 12.4202 10.5C12.4202 7.42876 13.7458 4.94026 15.3812 4.94026C17.0166 4.94026 18.3422 7.43007 18.3422 10.5ZM21 10.5C21 13.251 20.5341 15.4809 19.9579 15.4809C19.383 15.4809 18.9171 13.2497 18.9171 10.5C18.9171 7.74901 19.383 5.51907 19.9592 5.51907C20.5341 5.51907 21 7.74901 21 10.5Z"
                        fill="#787878"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_76_358">
                        <rect width="21" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </nav>
          <div className="header__inner-user">
            <div className="header__inner-user-icon">
              <img src="/images/icons/main-icon.png" alt="" />
            </div>
            <p>$0.00</p>
            <Link href="#">
              <div
                role="none"
                className="button user"
                id="popupBtn"
                onClick={handleWalletClick}
              >
                <span>
                  <img src="/images/icons/avatar.svg" alt="" />
                </span>
                <p>0xC6c...B77D</p>
              </div>
            </Link>
          </div>
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
          </div>
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
