import React, { Component } from 'react';

class Titulo extends Component {
  render() {
    return (
      <div>
        <h1>Explora la gastronomía de San José</h1>
        <p>Descubre los mejores restaurantes y platos típicos de nuestra comunidad.</p>
        <img 
          src="https://i0.wp.com/recetaskwa.com/wp-content/uploads/2023/09/ceviche_camaron.jpg?ssl=1"
          alt="Plato típico ecuatoriano" 
          width={300} 
        />
      </div>
    );
  }
}

export default Titulo;
