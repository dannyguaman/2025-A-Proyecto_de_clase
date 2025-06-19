import React from "react";
import "./restaurante.css"; // importamos el css
import { useNavigate } from "react-router-dom"; // importamos useNavigate para redireccionar
import { Link } from "react-router-dom"; // importamos Link para la navegación
const ActualizarRestaurante = ({ actRestaurante }) => {
  const [id, setId] = React.useState(actRestaurante.id || 0); // Obtenemos el id del restaurante a actualizar
  const [nombre, setNombre] = React.useState(actRestaurante.nombre || "");
  const [direccion, setDireccion] = React.useState(actRestaurante.direccion || "");
  const [tipo, setTipo] = React.useState(actRestaurante.tipo || "");
  const [imagen, setImagen] = React.useState(actRestaurante.imagen || "");
  const [reputacion, setReputacion] = React.useState(actRestaurante.reputacion || 0);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoRestaurante = {
      id,
      nombre,
      tipo,
      direccion,
      imagen,
      reputacion,
    };
    actRestaurante(nuevoRestaurante);
    setNombre('');
    setDireccion('');
    setTipo('');
    setReputacion(0);
    setImagen('');
    navigate('/restaurantes'); // Redirecciona a la lista de restaurantes después de agregar uno nuevo
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
    <form onSubmit={handleSubmit}>
      <h2>Actualizar Restaurante</h2>

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
        placeholder="URL Imagen"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
        required
      />

      <button type="submit">Actualizar</button>
      <br />
      <Link to="/Inicio">Inicio</Link>
      <div>
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
  );
};
export default ActualizarRestaurante;