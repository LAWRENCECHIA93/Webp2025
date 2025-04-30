import React from 'react';
import './App.css';
import MultiButton from './cgu_multiButton'
import HelloCGU from './cgu_hello'
import logo from './logo.svg'


function App() {
  return (
    <div className="App">
      <div>
        {HelloCGU()}
      </div>
      <div>
        <h1>IconButton </h1>
        {MultiButton() } 
      </div>
      
    </div>
  );
}

export default App;
