import styled from "styled-components";
import { useContext } from "react";
import { TicTacToeContext } from "../../context/TicTacToeContext";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${props => props.player == null ? "pointer" : "default"};

  color: ${(props) => (props.player == "X" ? "red" : "blue")};
  font-family: cursive;
  font-size: 120px;

  width: 200px;
  height: 200px;

  background-color: lightgray;
  border-radius: 20px;
  transition: 0.3s;

  &:hover {
    background-color: gray;
  }
`;

const StyledSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    width: 700px;
    height: 700px;
    gap: 30px;
`

export default function Game() {
  const {game, changeGameValue} = useContext(TicTacToeContext);
  return (
    <StyledSection id="jogo-da-velha">
      {game.map((row, rowIndex) => {
        return row.map((gameProp, columnIndex) => {
          return (
            <StyledDiv key={`${rowIndex}-${columnIndex}`} onClick={changeGameValue} player={gameProp}>
                {gameProp != null ? gameProp : ""}
            </StyledDiv>
          );
      })})}
    </StyledSection>
  );
}
