import Game from "../components/TicTacToe";
import Header from "../components/Header";
import { TicTacToeContextProvider } from "../context/TicTacToeContext.jsx";

function App() {  
  return (
    <TicTacToeContextProvider>
      <Header />
      <Game />
    </TicTacToeContextProvider>
  );
}

export default App;
