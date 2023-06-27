import styled from 'styled-components';


export const StyledFooter = styled.footer`
  text-align: center;
  width: 100%;

  button {
    font-size: 1.6rem;
    border-radius: 24px;
    border: none;

    padding: 12px 40px;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      background-color: ${(props) =>
        props.player == "X" ? "goldenrod" : "purple"};
      ${(props) => (props.player == "X" ? "goldenrod" : "purple")};

      box-shadow: 1px 1px 5px rgba(0, 0, 0, 0);
    }

    &:hover, &:hover > span {
      color: white;
    }
  }
`;