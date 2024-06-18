import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [letra, setLetra] = useState('');
  const [numero, setNumero] = useState('');
  const fundo = useRef(null);

  useEffect(() => {
    confereCaracter();
  }, [nome]);

  function mudaCor() {
    fundo.current.style.backgroundColor = 'yellow';
  }

  function confereCor() {
    if (nome.length < 3) {
      fundo.current.style.backgroundColor = 'red';
    } else {
      fundo.current.style.backgroundColor = 'green';
    }
  }

  
  function confereCaracter() {
    const numeros = nome.replace(/\D/g, '').split(' ').filter(Boolean);
    const letras = nome.replace(/[0-9]/g, '').split(' ').filter(Boolean);

    setNumero(numeros.join(' '));
    setLetra(letras.join(' '));
}

  return (
    <div id='fundo' >
      <input ref={fundo} onFocus={mudaCor} onBlur={confereCor} type='text' value={nome} onChange={(e) => setNome(e.target.value)}/>
      <hr/>
      <span>Letra</span>
      <input type='text' disabled='disabled' value={letra} id='letra'/>
      <span>Número</span>
      <input type='text' disabled='disabled' value={numero} id='numero'/>
    </div>
  );
}

export default App;
