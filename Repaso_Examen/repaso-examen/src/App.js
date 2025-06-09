import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaTarjetas from './Componentes/ListaTarjetas';
import Inicio from './Componentes/Inicio';
import Form from './Componentes/Form';

function App() {

      const [formstate, setFormState] = React.useState({
      Nombre: '',
      Foto: '',
      Bio: '',
      Lenguajes: {
        html: false,
        javascript: false,
        css: false,
        node: false,
        mongodb: false
      }
    });
    const developers = [
      {
        Nombre: 'Carla',
        Foto: 'https://i.pinimg.com/236x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg',
        Bio: 'Hola, soy desarrolladora front-end desde hace 5 años...',
        Lenguajes: { html: true, javascript: true, css: true, node: false, mongodb: false }
      },
      {
        Nombre: 'Erick',
        Foto: 'https://i.pinimg.com/564x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg',
        Bio: 'Hi, I am back-end developer from ten years ago, and ...',
        Lenguajes: { html: true, javascript: true, css: false, node: true, mongodb: true }
      },
      {
        Nombre: 'Maria',
        Foto: 'https://i.pinimg.com/564x/ed/be/19/edbe19b1fd4866b2d458aaabf8c02073.jpg',
        Bio: 'Hola, soy DevOps en Facebook ...',
        Lenguajes: { html: false, javascript: false, css: false, node: true, mongodb: true }
      }
    ];

    const [developerList, setDeveloperList] = useState(developers);

    const handleRegistrar = (NewDeveloper) => {
    const { Nombre } = formstate;
    setDeveloperList([
      ...developerList,
      NewDeveloper
    ]);
    alert(`Developer ${Nombre} has been added successfully!`);
    setFormState({
      Nombre: '',
      Foto: '',
      Bio: '',
      Lenguajes: {
        html: false,
        javascript: false,
        css: false,
        node: false,
        mongodb: false
      }
    });
  };


    return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/ListaTarjetas" element={<ListaTarjetas List={developerList} State={setDeveloperList} />} />
        <Route path="/formulario" element={<Form state={formstate} setState={setFormState} onSubmit={handleRegistrar} />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App;
