import React from "react";
import "./restaurante.css";
import { useNavigate, useLocation } from "react-router-dom";
import "./ActualizarRestaurante.css"; // Importamos el CSS para estilos

const ActualizarRestaurante = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const actRestaurante = location.state?.actRestaurante || {
    _id: "",
    nombre: "",
    direccion: "",
    tipo: "",
    horario: "",
    reputacion: 0
  };

  const [restaurante, setRestaurante] = React.useState(actRestaurante);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos actualizados:", restaurante);
    navigate('/restaurantes');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurante(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="formulario-restaurante">
      <form onSubmit={handleSubmit}>
        <h2>Actualizar Restaurante</h2>
        <div className="grupo-input">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={restaurante.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grupo-input">
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={restaurante.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grupo-input">
          <label htmlFor="tipo">Tipo:</label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            value={restaurante.tipo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grupo-input">
          <label htmlFor="horario">Horario:</label>
          <input
            type="text"
            id="horario"
            name="horario"
            value={restaurante.horario}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grupo-input">
          <label htmlFor="reputacion">Reputación:</label>
          <input
            type="number"
            id="reputacion"
            name="reputacion"
            value={restaurante.reputacion}
            onChange={handleChange}
            min="0"
            required
          />
        </div>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};


export default ActualizarRestaurante;