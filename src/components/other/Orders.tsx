/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import OrderItem from './OrderItem';
import { orders } from '../../base/Moduls';

export default function Orders() {
  const [checked, setChecked] = useState(false);
  const [table, setTable] = useState(true);
  return (
    <div className="table gen">
      {table ? (
        <table>
          <thead>
            <tr>
              <th className="check">
                <div className="table__check">
                  <input
                    type="checkbox"
                    onChange={() => {
                      setChecked(!checked);
                    }}
                  />
                  <label htmlFor="none" />
                </div>
              </th>
              <th>Type</th>
              <th>Order</th>
              <th>Price</th>
              <th>Mark Price</th>
              <th />
              <tr />
            </tr>
          </thead>
          <tbody>
            {orders.map((item, index) => {
              return (
                <OrderItem
                  {...item}
                  key={index}
                  checkedState={checked}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th className="check">
                  <div className="table__check">
                    <input
                      type="checkbox"
                      onChange={() => {
                        setChecked(!checked);
                      }}
                    />
                    <label htmlFor="none" />
                  </div>
                </th>
                <th>Type</th>
                <th>Order</th>
                <th>Price</th>
                <th>Mark Price</th>
                <th />
                <tr />
              </tr>
            </thead>
          </table>
          <div className="table__placeholder">
            <p className="xsm">No Orders found</p>
          </div>
        </>
      )}
    </div>
  );
}
