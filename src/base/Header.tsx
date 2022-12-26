import Link from 'next/link';
import { ConnectKitButton } from 'connectkit';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

import { dots, logo, setting, themeIcon } from './SVG';
import {
  toggleMenu,
  toggleMoreTab,
  toggleSettings,
} from '../redux/navigation/slice';
import {
  selectMenuOpen,
  selectMoreTab,
  selectSettings,
} from '../redux/navigation/selectors';
import { toggleTheme } from '../redux/theme/slice';
import { selectTheme } from '../redux/theme/selectors';

export default function Header() {
  const [checked, setChecked] = useState<boolean>(false);

  const { pathname } = useRouter();
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);
  const menuOpen = useSelector(selectMenuOpen);
  const settingsOpen = useSelector(selectSettings);
  const moreTabOpen = useSelector(selectMoreTab);

  const switchCheck = useRef<null | HTMLInputElement>(null);
  const wrapper = useRef<null | HTMLDivElement>(null);
  const navDrop = useRef<null | HTMLDivElement>(null);

  // const navColor = theme === 'light' ? '#ffffff' : '#2d2d2d';

  // menu function start
  const close = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(toggleMenu({ value: false }));
    }
  };
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [menuOpen]);
  // menu function end

  useEffect(() => {
    dispatch(toggleMenu({ value: false }));
    document.body.classList.remove('active');
  }, [dispatch, pathname]);

  // setting function start
  const toggleOpenSettings = () => {
    dispatch(toggleSettings({ value: !settingsOpen }));
  };

  const toggleMore = () => {
    dispatch(toggleMoreTab({ value: !moreTabOpen }));
  };

  useEffect(() => {
    const windowClick = ({ target }: Event) => {
      if (!navDrop.current?.contains(target as Node)) {
        dispatch(toggleMoreTab({ value: false }));
      }
    };
    if (moreTabOpen) window.addEventListener('click', windowClick);
    else window.removeEventListener('click', windowClick);
    return () => window.removeEventListener('click', windowClick);
  }, [dispatch, moreTabOpen]);

  useEffect(() => {
    const windowClick = ({ target }: Event) => {
      if (!wrapper.current?.contains(target as Node)) {
        dispatch(toggleSettings({ value: false }));
      }
    };
    if (settingsOpen) window.addEventListener('click', windowClick);
    else window.removeEventListener('click', windowClick);
    return () => window.removeEventListener('click', windowClick);
  }, [dispatch, settingsOpen]);
  // setting function end

  // theme function start
  useEffect(() => {
    if (switchCheck.current) {
      document.documentElement.setAttribute('data-theme', theme);
      setChecked(!theme || theme === 'dark');
    }
  }, [switchCheck, theme]);

  const switchTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(toggleTheme({ value: 'dark' }));
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      dispatch(toggleTheme({ value: 'light' }));
      document.documentElement.setAttribute('data-theme', 'light');
    }
    setChecked(e.target.checked);
  };
  // theme function end

  return (
    <header className="header">
      <div className="auto__container">
        <div className="header__inner">
          <Link href="/" passHref>
            <a className="header__inner-logo">{logo}</a>
          </Link>
          <div
            role="presentation"
            className={`nav ${menuOpen ? 'active' : ''}`}
            onClick={close}
          >
            <div className="nav__inner">
              <div className="nav__inner-links">
                <Link href="/overview" passHref>
                  <a
                    className={`nav__inner-link ${
                      pathname === '/overview' ? 'active' : ''
                    }`}
                  >
                    Overview
                  </a>
                </Link>
                <Link href="/trade" passHref>
                  <a
                    className={`nav__inner-link ${
                      pathname === '/trade' ? 'active' : ''
                    }`}
                  >
                    Trade
                  </a>
                </Link>
                <Link href="/liquidity" passHref>
                  <a
                    className={`nav__inner-link ${
                      pathname === '/liquidity' ? 'active' : ''
                    }`}
                  >
                    Liquidity
                  </a>
                </Link>
                <Link href="/earn" passHref>
                  <a
                    className={`nav__inner-link ${
                      pathname === '/earn' ? 'active' : ''
                    }`}
                  >
                    Earn
                  </a>
                </Link>
                <Link href="/mlqdr" passHref>
                  <a
                    className={`nav__inner-link ${
                      pathname === '/mqldr' ? 'active' : ''
                    }`}
                  >
                    mLQDR
                  </a>
                </Link>
                <Link href="/referrals" passHref>
                  <a
                    className={`nav__inner-link ${
                      pathname === '/referrals' ? 'active' : ''
                    }`}
                  >
                    Referrals
                  </a>
                </Link>
                <div className="nav__inner-drop" ref={navDrop}>
                  <button
                    type="button"
                    className="nav__inner-link"
                    onClick={toggleMore}
                  >
                    More
                  </button>
                  <AnimatePresence exitBeforeEnter>
                    {moreTabOpen ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="nav__inner-drop-content">
                          <button
                            type="button"
                            className="nav__inner-link btnMore"
                            onClick={toggleMore}
                          >
                            More
                          </button>
                          <a
                            href="https://morphex-docs.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="nav__inner-link"
                          >
                            Docs
                          </a>
                          <Link href="/" passHref>
                            <a className="nav__inner-link">Proof of Reserves</a>
                          </Link>
                        </div>
                      </motion.div>
                    ) : (
                      ''
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div className="switch">
                <input
                  type="checkbox"
                  ref={switchCheck}
                  checked={checked}
                  onChange={switchTheme}
                />
                <label htmlFor="none">{themeIcon}</label>
              </div>
            </div>
          </div>

          <div className="header__inner-row">
            <div className="wallet">
              {/* Using ConnectKit wallet button */}
              <ConnectKitButton
                customTheme={{
                  '--ck-font-family': 'Rubik, sans-serif',
                  '--ck-connectbutton-color':
                    theme === 'dark' ? '#e5e7eb' : '#B1B1B1',
                  '--ck-connectbutton-font-size': '13px',
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
                // showBalance
                // showAvatar={false}
              />
            </div>
            <div className="sett" ref={wrapper}>
              <div
                role="presentation"
                className="sett__btn"
                onClick={toggleOpenSettings}
              >
                {setting}
              </div>
              <AnimatePresence exitBeforeEnter>
                {settingsOpen ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, skewX: -30 }}
                    animate={{ opacity: 1, scale: 1, skewX: 0 }}
                    transition={{ duration: 0.4 }}
                    exit={{ opacity: 0, scale: 0, skewX: -30 }}
                  >
                    <div className="sett__drop">
                      <h6>Settings</h6>
                      <div className="settInput">
                        <label htmlFor="none">Allowed Slippage</label>
                        <div className="input">
                          <input type="text" placeholder="0.0" />
                          <div className="input__btns">
                            <div className="input__coin">%</div>
                          </div>
                        </div>
                      </div>
                      <div className="settCheck">
                        <input type="checkbox" />
                        <label htmlFor="none"> Display PnL after fees</label>
                      </div>
                      <div className="settCheck">
                        <input type="checkbox" />
                        <label htmlFor="none">
                          {' '}
                          Include PnL in leverage display
                        </label>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  ''
                )}
              </AnimatePresence>
            </div>
            <div
              role="presentation"
              className="dots"
              onClick={() => {
                dispatch(toggleMenu({ value: !menuOpen }));
              }}
            >
              {dots}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
