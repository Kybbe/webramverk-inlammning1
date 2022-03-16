import {useNavigate} from 'react-router-dom';
import {useRef} from 'react';

export default function CardForm(props) {
  const { addCard, cards, updateInfo } = props;

  const navigate = useNavigate();
  const numberEl = useRef(null);
  const nameEl = useRef(null);
  const expiryEl = useRef(null);
  const cvvEl = useRef(null);
  const makeEl = useRef(null);

  function addingCard() {
    let card = {
      cardNumber: numberEl.current.value,
      cardName: nameEl.current.value,
      cardExpiry: expiryEl.current.value,
      cardCvv: cvvEl.current.value,
      cardMake: makeEl.current.value
    };

    if(isNaN(card.cardNumber)) {
      alert("Card number must be a number");
      return;
    }

    if(isNaN(card.cardCvv)) {
      alert("CVV must be a number");
      return;
    }
   
    // if any input is empty, don't add the card
    if (card.cardNumber === "" || card.cardName === "" || card.cardExpiry === "" || card.cardCvv === "" || card.cardMake === "") {
      alert("Please fill out all fields");
      return;
    }

    //if card.cardNumber matches any card in cards, don't add the card
    for (let c of cards) {
      if (card.cardNumber === c.cardNumber) {
        alert("Card already exists, please try again");
        return;
      }
    }

    addCard(card);
    alert("Card added!");
    navigate("/");
    //window.location.href = "/";
  }

  function updatePreviewCard() {
    let card = {
      cardNumber: numberEl.current.value,
      cardName: nameEl.current.value,
      cardExpiry: expiryEl.current.value,
      cardCvv: cvvEl.current.value,
      cardMake: makeEl.current.value
    };

    updateInfo(card);
  }

  return (
    <div className="cardForm">
      <h4>CARD NUMBER</h4>
      <input type="text" ref={numberEl} id="cardNumber" autoFocus maxLength="16" placeholder="**** **** **** ****" onChange={updatePreviewCard} />
      <h4>CARDHOLDER NAME</h4>
      <input type="text" ref={nameEl} id="cardName" maxLength="25" placeholder="Your name" onChange={updatePreviewCard} />
      
      <div className="halfInputsLabels"> 
        <h4>VALID THRU</h4>
        <h4>CVV</h4>
      </div>
      
      <div className="halfInputs">
        <input type="text" ref={expiryEl} id="cardExpiry" maxLength="5" placeholder="MM/YY" onKeyUp={updatePreviewCard} />
        <input type="text" ref={cvvEl} id="cardCvv" maxLength="3" placeholder="***" onChange={updatePreviewCard} />
      </div>

      <h4>VENDOR</h4>
      <select ref={makeEl} id="cardMake" onChange={updatePreviewCard} >
        <option value="">Pick a bank</option>
        <option value="Bitcoin INC">Bitcoin INC</option>
        <option value="Ninja Bank">Ninja Bank</option>
        <option value="Blockchain INC">Blockchain INC</option>
        <option value="EVIL CORP">EVIL CORP</option>
      </select>

      <button onClick={addingCard}>Add Card</button>

    </div>
  )
}