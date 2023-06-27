import styled from "styled-components";


export const StyledTicTacToe = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 30px;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 600px;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.player == null ? "pointer" : "default")};

  color: ${(props) => (props.player == "X" ? "goldenrod" : "purple")};
  font-family: cursive;
  font-size: 9rem;

  width: 180px;
  height: 180px;

  background-color: lightgray;
  border-radius: 20px;
  transition: 0.3s;

  &:hover {
    background-color: gray;
  }
`;
