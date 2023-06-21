/* eslint-disable react/prop-types */
import styled from "styled-components";

export const Icon = styled.div`
  display: flex;

  & .child {
    width: 40px;
    height: 40px;

    transition: 0.3s;
  }

  & .child:hover {
    cursor: pointer;
    color: ${(props) => (props.player == "X" ? "goldenrod" : "purple")};
  }
`;

export const IconContainer = ({ icon, player }) => {
  return (<Icon player={player}>{icon}</Icon>);
}