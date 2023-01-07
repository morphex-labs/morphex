/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal';
import { RootState } from '../../../redux/store';
import { longShortCurrencies } from '../../../constants';
import { setLongShortCurrency } from '../../../redux/currency-selector/slice';

export default function ChooseCurrencyLongShort({
  closeFunc,
  actionName,
}: {
  closeFunc: () => void;
  actionName: string;
}) {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state: RootState) => state.selectCurrency.longShortCurrency
  );

  const handleChangeCurrency = (symbol: string, name: string) => {
    closeFunc();
    setTimeout(() => {
      dispatch(setLongShortCurrency({ name, symbol }));
    }, 200);
  };

  return (
    <Modal title={`Choose Currency - ${actionName}`} closeFunc={closeFunc}>
      <div className="currencies">
        {longShortCurrencies
          .filter((v) => v.symbol !== selectedCurrency.symbol)
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
