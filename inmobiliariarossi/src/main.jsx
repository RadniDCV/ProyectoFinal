import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header from "./componentes/head/Head"
import Main from "./componentes/main/Main"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Main />
    
  </React.StrictMode>
)
