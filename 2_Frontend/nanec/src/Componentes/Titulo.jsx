import { Component } from 'react';

class Titulo extends Component {
  render() {
    const { titulo, descripcion, imagen } = this.props;
    return (
      <div>
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
        <img 
          src={imagen}
          alt="Imagen de ñañEC" 
          width={300} 
        />
      </div>
    );
  }
}

export default Titulo;
