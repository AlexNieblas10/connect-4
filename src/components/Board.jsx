import { board } from "../utils/board";
import { selectBackground } from "../utils/selectBackground";
import { viewBoard } from "../utils/viewBoard";
import "../board.css";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { mainWinner } from "../utils/winner/mainWinner";

export const Board = () => {
  const { player, setPlayer, setModal } = useContext(MainContext);

  const handleClickPlace = (value) => {
    if (value.team === null) {
      let position = viewBoard(value.place, player);
      if (mainWinner(position)) {
        setModal(true);
      } else player === 1 ? setPlayer(2) : setPlayer(1);
    } 
  };
  
  return (
    <main className="main_container">
      <h1>Welcome to connect 4</h1>
      <h2 style={{ color: player === 1 ? "red" : "rgb(186, 186, 0)" }}>
        Player turn: {player}
      </h2>
      <section className="board">
        {board.map((place) => (
          <div
            className="place"
            key={place.place}
            style={{ backgroundColor: selectBackground(place) }}
            onClick={() => {
              handleClickPlace(place);
            }}
          ></div>
        ))}
      </section>
    </main>
  );
};
