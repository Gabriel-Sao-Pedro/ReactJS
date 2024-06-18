import { useState } from 'react';
import './App.css';

function App() {
  function acao() {
    alert('Evento disparado!')
  }
  function acao2() {
    alert('O mouse saiu da região do elemento!')
  }
  //OnClick
  //onDoubleClick
  //onMouseup
  //onMouseOut
  //onMouseOver
    return(
        <div onMouseOut={acao2} onMouseDown={acao} id='back'>
            
        </div>
    )
}

export default App;