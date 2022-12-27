import { book, discord, med, telegram, twitter } from './SVG';

const socialItem = [
  {
    id: 'twitter',
    link: 'https://twitter.com/MorpheusSwap',
    icon: twitter,
  },
  {
    id: 'telegram',
    link: 'https://t.me/MorpheusSwapFinance',
    icon: telegram,
  },
  {
    id: 'discord',
    link: 'https://discord.com/invite/TR7zzfT2ru',
    icon: discord,
  },
  {
    id: 'med',
    link: 'https://medium.com/@morpheusswap',
    icon: med,
  },
  {
    id: 'book',
    link: 'https://morphex-docs.vercel.app/',
    icon: book,
  },
];
export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="social__row">
            {socialItem.map((item) => {
              return (
                <a
                  href={item.link}
                  className="social"
                  key={item.id}
                  target="_blank"
                  rel="noreferrer"
                >
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
