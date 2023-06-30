import styled from 'styled-components';


export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;

    padding: 20px;
    width: 30%;
    min-width: 300px;
    height: 30%;

    border-radius: 12px;
    border-bottom: 20px solid
      ${(props) => {
        switch (props.player) {
          case "X":
            return "goldenrod";
          case "O":
            return "purple";
          default:
            return "lightgray";
        }
      }};
  }

  .close-button {
    position: absolute;
    top: 36%;
    right: 36%;

    cursor: pointer;
    width: 22px;
    padding-left: 6px;
    padding-bottom: 3px;
    border-radius: 50%;

    @media (max-width: 1000px) {
      position: relative;
      top: -67px;
      right: -247px;

      width: 22px;
      padding-left: 4.5px;
      padding-bottom: 2.5px;
    }

    &:hover {
      color: whitesmoke;
      font-weight: 900;
      background-color: ${(props) => {
        switch (props.player) {
          case "X":
            return "goldenrod";
          case "O":
            return "purple";
          default:
            return "lightgray";
        }
      }};
    }
  }

  h2 {
    text-align: center;
    min-width: 240px;
  }
`;
