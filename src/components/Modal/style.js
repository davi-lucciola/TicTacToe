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

    width: 30%;
    height: 30%;

    border-radius: 12px;
    border-bottom: 20px solid ${(props) => {
      switch (props.player) {
        case 'X':
          return 'goldenrod'
        case 'O':
          return 'purple'
        default:
          return 'lightgray'
      } 
    }};
  }

  .close-button {
    position: absolute;
    top: 36%;
    right: 36%;

    cursor: pointer;
  }
`;
