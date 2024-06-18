import { useState, useEffect } from 'react';
import './App.css';

function App() {

  return(
    <div id='fundo'>
      <div>
        <input onFocus={()=> console.log('recebeu o foco')} onBlur={()=> console.log('perdeu o foco')}type="text" placeholder="Enter your name" /><hr/>

        <select  onChange={()=> console.log('Estado foi modificado')}>
          <option>-- Selecione --</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </div>
  )
}

export default App;