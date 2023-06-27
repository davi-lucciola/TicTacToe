import Game from "../components/TicTacToe";
import Header from "../components/Header";
import { TicTacToeContextProvider } from "../context/TicTacToeContext.jsx";
import Footer from "../components/Footer";
import Wave from "../components/Wave"

function App() {  
  return (
    <TicTacToeContextProvider>
      <Wave side='top'/>
      <Header />
      <Game />
      <Footer />
    </TicTacToeContextProvider>
  );
}

export default App;
