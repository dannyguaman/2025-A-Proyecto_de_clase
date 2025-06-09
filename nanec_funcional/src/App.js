import './App.css';
import Restaurante from './componentes/Restaurante.jsx';
import React, { useState } from 'react';
import ListarRestaurantes from './componentes/Lista_restaudantes';
import Inicio from './componentes/Inicio.js'; 
import {BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  const[likesTotales, setLikesTotales] = useState(0);

  const [mensajeErrorLikes, setMensajeErrorLikes] = useState("");
  //contar los likes totales de todos los restaurantes
  const handlerLikesTotales = () => {
    if (likesTotales => 0) {
      setMensajeErrorLikes("");
      setLikesTotales(prevState => {
      
      return prevState + 1;
    });
  }
  }
    const handlerDislikesTotales = () => {

    if (likesTotales <= 0) {
      setMensajeErrorLikes("No se pueden tener dislikes si no hay likes");
      setLikesTotales(prevState => {
      return prevState - 1;
    });
    }
   
  }

  
  return (





    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/listar" element={<ListarRestaurantes />} />
      </Routes>   
    </BrowserRouter>
    
  /*
    <ListarRestaurantes
      likesTotales={likesTotales}
      handlerLikesTotales={handlerLikesTotales}
      handlerDislikesTotales={handlerDislikesTotales}
      mensajeErrorLikes={mensajeErrorLikes}
    />*/
  )
}
 
export default App;
