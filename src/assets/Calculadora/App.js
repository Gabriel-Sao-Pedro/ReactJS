import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [resultado, setResultado] = useState('');
  const calcular = (tipo, acao) => () => {
    if(tipo === 'acao'){
      if(acao === 'C'){

          setResultado('');
      }
      if(acao === '+' || acao === '-' || acao === '*' || acao === '/' || acao === '.'){
          setResultado(resultado + acao);
      }
      if(acao === '='){
          var valor_campo = eval(resultado);
          setResultado(valor_campo);
      }
  } else if(tipo === 'valor'){
      setResultado(resultado + acao);
    }
  }
 
  return (
    <div id='fundo' >
        <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-center">
            <br />

            <div class="calculadora">
              <input type="text" id='resultado' class="form-control resultado" placeholder="0" disabled="disabled" value={resultado} />
              
              <div class="row">
                <button onClick={calcular('acao', 'C')} type="button" className="btn btn-dark btn-lg clear font-weight-light">C</button>
                <button onClick={calcular('acao', '/')}  type="button" className="btn btn-dark btn-lg font-weight-light">/</button>
                <button onClick={calcular('acao', '*')}  type="button" className="btn btn-dark btn-lg font-weight-light">x</button>
              </div>

              <div class="row">
                <button onClick={calcular('valor', 7)} type="button" className="btn btn-dark btn-lg font-weight-light">7</button>
                <button onClick={calcular('valor', 8)} type="button" className="btn btn-dark btn-lg font-weight-light">8</button>
                <button onClick={calcular('valor', 9)}  type="button" className="btn btn-dark btn-lg font-weight-light">9</button>
                <button onClick={calcular('acao', '-')}  type="button" className="btn btn-dark btn-lg font-weight-light">-</button>
              </div>
              
              <div class="row">
                <button onClick={calcular('valor', 4)} type="button" className="btn btn-dark btn-lg font-weight-light">4</button>
                <button onClick={calcular('valor', 5)} type="button" className="btn btn-dark btn-lg font-weight-light">5</button>
                <button onClick={calcular('valor', 6)} type="button" className="btn btn-dark btn-lg font-weight-light">6</button>
                <button onClick={calcular('acao', '+')} type="button" className="btn btn-dark btn-lg font-weight-light">+</button>
              </div>

              <div class="row">
                <button onClick={calcular('valor', 1)} type="button" className="btn btn-dark btn-lg font-weight-light">1</button>
                <button onClick={calcular('valor', 2)} type="button" className="btn btn-dark btn-lg font-weight-light">2</button>
                <button onClick={calcular('valor', 3)} type="button" className="btn btn-dark btn-lg font-weight-light">3</button>
                <button onClick={calcular('acao', '=')} type="button" className="btn btn-dark btn-lg enter">=</button>
              </div>

              <div class="row" >
                <button onClick={calcular('valor', 0)} type="button" className="btn btn-dark zero btn-lg font-weight-light">0</button>
                <button onClick={calcular('acao', '.')}type="button" className="btn btn-dark btn-lg font-weight-light">.</button>
              </div>

            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default App;
