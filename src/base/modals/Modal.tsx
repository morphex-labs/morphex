import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';

export interface ModalProps {
  closeFunc: () => void;
  children: React.ReactNode;
  title: string;
}

export default function Modal({ closeFunc, children, title }: ModalProps) {
  const [eventSent, setEventSent] = useState(false);

  const close = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeFunc) closeFunc();
  };

  useEffect(() => {
    let eventHandled = false;
    const listener = () => {
      eventHandled = true;
      closeFunc();
    };
    document.body.classList.add('active');

    if (eventSent) {
      window.addEventListener('modalOpen', listener);
    }
    return () => {
      if (eventHandled) document.body.classList.add('active');
      else {
        document.body.classList.remove('active');
      }
      if (eventSent) window.removeEventListener('modalOpen', listener);
    };
  }, [closeFunc, eventSent]);

  useEffect(() => {
    setEventSent(true);
    window.dispatchEvent(new CustomEvent('modalOpen', {}));
  }, []);

  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
      onClick={close}
      className="modal"
    >
      <div className="modal__inner">
        <div className="modal__inner-title">
          <h6 className="xsm">{title}</h6>
        </div>
        <div className="modal__inner-body">{children}</div>
      </div>
    </motion.div>,
    document.getElementById('modals') as HTMLElement
  );
}
