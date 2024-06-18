import { useState } from 'react';
import './App.css';

function App() {
      function acao(){
        alert('Você clicou no botão')
      }
      //onKeyUp é um evento que ocorre quando o usuário solta uma tecla (no campo de input)
      //onKeyDown é um evento que ocorre quando o usuário pressiona uma tecla (no campo de input)
    return(
        <div>
            <input onKeyUp={acao} type="text" placeholder="Enter your name" /> 
        </div>
    )
}

export default App;