import { useContext } from "react";
import { TicTacToeContext } from "../../context/TicTacToeContext";
import { StyledHeader } from "./styles";

export default function Header() {
  const { currentPlayer } = useContext(TicTacToeContext);

  return (
    <StyledHeader player={currentPlayer}>
      <h1>
        Jogo da Velha
      </h1>
      <h2>
        Player: <span> {currentPlayer} </span>{" "}
      </h2>
    </StyledHeader>
  );
}
