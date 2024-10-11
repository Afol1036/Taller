import React, { useState } from 'react';
function Saludar(props) { 
  const name = props.name;
  const idioma = props.idioma;

  const saludo = idioma === 'es' ? 'Hola' : idioma === 'en' ? 'Hello' : 'Salut'; 
  
  return (
    <div>
      <h1>{saludo}, {name}!</h1>
    </div>
  );
}


function Contenedor(props) {
  return (
    <div style={{ border: '2px solid black', padding: '10px' }}>
      {props.children}
    </div>
  );
}


function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => setCount(count - 1);
  const reiniciar = () => setCount(0);

  return (
    <div>
      <p> Haz presionado {count} veces</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar} disabled={count === 0}>Decrementar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}


function App() {
  return (
    <Contenedor >
      
      <Saludar name="María" idioma="en" />
     
      <Saludar name="Pedro" idioma="es" />
     
     <Contador/>
    </Contenedor>
  );
}

export default App;
