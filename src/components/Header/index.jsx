import { useContext } from 'react';
import { TicTacToeContext } from '../../context/TicTacToeContext';
import { StyledHeader, StyledList, StyledListItem } from "./styles";


export default function Header() {
  const { resetGame, currentPlayer } = useContext(TicTacToeContext);
  
  return (
    <StyledHeader>
      <StyledList>
        <StyledListItem>
          <p className='cur-player'>
            Player: <span> {currentPlayer} </span>{" "}
          </p>
        </StyledListItem>
        <StyledListItem switch={true}>
          <p> Change Player </p>
          <input type="checkbox" name="" id="" />
        </StyledListItem>
        <StyledListItem>
          <p onClick={() => resetGame()}>Reset Game</p>
        </StyledListItem>
      </StyledList>
    </StyledHeader>
  );
}