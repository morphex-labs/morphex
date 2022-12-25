import Modal from './Modal';

export default function EdtiOrder({ closeFunc }: { closeFunc: () => void }) {
  return (
    <Modal title="Edit order" closeFunc={closeFunc}>
      <div className="input__outer">
        <label htmlFor="price-id1">
          <span id="price-id1">Price</span> <span>Mark: 0.00</span>
        </label>
        <div className="input">
          <input type="number" placeholder="0.00" />
          <div className="input__btns">
            <div className="input__coin">USD</div>
          </div>
        </div>
      </div>
      <div className="modal__items">
        <div className="modalItem">
          <h6 className="xsm">Price</h6>
          <p className="xsm">{'<'}0,00.00</p>
        </div>
      </div>

      <div className="modal__btn">
        <button type="button" className="button primary sm">
          Enter new Price
        </button>
      </div>
    </Modal>
  );
}
