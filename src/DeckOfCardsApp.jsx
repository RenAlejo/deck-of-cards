import { DealCards } from './components/DealCards';
import Deck from "react-poker";
import { useEffect, useState } from "react";
import { getDeckId } from "./helpers/getDeckId";

// MUI
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export const DeckOfCardsApp = () => {

  const [cards , setCards  ] = useState(['']);
  const [deckId, setDeckId ] = useState('');


  useEffect( () => {
    getDeckId()
    .then( deck_id => setDeckId( deck_id ));
  }, []);
  


  console.log(deckId);

  const onAddCard = ( newCard ) => {

    console.log('newCard: ', newCard);

    setCards([ newCard, ...cards] );
  }

  return (
    <div className='main'>
      <div className='board'>
        { 
          deckId ?
            <>
              <Deck
                board={cards}
                boardXoffset={375}
                boardYoffset={200}
                size={200}
              />

              <DealCards 
                onNewCard={onAddCard} 
                deckId={deckId} 
              />
            </>
          :
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'calc(100vh / 5)'}}>
              <CircularProgress />
            </Box>
        }
      </div> 
    </div>
  )
}
