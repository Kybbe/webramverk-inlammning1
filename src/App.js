import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Home from './views/Home'
import AddCard from './views/AddCard'

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  function addCard(card) {
    let newCards = cards.concat(card); ;
    setCards(newCards);
    setSelectedCard(card); //set selected card to the card just added
  }

  function removeCard(card) {
    if(cards.length > 1) {
      let newCards = cards.filter(c => c.cardNumber !== card.cardNumber); //remove the card from the cards array
      setCards(newCards);
      setSelectedCard(newCards[0]);
    } else {
      setCards([]); //if there are no cards left, clear the cards array
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
    setSelectedCard(card); //set selected card to the card passed in
  }
  
  useEffect(() => {
    function loadFromLocalStorage() { //load cards from local storage
      let cardsFromStorage = JSON.parse(localStorage.getItem('cards')); //get cards from local storage
      console.log("loading from local storage", cardsFromStorage);

      if(cardsFromStorage !== null && cardsFromStorage.length > 0) { //if there are cards in local storage
        setCards(cardsFromStorage);
        setSelectedCard(cardsFromStorage[0]);
      }
    }

    loadFromLocalStorage();
  }, []) //only run once

  useEffect(() => {
    function saveToLocalStorage() { //save cards to local storage
      console.log("saving to local storage", cards);

      localStorage.setItem('cards', JSON.stringify(cards));
    }

    saveToLocalStorage();
  }, [cards]); //run everytime cards changes

  return (
    <div className="App">
      <Routes>
        <Route path='*' element={ <Home cards={cards} selectedCard={selectedCard} selectCard={selectCard} removeCard={removeCard} /> } />
        <Route path='/add' element={ <AddCard cards={cards} addCard={addCard}/> } />
      </Routes>
    </div>
  );
}

export default App;
