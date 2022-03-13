import lightChip from '../assets/chip-light.svg';
import bitcoin from '../assets/vendor-bitcoin.svg';
import blockchain from '../assets/vendor-blockchain.svg';
import evil from '../assets/vendor-evil.svg';
import ninja from '../assets/vendor-ninja.svg';
import trash from '../assets/trash.svg';

export default function Card(props) {
  const {card, inCardStack, selectCard, selectedCard, index, removeCard} = props;

  var className = "card";

  function selectThisCard() {
    selectCard(card);
  }

  function deleteCard() {
    if (window.confirm("Are you sure you want to delete this card?")) {
      console.log("deleting card", card);
      removeCard(card);
    }
  }
  
  var cardMakeLogo = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
  if(card.cardMake !== undefined) {
    className += " " + card.cardMake;
    
    if(card.cardMake === "Bitcoin INC") {
      cardMakeLogo = bitcoin;
    }
    else if(card.cardMake === "Blockchain INC") {
      cardMakeLogo = blockchain;
    }
    else if(card.cardMake === "EVIL CORP") {
      cardMakeLogo = evil;
    }
    else if(card.cardMake === "Ninja Bank") {
      cardMakeLogo = ninja;
    }
  }
  
  if(selectedCard) {
    className += " selected";
  }

  if(card.cardNumber !== undefined) { // to add spaces in cardNumber
    if(!isNaN(card.cardNumber)){
      var newCardNumber = card.cardNumber;
      if(card.cardNumber.length >= 4) {
        var results = card.cardNumber.match(/\d{4}/g);
        //get the last digits, which are not included in results
        var trailingLength = card.cardNumber.length - results.length * 4;
        var lastDigits = card.cardNumber.substring(card.cardNumber.length - trailingLength);
        newCardNumber = results.join(" ");
        newCardNumber += " " + lastDigits;
      }
    }
  }

  return (
    <div>
      { inCardStack ? 
      <div className={className} onClick={selectThisCard} style={{top: (60 * index) + "px", zIndex: index, position: 'absolute', left: "50%", transform: "translateX(-50%)" }}>
        <img className='cardChip' src={lightChip} alt="Chip" />
        <img className='cardMake' src={cardMakeLogo} alt="Card Make" />
        <h2 className="cardNumber">{card.cardNumber ? newCardNumber : "**** **** **** ****"}</h2>
        <h4 className="cardNameLabel">CARDHOLDER NAME</h4>
        <h3 className="cardName">{card.cardName ? card.cardName : "Your Name"}</h3>
        <h4 className="cardExpiryLabel">VALID THRU</h4>
        <h3 className="cardExpiry">{card.cardExpiry ? card.cardExpiry : "MM/YY"}</h3>
        <img className='deleteCard' src={trash} alt="delete Card" onClick={deleteCard} />
      </div>
        : <div className={className}> 
        <img className='cardChip' src={lightChip} alt="Chip" />
        <img className='cardMake' src={cardMakeLogo} alt="Card Make" />
        <h2 className="cardNumber">{card.cardNumber? newCardNumber : "**** **** **** ****"}</h2>
        <h4 className="cardNameLabel">CARDHOLDER NAME</h4>
        <h3 className="cardName">{card.cardName ? card.cardName : "Your Name"}</h3>
        <h4 className="cardExpiryLabel">VALID THRU</h4>
        <h3 className="cardExpiry">{card.cardExpiry ? card.cardExpiry : "MM/YY"}</h3>
        <img className='deleteCard' src={trash} alt="delete Card" onClick={deleteCard} />
      </div>
      } 
    </div>  
  )
}