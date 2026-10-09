import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
     <Header/>
        {/* <Banner/> */}
       
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
