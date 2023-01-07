import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { dots, edit } from '../../base/SVG';
import ClosePosition from '../../base/modals/ClosePosition';
import EditPosition from '../../base/modals/EditPostion';

export interface PositionItemProps {
  id: string;
  name: string;
  position: string;
  value: string;
  valuePercent: string;
  size: string;
  collateral: string;
  markPr: string;
  entryPR: string;
  liquidPr: string;
  index: number;
}

export default function PositionItem({
  collateral,
  entryPR,
  id,
  index,
  liquidPr,
  markPr,
  name,
  position,
  size,
  value,
  valuePercent,
}: PositionItemProps) {
  const wrapper = useRef<null | HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [closePosition, setClosePosition] = useState(false);
  const [editPosition, setEditPosition] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    const windowClick = ({ target }: any) => {
      if (!wrapper.current?.contains(target)) setActive(false);
    };

    if (active) window.addEventListener('click', windowClick);
    else window.removeEventListener('click', windowClick);

    return () => window.removeEventListener('click', windowClick);
  }, [active]);

  const clickListener = React.useCallback((e: any) => {
    const className = e.target.classList[0] as string;

    if (!className || !className.startsWith('account')) setActive(false);

    if (className === 'account__list-link') setActive(false);
  }, []);

  useEffect(() => {
    if (active) {
      setTimeout(() => document.addEventListener('click', clickListener), 100);
    } else {
      document.removeEventListener('click', clickListener);
    }
    return () => document.removeEventListener('click', clickListener);
  }, [active]);

  return (
    <>
      <tr>
        <td>
          <div className="mobileTitle">Positions</div>
          <div className="table__text">
            <h6 className="xsm">{name}</h6>
            <p className="xsm">{position}</p>
          </div>
        </td>
        <td>
          <div className="mobileTitle">Net Value</div>
          <div className="table__text">
            <h6 className="xsm">{value}</h6>
            <p className="xsm">{valuePercent}</p>
          </div>
        </td>
        <td>
          <div className="mobileTitle">Size</div>
          {size}
        </td>
        <td>
          <div className="mobileTitle">Collateral</div>
          {collateral}
        </td>
        <td>
          <div className="mobileTitle">Mark Price</div>
          {markPr}
        </td>
        <td>
          <div className="mobileTitle">Entry Price</div>
          {entryPR}
        </td>
        <td>
          <div className="mobileTitle">Liquidation Price</div>
          {liquidPr}
        </td>
        <td className="btn">
          <div className="table__row">
            <button
              type="button"
              className="button sm primary"
              onClick={() => setClosePosition(true)}
            >
              Close
            </button>
            <div className="tableDrop" ref={wrapper}>
              <div
                role="presentation"
                className="tableDrop__btn"
                onClick={toggleActive}
              >
                {dots}
              </div>
              <AnimatePresence mode="wait">
                {active ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="tableDrop__content"
                  >
                    <button
                      type="button"
                      className="tableDrop__content-btn"
                      onClick={() => setEditPosition(true)}
                    >
                      {edit} Edit Collateral
                    </button>
                  </motion.div>
                ) : (
                  ''
                )}
              </AnimatePresence>
            </div>
          </div>
        </td>
      </tr>
      <AnimatePresence mode="wait">
        {closePosition ? (
          <ClosePosition closeFunc={() => setClosePosition(false)} />
        ) : (
          ''
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {editPosition ? (
          <EditPosition closeFunc={() => setEditPosition(false)} />
        ) : (
          ''
        )}
      </AnimatePresence>
    </>
  );
}
