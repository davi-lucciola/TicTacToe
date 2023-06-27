import { useContext } from "react";
import { TicTacToeContext } from "../../context/TicTacToeContext";
import { StyledFooter } from "./style";


export default function Footer() {
    const { resetGame, currentPlayer } = useContext(TicTacToeContext);

    return (
        <StyledFooter player={currentPlayer}>
            <button onClick={() => resetGame()}> Reset Game </button>
        </StyledFooter>
    )
}