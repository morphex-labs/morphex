/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import EdtiOrder from '../../base/modals/EdtiOrder';

export interface OrderItemProps {
  id: string;
  type: string;
  order: string;
  price: string;
  markPr: string;
  checkedState: boolean;
  index: number;
}

export default function OrderItem({
  id,
  checkedState,
  index,
  type,
  order,
  price,
  markPr,
}: OrderItemProps) {
  const [checkedState2, setCheckedState2] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setCheckedState2(checkedState);
  }, [checkedState]);

  return (
    <>
      <motion.tr
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 * index }}
        exit={{ opacity: 0, y: 10 }}
      >
        <td className="check">
          <div className="table__check">
            <input
              type="checkbox"
              onChange={(e) => {
                setCheckedState2(e.target.checked);
              }}
              checked={checkedState2}
            />
            <label htmlFor="none" />
          </div>
          <div className="mobileTitle">{type}</div>
        </td>
        <td>
          <div className="mobileTitle">Type</div>
          {type}
        </td>
        <td>
          <div className="mobileTitle">Order</div>
          {order}
        </td>
        <td>
          <div className="mobileTitle">Price</div>
          {price}
        </td>
        <td>
          <div className="mobileTitle">Mark Price</div>
          {markPr}
        </td>
        <td className="tableBtn">
          <div
            role="presentation"
            className="button sm"
            onClick={() => setEdit(true)}
          >
            Edit
          </div>
        </td>
        <td className="tableBtn">
          <div className="button sm">Cancel</div>
        </td>
      </motion.tr>

      <AnimatePresence mode="wait">
        {edit ? <EdtiOrder closeFunc={() => setEdit(false)} /> : ''}
      </AnimatePresence>
    </>
  );
}
