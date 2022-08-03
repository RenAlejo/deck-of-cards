import { useEffect, useState } from "react";
import Deck from "react-poker";
import { Cards, DealCards, Remaining, QueenSuitCards } from './components';
import { getDeck } from "./helpers/getDeck";

// MUI
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const queenCardCodes = ['QH','QC','QS','QD']

export const DeckOfCardsApp = () => {

    const [deckId, setDeckId ] = useState('');
    const [cards , setCards  ] = useState();
    const [remainingCards, setRemainingCards ] = useState(0);
    const [round, setRound  ]  = useState(1)
    const [queenSuitCards, setQueenSuit ] = useState();

    useEffect( () => {
      getDeck()
      .then( ({deck_id, remaining}) => {
        setDeckId( deck_id )
        setRemainingCards( remaining )
      });
    }, [ round ]);
    

    const onAddCard = ( newCard ) => {

      const { card, remaining } = newCard;

      if(cards && cards.length === 5) {
        cards.forEach( c => {
          if(queenCardCodes.includes(c[0].code)){
            setQueenSuit([ cards ]);
          }
        });
      }

      (!cards || cards.length === 5) ? setCards([ card ]) : setCards([ card, ...cards])

      if(remaining === 0 ) {
        setCards();
        setQueenSuit();
        setRound(round + 1 );
      }

      setRemainingCards(remaining);
    }

    return (
      <div className='main'>
        <Remaining
          remainingCards = {remainingCards}
        />
        <div className='board'>
          { 
            deckId ?
            <> 
            

              <DealCards 
                onNewCard={onAddCard} 
                deckId   ={ deckId  }
                remaining={remainingCards} 
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

              <QueenSuitCards
                cards = {queenSuitCards}
              />

            </>
            :
            <Box sx=
            { 
              { 
                  display       :'flex', 
                  alignItems    :'center', 
                  justifyContent:'center', 
                  marginTop     :'calc(100vh / 5)'
              }
            }>
              <CircularProgress />
            </Box>
          }
        </div> 
      </div>
    );
}
