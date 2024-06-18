import React, { useState } from 'react';
import './App.css';

function App() {
  const [pesquisa, setPesquisa] = useState('')
 

  var pessoas = []
  pessoas['nome'] = ['João', 'Maria', 'José', 'Ana', 'Carlos']
  pessoas['sobrenome']=['Silva', 'Santos', 'Oliveira', 'Souza', 'Cunha']
  pessoas['idade']=[25, 30, 20, 28, 35]



 //Push adiciona no final
  pessoas.nome.push('Pedro')
  pessoas.sobrenome.push('Ferreira')
  pessoas.idade.push(40)
  //Unshift adiciona no inicio
  pessoas.nome.unshift('Marta')
  pessoas.sobrenome.unshift('Pereira')
  pessoas.idade.unshift(22)
  //Pop remove do final 
  pessoas.sobrenome.pop()
  pessoas.idade.pop()
  pessoas.nome.pop()
  //Shift remove do inicio
  pessoas.sobrenome.shift()
  pessoas.idade.shift()
  pessoas.nome.shift()

  //indexOf retorna a posição do elemento no array
  var auxnome = pessoas.nome.indexOf(pesquisa)
  
  function posicao(){
      if (auxnome !== -1){
        return <p>A pessoa {pesquisa} está na posição {auxnome+1}</p>
      }else{
        return <p>A pessoa {pesquisa} não foi encontrada</p>
      }

  }
 
   return (
    <div>
     <h1>Lista de Pessoas</h1>
     <ul> {pessoas.nome.map((item, index)=>(
      <li key={index}>Nome: {item} {pessoas.sobrenome[index]} - Idade: {pessoas.idade[index]}</li>
     ))}</ul>

     <input type="text" value={pesquisa} onChange={(e)=>setPesquisa(e.target.value)} placeholder="Digite o nome da pessoa"/>
    
    {posicao()}
      
    </div>
  );
}

export default App;