import { useEffect, useState } from "react";
import { getDeckId } from "./helpers/getDeckId";
import { Board } from "./components/Board";
import Deck from "react-poker";

export const DeckOfCardsApp = () => {
  
  // const [deckId, setDeckId ] = useState('');
  
  // useEffect( () => {
  //   getDeckId()
  //   .then( deck_id => setDeckId( deck_id ));
  // }, []);

  return (
    <div className='main'>
      <Board/>
    </div>
  )
}
