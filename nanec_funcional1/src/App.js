import './App.css';
import Restaurante from './componentes/restaurante';
import React, { useState } from 'react';

function App() {
  const [likestotales, setLikesTot] = useState(0);
  const [mensajeErrorLikes, setMensajeErrorLikes] = useState("");
  const handlerTotalLikes = () =>{
    setLikesTot(prevState => {
      setMensajeErrorLikes(""); 
        return prevState + 1;
    });
  }
  const handlerTotalDislikes = () => {
    setLikesTot(prevState => {
        if (prevState > 0) {
           
          return prevState - 1;
        } else {
            setMensajeErrorLikes("Los likes no pueden ser negativos");
            return prevState;
        }
    });
  }

  return (
    <div className="App">
      <h2>Cantidad total de likes: {likestotales}</h2>
      <h2>Restaurantes</h2>
      <h4 id="Error">{mensajeErrorLikes}</h4>
      <Restaurante nombre="Restaurante El Buen Sabor" direccion="Av. 10 de Agosto" tipo="Ecuatoriana" onlike = {handlerTotalLikes} ondislike = {handlerTotalDislikes}/>
      <Restaurante nombre="Cafetería La Unión" direccion="10 de Agosto" tipo="Cafetería" onlike ={handlerTotalLikes} ondislike = {handlerTotalDislikes} />
      <Restaurante nombre="La Mexicana" direccion="La Prensa y La Católica" tipo="Mexicana" onlike ={handlerTotalLikes} ondislike = {handlerTotalDislikes} />
    </div>
  );
}

export default App;
