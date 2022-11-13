import React from 'react'
import Home from './Components/Home/Index'
import Routes from './Routes/Routes'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
