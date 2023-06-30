import styled from "styled-components";


export const StyledTicTacToe = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 30px;
`;

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(110px, 1fr));
  grid-template-rows: repeat(3, minmax(110px, 1fr));
  grid-gap: 10px;
  font-size: 4.8rem;
  transition: 0.3s;

  @media (max-width: 760px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    grid-template-rows: repeat(3, minmax(100px, 1fr));
    font-size: 4rem;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.player == null ? "pointer" : "default")};

  color: ${(props) => (props.player == "X" ? "goldenrod" : "purple")};
  font-family: cursive;

  background-color: lightgray;
  border-radius: 20px;
  transition: 0.3s;

  &:hover {
    background-color: gray;
  }
`;
