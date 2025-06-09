import React, { useState } from 'react';
import Form from './Form';
import Tarjeta from './Tarjeta';

const ListaTarjetas = (props) => {
   const {List, State} = props;

  const handleEliminar = (indexToRemove) => {
    State(List.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <div>
      {List.map((developer, index) => (
        <Tarjeta
          key={index}
          {...developer}
          onEliminar={() => handleEliminar(index)}
        />
      ))}

    </div>
  );
}
export default ListaTarjetas;