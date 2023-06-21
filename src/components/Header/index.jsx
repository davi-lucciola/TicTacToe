import { useContext } from 'react';
import { TicTacToeContext } from '../../context/TicTacToeContext';
import { IconContainer } from '../IconContainer';
import { BiUser, BiLogOutCircle } from 'react-icons/bi'
import {
  StyledHeader,
  StyledList,
  StyledListItem,
} from "./styles";


export default function Header() {
  const { resetGame, currentPlayer } = useContext(TicTacToeContext);
  
  return (
    <StyledHeader>
      <StyledList>
        <StyledListItem player={currentPlayer}>
          <p>
            Player: <span> {currentPlayer} </span>{" "}
          </p>
        </StyledListItem>
        <StyledListItem player={currentPlayer}>
          <p onClick={() => resetGame()}>Reset Game</p>
        </StyledListItem>
        <StyledListItem>
          <IconContainer
            icon={<BiUser className="child" />}
            player={currentPlayer}
          />
          <IconContainer
            icon={<BiLogOutCircle className="child" />}
            player={currentPlayer}
          />
        </StyledListItem>
      </StyledList>
    </StyledHeader>
  );
}