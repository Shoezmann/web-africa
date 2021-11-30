import React from 'react';
import './App.scss';

import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Pricing from './Pricing/Pricing';


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Header/>
        <Pricing/>
    </div>
  );
}

export default App;
