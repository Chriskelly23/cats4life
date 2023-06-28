import { useState } from 'react';
import Modal from 'react-modal';
import ChosenCats from 'chosenCats'
import '../App.css';

const Basket = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal(props) {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="shoppingBasket">
        <img src="./images/trolley.png" alt="trolley" className="trolley" onClick={openModal}></img>
        <Modal
          className="basketModal"
          closeTimeoutMS={3000}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel='Shopping Basket'
        >
          <div className="">
          <button className="close" onClick={closeModal}>X</button>
          <h2>Your chosen cats:</h2>

          {/* Need to create a selected cats component to be shown here */}
          <ChosenCats name={props.catsName} imgSrc={props.catImgSrc} price={catsPrice} />

          </div>
        </Modal>
    </div>
  );
}

export default Basket;
