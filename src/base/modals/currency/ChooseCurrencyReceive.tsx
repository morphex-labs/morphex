/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal';
import { payCurrencies } from '../../../constants';
import { setSwapCurrency } from '../../../redux/currency-selector/slice';
import { selectAllCurrencies } from '../../../redux/currency-selector/selectors';

export default function ChooseCurrencyReceive({
  closeFunc,
  actionName,
}: {
  closeFunc: () => void;
  actionName: string;
}) {
  const dispatch = useDispatch();
  const {
    swapCurrency: { symbol: swapSymbol },
    payCurrency: { symbol: paySymbol },
  } = useSelector(selectAllCurrencies);

  const handleChangeCurrency = (symbol: string, name: string) => {
    closeFunc();
    setTimeout(() => {
      dispatch(setSwapCurrency({ name, symbol }));
    }, 200);
  };
  // TODO: if pay currency is the same as receive currency, change them
  return (
    <Modal title={`Choose Currency - ${actionName}`} closeFunc={closeFunc}>
      <div className="currencies">
        {payCurrencies
          .filter((v) => v.symbol !== swapSymbol && v.symbol !== paySymbol)
          .map((currency) => {
            return (
              <div
                key={currency.id}
                role="presentation"
                className="button secondary currencies-item"
                onClick={() =>
                  handleChangeCurrency(currency.symbol, currency.name)
                }
              >
                <Image
                  alt={currency.name}
                  src={currency.image}
                  width={18}
                  height={18}
                />
                <span>
                  {currency.name} ({currency.symbol})
                </span>
              </div>
            );
          })}
      </div>
    </Modal>
  );
}
