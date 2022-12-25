import Modal from './Modal';

export default function LqdrEntry({ closeFunc }: { closeFunc: () => void }) {
  return (
    <Modal title="Queue all transactions to earn rewards" closeFunc={closeFunc}>
      <div className="modal__items">
        <div className="modalItem modalItem--list">
          <h6 className="xsm">Step 1:</h6>
          <p className="xsm">
            Contracts approved (verify that all approvals were successful before
            continuing)
          </p>
        </div>
        <button type="button" className="button bordered sm">
          Queue batch transactions
        </button>
        <div className="modalItem modalItem--list">
          <h6 className="xsm">Step 2:</h6>
          <p className="xsm">
            Select total LQDR amount to use & mind mLQDR proportionally
          </p>
        </div>
        <button type="button" className="button bordered sm">
          Queue batch transactions
        </button>
        <div className="modalItem modalItem--list">
          <h6 className="xsm">Step 3:</h6>
          <p className="xsm">Join mLQDR - LQDR LP</p>
        </div>
        <button type="button" className="button bordered sm">
          Queue batch transactions
        </button>
        <div className="modalItem modalItem--list">
          <h6 className="xsm">Step 4:</h6>
          <p className="xsm">Stake LP for rewards</p>
        </div>
        <button type="button" className="button bordered sm">
          Queue batch transactions
        </button>
      </div>
      <div className="quote">
        The LQDR amount you input is the total you wish to use for joining the
        LP. This will mint mLQDR and use the remaining LQDR of the LQDR amount
        inputted to proportionally join the mLQDR-LQDR LP, and stake for
        rewards.
      </div>
    </Modal>
  );
}
