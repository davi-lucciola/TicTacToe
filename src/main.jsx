import React from 'react'
import ReactDOM from 'react-dom/client'
import { TicTacToeContextProvider } from './context/TicTacToeContext.jsx'
import App from './app/App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TicTacToeContextProvider>
      <App />
    </TicTacToeContextProvider>
  </React.StrictMode>,
)
