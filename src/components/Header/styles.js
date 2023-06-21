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
  justify-content: center;
  align-items: center;
  width: 20%;

  font-size: 28px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  /* font-weight: 900; */

  cursor: default;
  transition: 0.3s;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 2px solid black; */
    border-radius: 24px;
    padding: 12px 40px;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      background-color: ${(props) =>
        props.player == "X" ? "goldenrod" : "purple"};
      ${(props) => (props.player == "X" ? "goldenrod" : "purple")};

      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0);
    }
  }

  p span {
    font-size: larger;
    margin-left: 20px;
    /* transform: translateY(); */
    color: ${(props) => (props.player == "X" ? "goldenrod" : "purple")};
    transition: 0.3s;
  }

  p:hover span,
  p:hover {
    color: whitesmoke;
  }
`;
