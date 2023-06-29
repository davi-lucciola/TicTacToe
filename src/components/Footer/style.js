import styled from 'styled-components';


export const StyledFooter = styled.footer`
  text-align: center;
  width: 100%;

  button {
    font-size: 1rem;
    font-weight: 600;
    border-radius: 24px;
    border: none;

    padding: 12px 40px;
    transition: 0.3s;

    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);

    &:hover {
      cursor: pointer;
      background-color: ${(props) =>
        props.player == "X" ? "goldenrod" : "purple"};
      ${(props) => (props.player == "X" ? "goldenrod" : "purple")};
    }

    &:hover,
    &:hover > span {
      color: white;
    }
  }
`;