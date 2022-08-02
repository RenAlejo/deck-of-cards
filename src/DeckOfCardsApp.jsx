import Deck from "react-poker";
import { useEffect, useState } from "react";
import { getDeckId } from "./helpers/getDeckId";
import { Cards } from './components/Cards';
import { DealCards } from './components/DealCards';

// MUI
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const DeckOfCardsApp = () => {

    const [deckId, setDeckId ] = useState('');
    const [cards , setCards  ] = useState();

    useEffect( () => {
      getDeckId()
      .then( deck_id => setDeckId( deck_id ));
    }, []);
    

    const onAddCard = ( newCard ) => {
      (!cards || cards.length === 5) ? setCards([ newCard ]) : setCards([ newCard, ...cards])
    }

    return (
      <div className='main'>
        <div className='board'>
          { 
            deckId ?
            <>  
              <DealCards 
                onNewCard={onAddCard} 
                deckId   ={ deckId  } 
              /> 
              <Deck
                board       ={[]}
                boardXoffset={375}
                boardYoffset={200}
                size        ={200}
              />
              <Cards
                cards={cards}
              />
            </>
            :
            <Box sx={ { 
                display       :'flex', 
                alignItems    :'center', 
                justifyContent:'center', 
                marginTop     :'calc(100vh / 5)'
            }}>
              <CircularProgress />
            </Box>
          }
        </div> 
      </div>
    );
}
