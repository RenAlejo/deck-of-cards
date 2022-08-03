export const getDeck = async() => {
    
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
    const resp = await fetch( url );
    const { deck_id, remaining } = await resp.json();

    return {
        deck_id     : deck_id,
        remaining   : remaining
    };

}