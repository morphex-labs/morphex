import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import RangeSlider from '../../../base/RangeSlider';
import GenericBtn from '../../buttons/GenericBtn';
import PayInput from '../CurrencyInputs/PayInput';
import LongShortInput from '../CurrencyInputs/LongShortInput';
import PriceInput from '../CurrencyInputs/PriceInputs';
import ConfirmLong from '../../../base/modals/ConfirmLong';
import ConfirmLimit from '../../../base/modals/ConfirmLimit';
import { selectOrderDisclaimer } from '../../../redux/orders-disclaimer/selectors';
import EnableOrders from '../../../base/modals/EnableOrders';

export const longInfo = [
  {
    id: '1',
    title: 'Collateral In',
    other: 'USD',
  },
  {
    id: '2',
    title: 'Leverage',
    other: '0.00',
  },
  {
    id: '3',
    title: 'Entry Price',
    other: '0.00',
  },
  {
    id: '4',
    title: 'Liquidity Price',
    other: '0.00',
  },
  {
    id: '5',
    title: 'Fees',
    other: '0.00',
  },
];

export default function Long() {
  const [type, setType] = useState<string>('market');
  const [coin1, setCoin1] = useState<string>('');
  const [coin2, setCoin2] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [leverageValue, setLeverageValue] = useState<string>('2');
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false);
  const [isConfirmLimitOpen, setIsConfirmLimitOpen] = useState<boolean>(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState<boolean>(false);

  const isOrderDisclaimerShown = useSelector(selectOrderDisclaimer);

  const handleConfirmOpen = () => {
    if (type === 'limit' && !isOrderDisclaimerShown) {
      setIsDisclaimerOpen(!isDisclaimerOpen);
      return;
    }

    type === 'market'
      ? setIsConfirmOpen(!isConfirmOpen)
      : setIsConfirmLimitOpen(!isConfirmLimitOpen);
  };

  useEffect(() => {
    if (leverageValue === '0') setLeverageValue('2');
    else if (leverageValue === '1') setLeverageValue('2');
  }, [leverageValue]);

  return (
    <div className="trade">
      <div className="trade__type">
        <div
          role="presentation"
          onClick={() => setType('market')}
          className={`trade__type-btn ${type === 'market' ? 'active' : ''}`}
        >
          Market
        </div>
        <div
          role="presentation"
          onClick={() => setType('limit')}
          className={`trade__type-btn ${type === 'limit' ? 'active' : ''}`}
        >
          Limit
        </div>
      </div>
      <div className="trade__inputs">
        <PayInput value={coin1} setValue={setCoin1} leverage="" label="Pay" />
        <div className="spaceDelimeter" />
        <LongShortInput
          value={coin2}
          setValue={setCoin2}
          label="Long"
          leverage={leverageValue}
        />
        <div className="spaceDelimeter" />
        <PriceInput value={price} setValue={setPrice} label="Price" />
      </div>
      <RangeSlider
        min="0"
        max="30"
        value="0"
        title="title"
        type1="type1"
        onChange={(e) => {
          setLeverageValue(e.target.value);
        }}
      />
      <div className="trade__items">
        {longInfo.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 * index }}
              exit={{ opacity: 0, x: -20 }}
              className="tradeItem"
              key={item.id}
            >
              <h6 className="xsm">{item.title}</h6>
              <p className="xsm">{item.other}</p>
            </motion.div>
          );
        })}
      </div>
      {type === 'market' && (
        <AnimatePresence exitBeforeEnter>
          {isConfirmOpen ? (
            <ConfirmLong
              closeFunc={() => setIsConfirmOpen(false)}
              leverage={leverageValue}
              price={price}
              pay={coin1}
              long={coin2}
              type={type}
            />
          ) : (
            ''
          )}
        </AnimatePresence>
      )}{' '}
      {type === 'limit' && isOrderDisclaimerShown && (
        <AnimatePresence exitBeforeEnter>
          {isConfirmLimitOpen ? (
            <ConfirmLimit
              closeFunc={() => setIsConfirmLimitOpen(false)}
              leverage={leverageValue}
              price={price}
              pay={coin1}
              label={coin2}
              type={type}
              actionName="Long"
            />
          ) : (
            ''
          )}
        </AnimatePresence>
      )}
      {type === 'limit' && !isOrderDisclaimerShown && (
        <AnimatePresence exitBeforeEnter>
          {isDisclaimerOpen ? (
            <EnableOrders closeFunc={() => setIsDisclaimerOpen(false)} />
          ) : (
            ''
          )}
        </AnimatePresence>
      )}
      <GenericBtn
        btnTextMain="Confirm"
        classNamesMain="button primary sm"
        classNamesConnect="button primary sm"
        onClickFunc={handleConfirmOpen}
      />
    </div>
  );
}
