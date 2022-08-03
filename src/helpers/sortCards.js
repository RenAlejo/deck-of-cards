
export const sortCards = async ( cards ) => {

    let cardsData = [];
    let sortedCards   = [];

    cards.map( cardList =>{
        cardList.map( ([card]) => {
            cardsData = [ card, ...cardsData]
            sortedCards = cardsData.sort((a,b) => {
                if ( a.code.toLowerCase() < b.code.toLowerCase()){
                    return -1;
                }
                if ( a.code.toLowerCase() > b.code.toLowerCase()){
                    return 1;
                }
                return 0;
            });
        });
    });

    return sortedCards;

}