import Wave from "../components/Wave"
import { Game } from "../components/Game";
import { TicTacToeContextProvider } from "../context/TicTacToeContext.jsx";



function App() {  
  return (
    <TicTacToeContextProvider>
      <Wave side="top" />
      <Game />
    </TicTacToeContextProvider>
  );
}

export default App;
