import './App.css';
import Titulo from './Componentes/Titulo';

function App() {
  return (
    <div className="App">
      <Titulo 
        titulo="Explora la gastronomía de San José"
        descripcion="Descubre los mejores restaurantes y platos típicos de nuestra comunidad."
        imagen="https://i0.wp.com/recetaskwa.com/wp-content/uploads/2023/09/ceviche_camaron.jpg?ssl=1"
      />
    </div>

  );
}

export default App;
