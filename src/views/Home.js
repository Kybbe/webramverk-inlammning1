import Top from '../components/Top'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import CardStack from '../components/CardStack';

export default function Home(props) {
  const {cards, selectedCard, selectCard, removeCard} = props;

  // Show only the not-selected cards
  let cardsWithoutSelected = cards.filter(card => card.cardNumber !== selectedCard.cardNumber);

  return (
    <div className="Home">
      <Top headline="E-WALLET"/>

      {/*Only the selected card, indicated to Card.js via selectedCard which is true */}
      <Card card={selectedCard} selectedCard removeCard={removeCard} /> 

      {/*The rest of the cards, with selectCard (which is only applied to cards in cardStack) */}
      <CardStack cards={cardsWithoutSelected} selectCard={selectCard} />

      <div className='buttonContainer'>
        <Link to='/add'>Add a new card</Link>
      </div>
    </div>
  )
}