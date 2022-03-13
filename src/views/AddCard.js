import {useState} from "react";
import Card from '../components/Card';
import CardForm from '../components/CardForm';
import Top from '../components/Top'

export default function AddCard(props) {
  const { addCard } = props;
  const [info, setInfo] = useState({});

 function updateInfo(newInfo){
    setInfo(newInfo);
  }

  return (
    <div className="addCard">
      <Top headline="Add a new Card" link />
      <Card card={info} />
      <CardForm addCard={addCard} updateInfo={updateInfo}/>
    </div>
  )
}