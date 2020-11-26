import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {GlobalStyle} from './GlobalStyle';

import Header from './componets/header/Header'

const App = () => {
  return (
    <>
    <GlobalStyle/>
    <Router>
       <Header/>
    </Router>
    </>
  )
}

export default App
