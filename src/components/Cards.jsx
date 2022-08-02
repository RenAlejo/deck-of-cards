import { useState , useEffect  } from 'react'

export const Cards = ( { cards } ) => {

    const [cardData,setCardData] = useState();

    useEffect( () => {
        setCardData( cards )
    }, [cards]);
    
    return (

        <div className='cards__container'>

            {  
            cardData ?
            <>
                {   
                cardData.map( ( [card] ) =>(
                    <div className='card' key={card.code+Math.random()}>
                        <div className="front">
                            <img src={card.image} className="card" alt=""/>  
                        </div>
                        <div className='back'>
                            <img src="cards/back.svg" className="card" alt=""/>  
                        </div>
                    </div>
                ))
                }
            </>
            :
            <></>
            }

        </div>
    );
}
