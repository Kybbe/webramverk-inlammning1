import Card from './Card';

export default function CardStack(props) {
  const {cards, selectCard} = props;

  const cardStack = cards.map((card, index) => {
    return (
      <Card key={index} card={card} index={index} inCardStack selectCard={selectCard} />
    )
  });

  return (
    <div className="cardStack" style={ cards.length ? {height: (250 + ((cards.length -1) * 60)) + "px"} : {} }>
      {cardStack}
    </div>
  )
}