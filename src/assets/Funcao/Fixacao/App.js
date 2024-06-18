import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('')
  const [operacao, setOperacao] = useState('')
  const [num2, setNum2] = useState('')
 function calculo(num1, operacao, num2) {
  if (!num1 || !num2) {
    return "Por favor, insira dois números.";
  }
   switch (operacao.trim().toLowerCase()) {
      case 'soma':  
        return parseFloat(num1) + parseFloat(num2)
    
      case 'subtração':
        return parseFloat(num1) - parseFloat(num2)
      default:
        return 'Operação inválida! Seleciona soma ou subtração. '    
   }
   }
   return (
    <div>
    Insira o primeiro número: <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
    <br />
    Insira soma ou subtração: <input type="text" value={operacao} onChange={(e) => setOperacao(e.target.value)} />
    <br />  
    Insira o segundo número: <input type="numer" value={num2} onChange={(e) => setNum2(e.target.value)} />
    <br />
    O resultado é: {calculo(num1, operacao, num2)}
    </div>
  ); 
}

export default App;