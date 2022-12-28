import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: '1',
    title: 'Save on Costs',
    icon: '/images/icons/Wallet.svg',
    text: 'An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.',
    activeRange: [0, 400],
  },
  {
    id: '2',
    title: 'Simple Swaps',
    icon: '/images/icons/Star.svg',
    text: 'An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.',
    activeRange: [400, 600],
  },
  {
    id: '3',
    title: 'Reduce Liquidation Risks',
    icon: '/images/icons/Shield.svg',
    text: 'An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.',
    activeRange: [600, 1000],
  },
];

export default function Features() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div className="feature">
      <div className="auto__container">
        <div className="feature__inner">
          {features.map((item, index) => {
            let isActive = false;
            if (offset >= item.activeRange[0] && offset < item.activeRange[1]) {
              isActive = true;
            }
            return (
              <motion.div
                initial={{ x: -40 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.4 * index }}
                exit={{ x: -40 }}
                className={`featureItem__outer ${
                  isActive ? 'activeScroll' : ''
                }`}
                key={item.id}
                id="feature-item-id"
              >
                <div className="featureItem__circ" />
                <div className="featureItem">
                  <div className="featureItem__icon">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <div className="featureItem__content">
                    <h6>{item.title}</h6>
                    <p>{item.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
