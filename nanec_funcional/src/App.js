import logo from './logo.svg';
import './App.css';
import Restaurante from './Componentes/Restaurante.jsx';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurantes</h1>
        <Restaurante nombre="La Casa de la Pasta" direccion="Calle Falsa 123" tipo="Italiano"/>
        <Restaurante nombre="Sushi World" direccion="Avenida Siempre Viva 456" tipo="Japones"/>
        <Restaurante nombre="Taco Palace" direccion="Boulevard de los Sueños Rotos 789" tipo="Mexicano"/>
      </header>
    </div>
  )
}

export default App;
