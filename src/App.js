import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Home from './views/Home'
import AddCard from './views/AddCard'

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  function addCard(card) {
    card.id = cards.length + 1;
    let newCards = cards.concat(card); ;
    setCards(newCards);
  }

  function removeCard(card) {
    console.log(cards.length)
    if(cards.length > 1) {
      let newCards = cards.filter(c => c.id !== card.id);
      setCards(newCards);
      setSelectedCard(newCards[0]);
    } else {
      setCards([]);
      setSelectedCard({});
    }
  }

  /* function editCard(card) {
    let newCards = cards.map(c => {//map returns a new array
      if (c.cardNumber === card.cardNumber) { //if the card number is the same as the card number passed in
        return card; //put in the card passed in instead of the old card
      }
      return c; //otherwise return the old card, making no change
    });
    setCards(newCards);
  } */

  function selectCard(card) {
    setSelectedCard(card);
  }
  
  useEffect(() => {
    function loadFromLocalStorage() {
      let cardsFromStorage = JSON.parse(localStorage.getItem('cards'));
      console.log("loading from local storage", cardsFromStorage);

      if(cardsFromStorage !== null && cardsFromStorage.length > 0) {
        setCards(cardsFromStorage);
        setSelectedCard(cardsFromStorage[0]);
      }
    }

    loadFromLocalStorage();
  }, [])

  useEffect(() => {
    function saveToLocalStorage() {
      console.log("saving to local storage", cards);

      localStorage.setItem('cards', JSON.stringify(cards));
    }

    saveToLocalStorage();
  }, [cards]);

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={ <Home cards={cards} selectedCard={selectedCard} selectCard={selectCard} removeCard={removeCard} /> } />
        <Route path='/add' element={ <AddCard addCard={addCard}/> } />
      </Routes>
    </div>
  );
}

export default App;
