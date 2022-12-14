export const getCards = async( deck_id ) => {
    
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`;
    const resp = await fetch( url );
    const { cards, remaining } = await resp.json();

    return {
        card       : cards,
        remaining   : remaining
    };
    
}