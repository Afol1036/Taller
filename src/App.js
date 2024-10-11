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
  
  return (
    <div>
      <p>Haz presionado  {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Presioname
      </button>
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
