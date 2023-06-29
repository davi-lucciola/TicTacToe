import { StyledModal } from "./style";

/* eslint-disable react/prop-types */
export const Modal = ({ winner, isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  console.log(winner)
  return (
    <StyledModal player={winner}>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2>
          {winner != null
            ? `O jogador "${winner}" venceu!`
            : "Empate!"}
        </h2>
      </div>
    </StyledModal>
  );
};
