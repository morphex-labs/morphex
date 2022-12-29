/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal';
import { RootState } from '../../../redux/store';
import { payCurrencies } from '../../../constants';
import { setSwapCurrency } from '../../../redux/currency-selector/slice';

export default function ChooseCurrencyLongShort({
  closeFunc,
  actionName,
}: {
  closeFunc: () => void;
  actionName: string;
}) {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state: RootState) => state.selectCurrency.swapCurrency
  );

  const handleChangeCurrency = (symbol: string, name: string) => {
    closeFunc();
    setTimeout(() => {
      dispatch(setSwapCurrency({ name, symbol }));
    }, 200);
  };

  return (
    <Modal title={`Choose Currency - ${actionName}`} closeFunc={closeFunc}>
      <div className="currencies">
        {payCurrencies
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
