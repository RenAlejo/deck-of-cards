import { getCards } from "./../helpers/getCards";
import Button from '@mui/material/Button';


export const DealCards = ({ onNewCard, deckId, remaining}) => {
    
    const onDealCard = () => {
        getCards(deckId).then( newCard => onNewCard(newCard));
    }

    return (
        <Button className="btn deal" onClick={ onDealCard } variant="contained" color="success">
            { remaining === 0 ? "Play Again" : "Deal" }
        </Button>
    );
}
