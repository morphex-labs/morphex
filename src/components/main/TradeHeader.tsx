import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ChooseCurrencyLongShort from '../../base/modals/currency/ChooseCurrencyLongShort';
import { selectAllCurrencies } from '../../redux/currency-selector/selectors';

const TradeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    longShortCurrency: { symbol },
  } = useSelector(selectAllCurrencies);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tradeMain__header">
      <div
        role="presentation"
        className="button primary"
        onClick={handleOpenModal}
      >
        {symbol} / USD
      </div>
      <div className="tradeMain__header-info">
        <h6 className="xsm">Price</h6>
        <p className="xsm">$1,630.70</p>
        <p className="xsm">$1,630.70</p>
      </div>
      <div className="tradeMain__header-info">
        <h6 className="xsm">24H Change</h6>
        <p className="xsm">-0.88%</p>
      </div>
      <div className="tradeMain__header-info">
        <h6 className="xsm">24H High</h6>
        <p className="xsm">1,666.90</p>
      </div>
      <div className="tradeMain__header-info">
        <h6 className="xsm">24H Low</h6>
        <p className="xsm">1,623.70</p>
      </div>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <ChooseCurrencyLongShort
            closeFunc={() => setIsOpen(false)}
            actionName="Global"
          />
        ) : (
          ''
        )}
      </AnimatePresence>
    </div>
  );
};

export default TradeHeader;
