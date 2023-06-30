import styled from "styled-components";
import { useContext } from "react";
import { TicTacToeContext } from "../../context/TicTacToeContext";


const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  transform: translateY(-70px) rotateX(180deg);
  z-index: -1;

  @media (max-width: 760px) {
    transform: translateY(-20px) rotateX(180deg);
  }

  svg {
    transition: 0.3s;
    fill: ${(props) => (props.player == "X" ? "goldenrod" : "purple")};
  }
`;

export const Wave = () => {
  const { currentPlayer } = useContext(TicTacToeContext);

  return (
    <StyledDiv player={currentPlayer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          d="M0,96L60,85.3C120,75,240,53,360,85.3C480,117,600,203,720,224C840,245,960,203,1080,154.7C1200,107,1320,53,1380,26.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </StyledDiv>
  );
};

export default Wave;