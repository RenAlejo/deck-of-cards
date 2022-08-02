import { getCards } from "./../helpers/getCards";
import { useEffect, useState } from "react";


export const DealCards = ({ onNewCard, deckId }) => {

    const [cardName, setCardName ] = useState('');
  
    useEffect( () => {
        getCards(deckId)
      .then( card => 
        console.log('card: ', card)
        );
    }, []);

    const onDealCard = () => {
        onNewCard(cardName);
    }

    return (
        <button onClick={ onDealCard } className='btn__deal-cards'>Deal</button>
    )
}


// const [ inputValue , setInputValue ] = useState('');

// const onInputChange = ({ target }) => {
//     setInputValue(target.value);
// };

// const onSubmit = ( event ) => {

//     event.preventDefault();

//     if(inputValue.trim().length <= 1 ) return;

//     // setCategories( categories => [ inputValue, ...categories ])
//     setInputValue('');
//     onNewCategory( inputValue.trim() );
// }

// return (
//     <form onSubmit={ onSubmit } >
//         <input 
//             type='text'
//             value={ inputValue }
//             placeholder='Buscar gifs'
//             onChange= { onInputChange }
//         />
//     </form>
// );