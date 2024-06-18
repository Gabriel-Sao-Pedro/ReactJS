import React, { useState } from 'react';
import './App.css';

function App() {
  //length conta a quantidade de caracteres da string
  //charAt retorna o caractere na posição informada
  //indexOf retorna a posição do caractere informado
  //replace substitui o primeiro parametro pelo segundo
  //substring retorna a string entre os parametros informados
  //toLowerCase retorna a string em minúsculo
  //toUpperCase retorna a string em maiúsculo
  //split divide a string em um array de acordo com o parametro informado
  //trim remove os espaços em branco do início e do fim da string

 var nome = ' Jorge Sant Ana '


  return (
    <div>
      {nome.length}<br/>
      {nome.charAt( 0)}<br/>
      {nome.indexOf('A')}<br/>
      {nome.replace('Sant Ana','Aragão')}<br/>
      {nome.substring(5,14)}<br/> 
      {nome.toLowerCase()}<br/>
      {nome.toUpperCase()}<br/>
      {nome.split('a')}<br/>
      -{nome.trim()}-<br/>    
    </div>
  ); 

}

export default App;
