import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setData(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>hoje é {data.getDate()}/{data.getMonth()+1}/{data.getFullYear()}</h1>
      {data.getHours() < 12 ? <h2>Bom dia</h2> : <h2>Boa tarde</h2>}
      {data.getHours()}:
      {data.getMinutes()}:
      {data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds()}
    </div>
  ); 
}

export default App;