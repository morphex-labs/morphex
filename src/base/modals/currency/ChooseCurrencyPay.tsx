/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { payCurrencies } from '../../../constants';
import { setPayCurrency } from '../../../redux/currency-selector/slice';
import { RootState } from '../../../redux/store';
import Modal from '../Modal';

export default function ChooseCurrencyPay({
  closeFunc,
}: {
  closeFunc: () => void;
}) {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state: RootState) => state.selectCurrency.payCurrency
  );

  const handleChangeCurrency = (symbol: string, name: string) => {
    closeFunc();
    setTimeout(() => {
      dispatch(setPayCurrency({ name, symbol }));
    }, 200);
  };

  return (
    <Modal title="Choose Currency - Pay" closeFunc={closeFunc}>
      <div className="currencies">
        {payCurrencies
          .filter((v) => v.symbol !== selectedCurrency.symbol)
          .map((currency) => {
            return (
              <div
                key={currency.id}
                role="presentation"
                className="currencies-item"
                onClick={() =>
                  handleChangeCurrency(currency.symbol, currency.name)
                }
              >
                <Image
                  alt={currency.name}
                  src={currency.image}
                  width={20}
                  height={20}
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
