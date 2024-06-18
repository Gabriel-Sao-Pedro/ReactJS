import { useState, useEffect } from 'react';
import './App.css';

function App() {
  function acao(){
    console.log('Você redimensionou a janela!')
  }
  function acao2(){
    console.log('Você usou o scroll!')
  }
  useEffect(() => {
    window.addEventListener('resize', acao);

    return () => {
      window.removeEventListener('resize', acao);
    };
  }, []);

  return(
    <div id='fundo' onScroll={acao2}>
      <div  id='objeto'>
         
      </div>
    </div>
  )
}

export default App;