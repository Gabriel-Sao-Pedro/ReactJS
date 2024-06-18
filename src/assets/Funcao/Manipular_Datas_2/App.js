import './App.css';

function App() {
  var data = new Date()
  var data1 = new Date()
  var data2 = new Date()
  var data3 = new Date(2017, 0, 15)
  var data4 = new Date(2017, 1, 23)

  // Altera a data para 720 dias atrás
  data1.setDate(data1.getDate() - 720);

  // Altera a data para 14 meses atrás
  data.setMonth(data.getMonth() - 14);

  // Altera a data para 3 anos atrás
  data2.setFullYear(data2.getFullYear() - 3);
  // milissegundos em um dia
  var dia = 1 *24 * 60 * 60 * 1000;

  return (
    <div>
     {/* Exibe a data atual como uma string */}
     {data.toString()}
     <hr/>  
     
     {/* Exibe a data1 (720 dias atrás) como uma string */}
     {data1.toString()}
     <hr/>  

     {/* Exibe a data (14 meses atrás) como uma string */}
     {data.toString()}	
     <hr/>

     {/* Exibe a data2 (3 anos atrás) como uma string */}
     {data2.toString()}
      <hr/>

      {/* Exibe a data3 como uma string */}
      {data3.toString()}
      <hr/> 
        
      {/* Exibe a data4 como uma string */}
      {data4.toString()}
      <hr/>
      {/* Exibe a data3 em milissegundos */}
      {data3.getTime()}
      <hr/> 
      {/* Exibe a data4 em milissegundos */}
      {data4.getTime()}
      <hr/>
      {/* Exibe a diferença entre data3 e data4 em milissegundos */}
      {Math.abs(data3.getTime() - data4.getTime())}
      <hr/>

      {dia}
      <hr/>
      {/* Exibe a diferença entre data3 e data4 em dias */}
      {Math.abs(data3.getTime() - data4.getTime()) / dia}

    </div>
  ); 
}

export default App;