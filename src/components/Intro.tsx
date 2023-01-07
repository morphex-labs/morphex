import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <div className="intro">
      <div className="auto__container">
        <div className="intro__inner">
          <div className="intro__title">
            <h1>Decentralized Perpetual Exchange</h1>
            <p>
              Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x
              leverage directly from your wallet
            </p>
          </div>
          <div className="intro__row">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 * 1 }}
              exit={{ opacity: 0, y: 20 }}
              className="introItem"
            >
              <h6>Total Trading Volume</h6>
              <div className="introInput">
                <input type="text" placeholder="$0.00" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 * 2 }}
              exit={{ opacity: 0, y: 20 }}
              className="introItem"
            >
              <h6>Open Interest</h6>
              <div className="introInput">
                <input type="text" placeholder="$0.00" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 * 3 }}
              exit={{ opacity: 0, y: 20 }}
              className="introItem"
            >
              <h6>Total Users</h6>
              <div className="introInput">
                <input type="text" placeholder="23721" />
              </div>
            </motion.div>
          </div>
          <div className="intro__btn">
            <Link href="/trade" legacyBehavior>
              <button type="button" className="button uniq">
                Launch Exchange
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
