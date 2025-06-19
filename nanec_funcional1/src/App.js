import './App.css';
import React, {useState, useEffect} from 'react';
import ListaRestaurantes from './componentes/listaRestaurantes';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import axios from 'axios';
import CrearRestaurante from './componentes/CrearRestaurante';
import AxiosRestaurante from './componentes/AxiosRestaurante';


function App() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [error, setError] = useState(null);

  const fetchRestaurantes = () => {
    axios.get("http://localhost:3001/restaurante") //Patron then y catch se llaman promesas
      .then(response => {
        setRestaurantes(response.data);

        setError(null);
      })
      .catch(() => {
        setError("Error al cargar los restaurantes");
      });
  };

  React.useEffect(() => {
    fetchRestaurantes();
  }, []);

  const agregarRestaurante = (nuevoRestaurante) => {
    setRestaurantes([...restaurantes, nuevoRestaurante]); // Agrega un nuevo restaurante al estado
    //que hace el SetRestaurantes? Actualiza el estado de restaurantes con el nuevo restaurante agregado
    //...restaurantes es el estado actual de restaurantes, y nuevoRestaurante es el nuevo restaurante que se va a agregar
    //nuevoRestaurante es un objeto que contiene las propiedades del nuevo restaurante
  };

  const eliminarRestaurante = (index) => {
    setRestaurantes(restaurantes.filter((_, i) => i !== index));
  };

  
    return (
    <BrowserRouter>
      {/* Menú de navegación visible en todas las páginas */}
      <nav style={{ margin: 20 }}>
        <Link to="/" style={{ marginRight: 10 }}>Inicio</Link>
        <Link to="/CrearRestaurante" style={{ marginRight: 10 }}>Crear Restaurante</Link>
        <Link to="/restaurantes">Lista de Restaurantes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/CrearRestaurante" element={<CrearRestaurante agregarRestaurante={agregarRestaurante} />} />
        <Route path="/restaurantes" element={<ListaRestaurantes restaurantes={restaurantes} eliminarRestaurante={eliminarRestaurante} />} />
        {/* Redirección por defecto a Inicio */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path='/AxiosRestaurante' element={<AxiosRestaurante />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
