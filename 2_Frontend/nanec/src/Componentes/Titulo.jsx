import { Component } from 'react';

class Titulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultas: 0
    };
  }

  manejarClickConsultas = () => {
    this.setState((prevState) => ({
      consultas: prevState.consultas + 1
    }));
  };

  render() {
    const { titulo, descripcion, imagen } = this.props;
    const { consultas } = this.state;
    return (
      <div>
        <h1>{titulo}</h1>
        <p>{descripcion}</p>
        <img 
          src={imagen}
          alt="Imagen de ñañEC" 
          width={300} 
        />
        <p>Consultas realizadas: {consultas}</p>
        <button onClick={this.manejarClickConsultas}>
          Consultar restaurante
        </button>
      </div>
    );
  }
}

export default Titulo;
