import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/selectors';
import Modal from './Modal';

interface BtnProps {
  setStep: Dispatch<SetStateAction<boolean>>;
}

const QueueBatchTrxBtn: React.FC<BtnProps> = ({ setStep }) => {
  const queueBatchTrx = () => {
    // execute function, on success set step true
    const success = true;
    if (success) {
      setStep(true);
    } else {
      setStep(false);
    }
  };

  return (
    <button
      type="button"
      className="button bordered sm"
      onClick={queueBatchTrx}
    >
      Queue batch transactions
    </button>
  );
};

export default function LqdrEntry({ closeFunc }: { closeFunc: () => void }) {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    if (theme === 'light') {
      setTextColor('#fff');
    } else {
      setTextColor('');
    }
  }, [theme]);

  const first = true;
  const [textColor, setTextColor] = useState('');
  const [second, setSecond] = useState<boolean>(false);
  const [third, setThird] = useState<boolean>(false);
  const [fourth, setFourth] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  return (
    <Modal title="Queue all transactions to earn rewards" closeFunc={closeFunc}>
      <div className="modal__items">
        <div
          className="modalItem modalItem--list"
          style={{ backgroundColor: '#0029ff', color: textColor }}
        >
          <h6 className="xsm" style={{ color: textColor }}>
            Step 1:
          </h6>
          <p className="xsm" style={{ color: textColor }}>
            Contracts approved (verify that all approvals were successful before
            continuing)
          </p>
        </div>
        {first && !second && <QueueBatchTrxBtn setStep={setSecond} />}
        <div
          className="modalItem modalItem--list"
          style={second ? { backgroundColor: '#0029ff' } : {}}
        >
          <h6 className="xsm" style={second ? { color: textColor } : {}}>
            Step 2:
          </h6>
          <p className="xsm" style={second ? { color: textColor } : {}}>
            Select total LQDR amount to use & mind mLQDR proportionally
          </p>
        </div>
        {second && !third && <QueueBatchTrxBtn setStep={setThird} />}
        <div
          className="modalItem modalItem--list"
          style={third ? { backgroundColor: '#0029ff' } : {}}
        >
          <h6 className="xsm" style={third ? { color: textColor } : {}}>
            Step 3:
          </h6>
          <p className="xsm" style={third ? { color: textColor } : {}}>
            Join mLQDR - LQDR LP
          </p>
        </div>
        {third && !fourth && <QueueBatchTrxBtn setStep={setFourth} />}

        <div
          className="modalItem modalItem--list"
          style={fourth ? { backgroundColor: '#0029ff' } : {}}
        >
          <h6 className="xsm" style={fourth ? { color: textColor } : {}}>
            Step 4:
          </h6>
          <p className="xsm" style={fourth ? { color: textColor } : {}}>
            Stake LP for rewards
          </p>
        </div>
        {fourth && <QueueBatchTrxBtn setStep={setCompleted} />}
      </div>
      {completed && <span className="rewards">Rewards earned!</span>}
      <div className="quote">
        The LQDR amount you input is the total you wish to use for joining the
        LP. This will mint mLQDR and use the remaining LQDR of the LQDR amount
        inputted to proportionally join the mLQDR-LQDR LP, and stake for
        rewards.
      </div>
    </Modal>
  );
}
