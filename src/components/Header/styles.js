import styled from "styled-components";


export const StyledHeader = styled.header`
  text-align: center;

  h1 {
    text-shadow: 1px 1px 20px
      ${(props) =>
        props.player == "X"
          ? "rgba(218, 165, 32, 0.5)"
          : "	rgba(128, 0, 128, 0.5)"};
    transition: 0.3s;
    cursor: default;

    &:hover {
      transform: scale(1.1);
    }
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    padding: 12px 40px;
    transition: 0.3s;
  }

  h2 span {
    font-size: larger;
    margin-left: 20px;
    color: ${(props) => (props.player == "X" ? "goldenrod" : "purple")};
    transition: 0.3s;
  }
`;