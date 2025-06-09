
import {Link, useNavigate} from "react-router-dom";
export default function Inicio() {
const navigate = useNavigate();

const irAListar = () => {
    navigate("/listar");
  };	

  return (
    <div>
      <h1>Bienvenido a la aplicación de restaurantes</h1>
      <p>Explora y califica tus restaurantes favoritos.</p>
      <button onClick={irAListar}>Ir a Listar Restaurantes</button>
    </div>
  );
}
