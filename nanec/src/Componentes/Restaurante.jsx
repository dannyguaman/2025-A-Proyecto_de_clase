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
           likes: 0
        };
        //this.handlerLike = this.handlerLike.bind(this);
    // El constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.
    }

    /*handlerLike (){
        this.setState({
            likes: this.state.likes + 1
        });
    }*/
    handlerLike = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    }

    render() {
        const {nombre, direccion, tipo}= this.props;
        return(
        <div>
            <h1>{nombre}</h1>
            <h2>{direccion}</h2>
            <h3>{tipo}</h3>
            <h4>{this.state.likes}</h4>
            <button onClick={this.handlerLike}>Like</button>
        </div>);
    }

}

export default Restaurante;

