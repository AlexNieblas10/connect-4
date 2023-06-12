import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import "../modal.css";
import { board } from "../utils/board";

export const Modal = () => {
  const { player, setModal, setPlayer } = useContext(MainContext);
  function newGame() {
    setModal(false);
    board.forEach((place) => {
      place.team = null
    })
    setPlayer(1)
  }

  return (
    <section className="modal">
      <div className="container-data">
        <h1 className="winner">The winner has been player: {player}</h1>
        <button className="button-try-again" onClick={newGame}>
          New game
        </button>
      </div>
    </section>
  );
};
