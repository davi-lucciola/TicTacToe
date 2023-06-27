import styled from "styled-components";


export const StyledHeader = styled.header`
  text-align: center;

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