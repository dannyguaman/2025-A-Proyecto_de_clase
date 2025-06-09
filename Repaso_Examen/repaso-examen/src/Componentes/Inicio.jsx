import { useNavigate } from "react-router-dom";

const Inicio = () => {
  const navigate = useNavigate();

  const handleLista = () => {
    navigate('/ListaTarjetas'); // <- Usa ruta absoluta
  };

  const handleAgregar = () => {
    navigate('/formulario'); // <- Usa ruta absoluta
  };

  return (
    <div className="App">
      <div id="titulo">
        <h1>Available Developers</h1>
      </div>
      <div className="Indice">
        <h1>BIENVENIDO AL INDICE DE PROGRAMADORES</h1>
        <h2>VER LISTA DE PROGRAMADORES</h2>
        <button onClick={handleLista}>Ver lista</button>
        <h2>AGREGAR NUEVO PROGRAMADOR</h2>
        <button onClick={handleAgregar}>Agregar</button>
      </div>
    </div>
  );
};

export default Inicio;
