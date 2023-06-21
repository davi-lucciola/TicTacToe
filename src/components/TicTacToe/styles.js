import styled from "styled-components";


export const StyledTicTacToe = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  margin-bottom: 30px;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.player == null ? "pointer" : "default")};

  color: ${(props) => (props.player == "X" ? "goldenrod" : "purple")};
  font-family: cursive;
  font-size: 120px;

  width: 140px;
  height: 140px;

  background-color: lightgray;
  border-radius: 20px;
  transition: 0.3s;

  &:hover {
    background-color: gray;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 500px;
`;
