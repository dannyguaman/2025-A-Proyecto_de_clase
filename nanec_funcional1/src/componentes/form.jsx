import React from "react";

const Form = (props) => {
    const { nombre, direccion, tipo, reputacion} = props;
    

    return (
        <form>
            <div className="parametro">
                <label htmlFor="Nombre">Nombre: </label>
                <input type="text" id="Nombre" name="nombre" value={nombre}/>
            </div>
            <div className="parametro">
                <label htmlFor="Direccion">Direccion: </label>
                <input type="text" id="Direccion" name="direccion" value={direccion}/>
            </div>
            <div className="parametro">
                <label htmlFor="Tipo">Tipo: </label>
                <select id="Tipo" name="tipo" value={tipo}>
                    <option value="">Seleccione un tipo</option>
                    <option value="Tradicional">Tradicional</option>
                    <option value="Cafeteria">Cafeteria</option>
                    <option value="Ecuatoriana">Ecuatoriana</option>
                </select>
            </div>
            <div className="parametro">
                <label htmlFor="Reputacion">Reputacion: </label>
                <input type="number" id="Likes" name="reputacion" value={reputacion}/>
            </div>
            <input type="submit" value="Register" />
        </form>
    );

}
export default Form;
