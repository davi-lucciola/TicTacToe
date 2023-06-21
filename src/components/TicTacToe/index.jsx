import { useContext } from "react";
import { TicTacToeContext } from "../../context/TicTacToeContext";
import { StyledTicTacToe, StyledDiv, StyledSection } from "./styles";


export default function Game() {
  const { game, changeGameValue } = useContext(TicTacToeContext);

  return (
    <StyledTicTacToe>
      <StyledSection id="jogo-da-velha">
        {game.map((row, rowIndex) => {
          return row.map((gameProp, columnIndex) => {
            return (
              <StyledDiv
                key={`${rowIndex}-${columnIndex}`}
                onClick={() => changeGameValue(rowIndex, columnIndex)}
                player={gameProp}
              >
                {gameProp != null ? gameProp : ""}
              </StyledDiv>
            );
          });
        })}
      </StyledSection>
    </StyledTicTacToe>
  );
}
