// React solo es una librería de JavaScript para construir interfaces de usuario, 
// no es un framework completo como Angular o Vue.js. 
// Por lo tanto, no tiene un concepto de "módulos" como tal,
//  pero puedes organizar tu código en componentes y archivos para mantenerlo modular y reutilizable.
import React from "react";
import "./Restaurante.css";

class Restaurante extends React.Component {
    // La desestructuración es una sintaxis de JavaScript que permite extraer valores de un objeto o un array y asignarlos a variables individuales.
    // En el contexto de React, se utiliza comúnmente para extraer props de un componente.
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            variable: true
        };
        // this.handlerLike = this.handlerLike.bind(this);
    }
    // funcion anonima
    handlerLike = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    }
    /* handlerLike() {
         this.setState({
             likes: this.state.likes + 1
         });
     }
         */

    render() {
        const { nombre, direccion, tipo, imagen } = this.props;
        return (
            <div>
                <h1>{nombre}</h1>
                <h2>{direccion}</h2>
                <h3>{tipo}</h3>
                <h4>{this.state.likes}</h4>
                <button onClick={this.handlerLike}>like</button>
                {imagen && <img src={imagen} alt="Imagen del restaurante" className="imagen-restaurante" />}
            </div>);
    }
}

export default Restaurante;

