import styled from "styled-components";


export const StyledHeader = styled.header`
  width: 100%;
  height: 20vh;
  background-color: gainsboro;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: ${(props) => (props.switch ? "column" : "row")};

  font-size: 28px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 900;

  cursor: default;
  transition: 0.3s;
  
  &:hover, p.cur-player {
    color: ${(props) => (props.player == "X" ? "gold" : "purple")};
  }
`;
