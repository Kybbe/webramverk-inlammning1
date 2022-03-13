import Top from '../components/Top'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import CardStack from '../components/CardStack';

export default function Home(props) {
  const {cards, selectedCard, selectCard, removeCard} = props;

  let cardsWithoutSelected = cards.filter(card => card.id !== selectedCard.id);

  return (
    <div className="Home">
      <Top headline="E-WALLET"/>
      <Card card={selectedCard} selectedCard removeCard={removeCard} />
      <CardStack cards={cardsWithoutSelected} selectCard={selectCard} />

      <div className='buttonContainer'>
        <Link to='/add'>Add a new card</Link>
      </div>
    </div>
  )
}