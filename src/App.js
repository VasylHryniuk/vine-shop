import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

import Header from "./componets/header/Header";
import Hero from "./componets/hero/Hero";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Hero />
      </Router>
    </>
  );
};

export default App;
