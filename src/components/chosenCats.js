import { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

const ChosenCats = (props) => {
    const [cats, setCats] = useState([]);

    return (
        <div className = "chosenCats">
            <p>Name: {props.name}</p>
            <img src={props.imgSrc} alt={props.name}></img>
            <p>Donation: {props.price}</p>
        </div>
    )
}

export default ChosenCats;