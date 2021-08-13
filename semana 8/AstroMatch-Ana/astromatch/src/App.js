
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Buttons from './Components/Buttons';

function App(){
  return(
    <div className="App">
      <h1>Astromatch!</h1>
      {/* Header */}
      <Header texto={'Testando props'} />

      {/* Cards */}

      {/* Buttons swipe left/right */}
      <Buttons />
      {/* Chat */}
      {/* Individual chat */}
  
    </div>
    
    )
}


export default App;
