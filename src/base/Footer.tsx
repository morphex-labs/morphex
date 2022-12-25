import React from 'react';
import { book, discord, med, telegram, twitter } from './SVG';

const socialItem = [
  {
    id: 'twitter',
    link: 'google.com',
    icon: twitter,
  },
  {
    id: 'telegram',
    link: 'google.com',
    icon: telegram,
  },
  {
    id: 'discord',
    link: 'google.com',
    icon: discord,
  },
  {
    id: 'med',
    link: 'google.com',
    icon: med,
  },
  {
    id: 'book',
    link: 'google.com',
    icon: book,
  },
];
export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="social__row">
            {socialItem.map((item, index) => {
              return (
                <a href={item.link} className="social" key={item.id}>
                  {item.icon}
                </a>
              );
            })}
          </div>
          <p className="xsm">© 2022 Morphex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
