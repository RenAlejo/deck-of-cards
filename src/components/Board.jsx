import Deck from "react-poker";
import { useEffect, useState } from "react";
import { getDeckId } from "./../helpers/getDeckId";

export const Board = () => {

  const [deckId, setDeckId ] = useState('');
  
  useEffect( () => {
    getDeckId()
    .then( deck_id => setDeckId( deck_id ));
  }, []);


  return (
    <div className='board'>
      <Deck
          board={['Jc', "Qs", "As", "2h" ,"3h"]} // array of cards to render on board
          boardXoffset={375} // X axis pixel offset for dealing board
          boardYoffset={200} // Y axis pixel offset for dealing board
          size={200} // card height in pixels
      />
    </div>
  );
};
