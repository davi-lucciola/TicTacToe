import Header from "../Header";
import TicTacToe from "../TicTacToe";
import Footer from "../Footer";
import { Modal } from "../Modal";
import { useContext } from "react";
import { TicTacToeContext } from "../../context/TicTacToeContext";

export const Game = () => {
  const { modalIsOpen, closeModal, currentPlayer } = useContext(TicTacToeContext);

  return (
    <>
      <Header />
      <TicTacToe />
      <Footer />
      <Modal winner={currentPlayer} isOpen={modalIsOpen} onClose={closeModal} />
    </>
  );
};
