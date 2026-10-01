import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import "./App.css";

function App() {
  return (
    
    <React.StrictMode>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
