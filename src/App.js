import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

import Header from "./componets/header/Header";
import Hero from "./pages/hero/Hero";
import Company from "./pages/company/Company";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Hero />
        <Company/>
      </Router>
    </>
  );
};

export default App;
