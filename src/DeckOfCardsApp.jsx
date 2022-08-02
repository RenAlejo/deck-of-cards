import { useEffect, useState } from "react";
import { getDeck } from "./helpers/getDeck";
import { Board } from "./components/Board";
import Deck from "react-poker";

export const DeckOfCardsApp = () => {
  
  // const [deckId, setDeckId ] = useState('');
  
  // useEffect( () => {
  //   getDeck()
  //   .then( deck_id => setDeckId( deck_id ));
  // }, []);

  return (
    <>
      <Board/>
    </>
  )
}
