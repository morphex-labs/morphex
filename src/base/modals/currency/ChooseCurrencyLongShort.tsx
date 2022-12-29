/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
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
    (state: RootState) => state.selectCurrency.longCurrency
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
              <button
                type="button"
                className="button secondary currencies-item"
                onClick={() =>
                  handleChangeCurrency(currency.symbol, currency.name)
                }
              >
                {currency.symbol} - {currency.name}
              </button>
            );
          })}
      </div>
    </Modal>
  );
}
