import { useState } from 'react';
import Modal from 'react-modal';
import Trolley from "./images/0-navbar/shoppingcart.png";
import '../App.css';

const Basket = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [total, setTotal] = useState("");
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  function catPrice() {
      let num = Math.floor(Math.random()*25000);
      let newNum = num/100;
      let catPrice = newNum.toFixed(2);
      return catPrice
  }

  return (
    <div className="shoppingBasket">
        <img src={Trolley} alt="trolley" className="trolley" onClick={openModal}></img>
        <Modal
          className="basketModal"
          closeTimeoutMS={3000}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel='Shopping Basket'
        >
          
          <div className="basket">
          <button className="close" onClick={closeModal}>X</button>
          <h2>Your chosen cats:</h2>
          {props.selectedCats.map(
            (cat, i) => {
              return (
                <div className="catsInBasket">
                <h3>{i}. {cat.catName}</h3>
                <img src={cat.catImgSrc} alt={cat.catName}></img>
                <h3>{cat.catBreed}</h3>
                <p>catPrice()</p>
                {setTotal({total} += catPrice)}
                </div>
              )
            }
          )}
          <h3 className="total">{total}</h3>
          </div>
        </Modal>
    </div>
  );
}

export default Basket;
