import { useEffect, useState } from "react"
import { sortCards } from "../helpers/sortCards";

export const QueenSuitCards = ( { cards } ) => {

  const [sortedCards, setSortedCards] = useState();

  useEffect(() => {

    if(cards){
        sortCards(cards).then(sorted => {
          setSortedCards(
            (!sortedCards) ? [ sorted ] : [ sorted, ...sortedCards]
          );
        });
    }

    setSortedCards();

  }, [cards]);

  return (
    <>
      {
        sortedCards ?
          <div className='cards__container secondary'>
          {
            sortedCards.map( ( cardList ) => ( 
              <div key={Math.random()} className='suit container'> 
                {
                  cardList.map( card => (
                    <div className='card secondary container' key={card.code+Math.random()}>
                      <div className="front">
                          <img src={card.image} className="card secondary" alt=""/>  
                      </div>
                      <div className='back'>
                          <img src="cards/back.svg" className="card secondary" alt=""/>  
                      </div>
                  </div>
                  ))
                }
              </div>
            ))
          }
          </div>
        :
        <div></div>
      }
    </>
  );
}
