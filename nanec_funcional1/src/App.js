import logo from './logo.svg';
import './App.css';
import Restaurante from './componentes/restaurante';
import React, { useState } from 'react';

function App() {
  const restaurantes = [{nombre: "Restaurante El Buen Sabor", direccion: "Av. 10 de Agosto", tipo: "Ecuatoriana", imagen: ""},
                    {nombre: "Cafetería La Unión", direccion: "10 de Agosto", tipo: "Cafetería"},
                    {nombre: "La Mexicana", direccion: "La Prensa y La Católica", tipo: "Mexicana"}
  ]
  const [likestotales, setLikesTot] = useState(0);
  return (
    <div className="App">
      <h2>Cantidad total de likes: {likestotales}</h2>
      {restaurantes.map((restaurante, index) => (
        <Restaurante
          key={index}
          {...restaurante}
        />
      ))}
    </div>
  );
}

export default App;
