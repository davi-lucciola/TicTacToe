import { useState } from "react";
import { createContext } from "react";


export const TicTacToeContext = createContext()

export function TicTacToeContextProvider({ children }) {
    const [currentPlayer, setCurrentPlayer] = useState('X');  
    const[game, setGame] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    function changeGameValue(position) {
    }

    return (
        <TicTacToeContext.Provider value={{game, changeGameValue}}>
            {children}
        </TicTacToeContext.Provider>
    )
}
