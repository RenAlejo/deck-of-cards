import { getCards } from "./../helpers/getCards";
import Button from '@mui/material/Button';


export const DealCards = ({ onNewCard, deckId }) => {
    
    const onDealCard = () => {
        getCards(deckId).then( card => onNewCard(card));
    }

    return (
        <Button className="btn deal" onClick={ onDealCard } variant="contained" color="success">
            Deal
        </Button>
    );
}
