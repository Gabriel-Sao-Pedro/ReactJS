import React, { useState } from 'react';
import './App.css';

function App() {
    var x = 10.380
    var y = 10.580

    // Math.ceil() faz o arredondamento para cima   
    // Math.floor() faz o arredondamento para baixo
    // Math.round() faz o arredondamento para o valor mais próximo
    // Math.random() gera um número aleatório entre 0 e 1

  return (
    <div>
      {Math.ceil(x)}  <br/>
      {Math.floor(x)} <br/> 
      {Math.round(x)} <br/>
      {Math.round(y)} <br/>
      {Math.random()} <br/>
    </div>
  ); 

}

export default App;
