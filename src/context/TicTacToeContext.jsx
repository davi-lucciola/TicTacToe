/* eslint-disable react/prop-types */
import { useState, createContext } from "react";


const PLAYERS = { X: "X", O: "O" };
export const TicTacToeContext = createContext();


export function TicTacToeContextProvider({ children }) {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYERS.X);
  const [game, setGame] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  function resetGame() {
    setGame([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  }

  function changeGameValue(x, y) {
    if (game[x][y] != null || game[x][y] == currentPlayer) return;

    const newGame = [...game];
    newGame[x][y] = currentPlayer;
    setGame(newGame);
    if (verifyVictory()) {
      resetGame();
    }
    setCurrentPlayer(PLAYERS.X == currentPlayer ? PLAYERS.O : PLAYERS.X);
  }

  function verifyVictory() {
    for (let i = 0; i < 3; i++) {
      if (game[i][0] == game[i][1] 
        && game[i][1] == game[i][2] 
        && game[i][2] != null) {
        return true;
      } else if (game[0][i] == game[1][i] 
        && game[1][i] == game[2][i]
        && game[2][i] != null) {
        return true;
      }
    }

    if (game[0][0] == game[1][1] 
      && game[1][1] == game[2][2]
      && game[2][2] != null) {
      return true;
    } else if (game[0][2] == game[1][1] 
      && game[1][1] == game[2][0] 
      && game[1][1] != null) {
      return true;
    }

    const haveSpace = game.reduce((acc, cur) => {
      acc += cur.reduce((acc1, cur1) => acc1 + (cur1 == null ? 0 : 1), 0);
      return acc
    }, 0);

    return haveSpace == 9 ? true : null;
  }
  
  return (
    <TicTacToeContext.Provider value={{ 
      currentPlayer, game, resetGame, changeGameValue, verifyVictory 
    }}>
      {children}
    </TicTacToeContext.Provider>
  );
}
