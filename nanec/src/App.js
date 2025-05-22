import logo from './logo.svg';
import './App.css';
import Restaurante from './Componentes/Restaurante';

function App() {
  const restaurantes = [{nombre: "Restaurante El Buen Sabor", direccion: "Av. 10 de Agosto", tipo: "Ecuatoriana", imagen: ""},
                    {nombre: "Cafetería La Unión", direccion: "10 de Agosto", tipo: "Cafetería"},
                    {nombre: "La Mexicana", direccion: "La Prensa y La Católica", tipo: "Mexicana"}
  ]
  return (
    <div className="App">
      {
        restaurantes.map((restaurante, index) => (
          <Restaurante 
            key={index} 
            nombre={restaurante.nombre} 
            direccion={restaurante.direccion} 
            tipo={restaurante.tipo} 
            imagen={restaurante.imagen} 
z          />
        ))
      }
    </div>
  );
}

export default App;

