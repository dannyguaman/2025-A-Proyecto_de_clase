import './App.css';
import React, {useState} from 'react';
import ListaRestaurantes from './componentes/listaRestaurantes';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import axios from 'axios';
import CrearRestaurante from './componentes/CrearRestaurante';
import AxiosRestaurante from './componentes/AxiosRestaurante';
import ActualizarRestaurante from './componentes/ActualizarRestaurante';

function App() {
  const [restaurantes, setRestaurantes] = useState([]);


  const cargarRestaurantes = () => {
    axios.get("http://localhost:3001/restaurante") //Patron then y catch se llaman promesas
      .then(response => {
        setRestaurantes(response.data);
      })
      .catch((err) => {
        console.error("Error al cargar los restaurantes", err);
      });
  };

  const agregarRestaurante = (nuevoRestaurante) => {
    axios.post("http://localhost:3001/restaurante", nuevoRestaurante)
      .then(response => {
        setRestaurantes([...restaurantes, response.data]); // Agrega el nuevo restaurante al estado
      })
      .catch((error) => {
        console.error("Error al agregar el restaurante:", error);
      }); 
  };

  const eliminarRestaurante = (eliminado) => {
    axios.delete(`http://localhost:3001/restaurante/${eliminado.id}`)
      .then(() => {
        cargarRestaurantes(); // Vuelve a cargar la lista de restaurantes después de eliminar uno
      })
      .catch((error) => {
        console.error("Error al eliminar el restaurante:", error);
      });
  };

  const actualizarRestaurante = (actualizado) => {
    
    axios.put(`http://localhost:3001/restaurante/${actualizado.id}`, actualizado)
      .then(response => {
        const nuevosRestaurantes = [...restaurantes];
        const index = nuevosRestaurantes.findIndex(r => r.id === actualizado.id);
        if (index !== -1) {
          nuevosRestaurantes[index] = response.data; // Actualiza el restaurante en el estado
        }
        setRestaurantes(nuevosRestaurantes);
      })
      .catch((error) => {
        console.error("Error al actualizar el restaurante:", error);
      });
  };

   

  React.useEffect(() => {
    cargarRestaurantes();
    eliminarRestaurante();
  }, []);


  
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
        <Route path="/restaurantes" element={<ListaRestaurantes restaurantes={restaurantes} eliminarRestaurante={eliminarRestaurante} actualizarRestaurante={actualizarRestaurante} />} />
        <Route path="/ActualizarRestaurante" element={<ActualizarRestaurante actualizarRestaurante={actualizarRestaurante} />} />
        {/* Redirección por defecto a Inicio */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path='/AxiosRestaurante' element={<AxiosRestaurante />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
