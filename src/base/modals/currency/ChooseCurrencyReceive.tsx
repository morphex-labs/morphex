/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal';
import { RootState } from '../../../redux/store';
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
              <button
                key={currency.id}
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
