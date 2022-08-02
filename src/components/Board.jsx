import Deck from "react-poker";

export const Board = () => {
  return (
    <Deck
        board={['Jc', "Qs", "As"]} // array of cards to render on board
        boardXoffset={375} // X axis pixel offset for dealing board
        boardYoffset={200} // Y axis pixel offset for dealing board
        size={200} // card height in pixels
    />
  );
};
