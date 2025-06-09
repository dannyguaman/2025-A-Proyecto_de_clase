import Restaurante from "./Restaurante";
import Form from "./Form";
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";

const ListaRestaudantes = () => {
  const [restaurantes, setRestaurantes] = useState([
    {
      nombre: "Restaurante El Buen Sabor",
      direccion: "Av. 10 de Agosto",
      tipo: "Ecuatoriana",
      reputacion: "",
    },
    {
      nombre: "Cafetería La Unión",
      direccion: "10 de Agosto",
      tipo: "Cafetería",
    },
    {
      nombre: "La Mexicana",
      direccion: "La Prensa y La Católica",
      tipo: "Mexicana",
    },
  ]);

  const [likestotal, setLikeTotal] = useState(0);
  const [mesajeError, setMesajeError] = useState("");
  const [state, setState] = useState({
    nombre: "",
    direccion: "",
    tipo: "",
  });

  const handlerLikeTotal = () => {
    if (likestotal >= 0) {
      setMesajeError("");
    }
    setLikeTotal((prev) => {
      return prev + 1;
    });
  };

  const disLikeTotal = () => {
    if (likestotal <= 0) {
      setMesajeError("No se puede disminuir el total de likes");
      return;
    }
    setLikeTotal((prev) => {
      return prev - 1;
    });
  };

  const [buscar, setBuscar] = useState("");
  const handleBuscarChange = (e) => {
    setBuscar(e.target.value);
  };

  const filteredRestaurantes = restaurantes.filter(
    (restaurante) =>
      restaurante.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
      restaurante.tipo.toLowerCase().includes(buscar.toLowerCase())
  );

const navigate = useNavigate();

const volverAListar = () => {
    navigate("/");
  };	

  return (
    
    <div className="App">
      {/* elevacion de estado psar de hijo a padre */}
      <h1> Cantidad total de likes {likestotal} </h1>
      <h2>{mesajeError}</h2>

      <button onClick={volverAListar}>Ir a Menu Principal</button>

      <Form
        state={state}
        setState={setState}
        setRestaurantes={setRestaurantes}
      ></Form>

      <div>
        <input
          type="text"
          placeholder="Buscar restaurante"
          value={buscar}
          onChange={handleBuscarChange}
        />
      </div>

      {filteredRestaurantes.map((restaurante, index) => {
        return (
          <Restaurante
            key={index}
            nombre={restaurante.nombre}
            direccion={restaurante.direccion}
            tipo={restaurante.tipo}
            // pasando la funcion al componente hijo
            onlike={handlerLikeTotal}
            buscar={buscar}
            ondislike={disLikeTotal}
          />
        );
      })}
    </div>
  );
};

export default ListaRestaudantes;
