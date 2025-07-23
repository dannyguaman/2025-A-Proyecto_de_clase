import React from "react";
import "./restaurante.css"; // importamos el css
import { useNavigate } from "react-router-dom"; // importamos useNavigate para redireccionar
import { Link } from "react-router-dom"; // importamos Link para la navegación
import "./CrearRestaurante.css"; // importamos el css para estilos

const CrearRestaurante = ({ agregarRestaurante }) => {
  const [nombre, setNombre] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [tipo, setTipo] = React.useState("");
  const [horario, setHorario] = React.useState("");
  const [reputacion, setReputacion] = React.useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoRestaurante = {
      nombre,
      direccion,
      tipo,
      horario,
      reputacion,
    };
    agregarRestaurante(nuevoRestaurante);
    setNombre('');
    setDireccion('');
    setTipo('');
    setReputacion(0);
    setHorario('');
    navigate('/restaurantes');
  };

  const HandleCrearRestaurante = () => {
    navigate("/CrearRestaurante");
  }

  const HandleListaRestaurante = () => {
    navigate("/restaurantes");
  }

  const HandleInicio = () => {
    navigate("/Inicio");
  };

  return (
    <div className="crear-restaurante">
      <form onSubmit={handleSubmit}>
        <h2>Crear Nuevo Restaurante</h2>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Dirección"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Horario de atención"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Reputación"
          value={reputacion}
          onChange={(e) => setReputacion(Number(e.target.value))}
          required
        />
        <button type="submit">Ingresar</button>
        <br />
        <div className="navegacion">
          <br />
          <Link to="/CrearRestaurante">CrearRestaurante</Link>
          <br />
          <Link to="/restaurantes">ListaRestaurante</Link>
          <br />
          <button onClick={HandleCrearRestaurante}> Go to CrearRestaurante</button>
          <br />
          <button onClick={HandleListaRestaurante}> Go to ListaRestaurante</button>
          <br />
          <button onClick={HandleInicio}> Go to Inicio</button>
        </div>
      </form>
    </div>
  );
};

export default CrearRestaurante;