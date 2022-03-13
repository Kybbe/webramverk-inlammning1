export default function CardForm(props) {
  const { addCard, updateInfo } = props;

  function addingCard() {
    const card = {
      cardNumber: document.getElementById("cardNumber").value,
      cardName: document.getElementById("cardName").value,
      cardExpiry: document.getElementById("cardExpiry").value,
      cardCvv: document.getElementById("cardCvv").value,
      cardMake: document.getElementById("cardMake").value
    };

    //go through each key and if it is empty, add red border around corresponding html element
    for (let key in card) {
      if (card[key] === "") {
        document.getElementById(key).style.border = "1px solid red";
      }
    }
    
    // if any key is empty, don't add the card
    if (card.cardNumber === "" || card.cardName === "" || card.cardExpiry === "" || card.cardCvv === "" || card.cardMake === "") {
      alert("Please fill out all fields");
      return;
    }

    addCard(card);
    alert("Card added!");
    window.location.href = "/";
  }

  function updatePreviewCard() {
    const card = {
      cardNumber: document.getElementById("cardNumber").value,
      cardName: document.getElementById("cardName").value,
      cardExpiry: document.getElementById("cardExpiry").value,
      cardCvv: document.getElementById("cardCvv").value,
      cardMake: document.getElementById("cardMake").value
    };

    for (let key in card) {
      document.getElementById(key).style.border = "1px solid black";
    }

    updateInfo(card);
  }

  return (
    <div className="cardForm">
      <h4>CARD NUMBER</h4>
      <input type="text" id="cardNumber" maxLength="16" placeholder="**** **** **** ****" onChange={updatePreviewCard} />
      <h4>CARDHOLDER NAME</h4>
      <input type="text" id="cardName" maxLength="25" placeholder="Your name" onChange={updatePreviewCard} />
      
      <div className="halfInputsLabels"> 
        <h4>VALID THRU</h4>
        <h4>CVV</h4>
      </div>
      
      <div className="halfInputs">
        <input type="text" id="cardExpiry" maxLength="5" placeholder="MM/YY" onChange={updatePreviewCard} />
        <input type="text" id="cardCvv" maxLength="3" placeholder="***" onChange={updatePreviewCard} />
      </div>

      <h4>VENDOR</h4>
      <select id="cardMake" onChange={updatePreviewCard} >
        <option value="Bitcoin INC">Bitcoin INC</option>
        <option value="Ninja Bank">Ninja Bank</option>
        <option value="Blockchain INC">Blockchain INC</option>
        <option value="EVIL CORP">EVIL CORP</option>
      </select>

      <button onClick={addingCard}>Add Card</button>

    </div>
  )
}