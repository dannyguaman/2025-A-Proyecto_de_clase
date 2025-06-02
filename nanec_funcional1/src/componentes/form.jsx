import React from "react";

const Form = ({ state, setState, onSubmit }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState(prev => ({
            ...prev,
            [name]: name === "reputacion" ? parseInt(value, 10) || 0 : value
        }));
    };

    const handleRegistrar = (event) => {
        event.preventDefault();
        const { nombre, direccion, tipo, reputacion } = state;

        if (!nombre || !direccion || !tipo || !reputacion) {
            alert("Todos los campos son obligatorios");
            return;
        }

        if (onSubmit) {
            onSubmit(state);
        }
        // Limpiar el formulario
        setState({
            nombre: "",
            direccion: "",
            tipo: "",
            reputacion: 0
        });
    };

    return (
        <form onSubmit={handleRegistrar}>
            <div className="parametro">
                <label htmlFor="Nombre">Nombre: </label>
                <input type="text" id="Nombre" name="nombre" value={state.nombre} onChange={handleChange} />
            </div>
            <div className="parametro">
                <label htmlFor="Direccion">Direccion: </label>
                <input type="text" id="Direccion" name="direccion" value={state.direccion} onChange={handleChange} />
            </div>
            <div className="parametro">
                <label htmlFor="Tipo">Tipo: </label>
                <select id="Tipo" name="tipo" value={state.tipo} onChange={handleChange}>
                    <option value="">Seleccione un tipo</option>
                    <option value="Tradicional">Tradicional</option>
                    <option value="Cafeteria">Cafeteria</option>
                    <option value="Ecuatoriana">Ecuatoriana</option>
                </select>
            </div>
            <div className="parametro">
                <label htmlFor="Reputacion">Reputacion: </label>
                <input type="number" id="Likes" name="reputacion" value={state.reputacion} onChange={handleChange} />
            </div>
            <input type="submit" value="Register" />
        </form>
    );
};

export default Form;