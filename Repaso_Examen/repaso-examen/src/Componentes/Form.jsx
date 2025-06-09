import React from "react";
import './Form.css';


const Form = ({ state, setState, onSubmit }) => {
  const handleAgregar = (event) => {
    event.preventDefault();
    const { Nombre, Foto, Bio, Lenguajes } = state;

    // Validación de campos
    if (!Nombre || !Foto || !Bio) {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Llamada a la función onSubmit para agregar el nuevo desarrollador
    if (onSubmit) {
      onSubmit(state);
    }

    // Limpiar el formulario
    setState({
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
}
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name === "nombre" ? "Nombre" : name === "foto" ? "Foto" : name === "bio" ? "Bio" : name]: value
    }));
  };

  return (
    <form onSubmit={handleAgregar}>
      <div id="nombre-foto">
        <label>Nombre:  </label>
        <input type="text" id="nombre" name="nombre" value={state.Nombre} placeholder="Developer Name" onChange={handleInputChange}/>
        <label>URL Avatar: </label>
        <input type="text" id="foto" name="foto" value={state.Foto} placeholder="Avatar URL" onChange={handleInputChange}/>
      </div>
      <div id="presentacion">
        <label>Preséntate:  </label>
        <textarea id="bio" name="bio" value={state.Bio} placeholder="Biography" aria-multiline="true" rows={2} onChange={handleInputChange}></textarea>
      </div>
      <div id="lenguajes"> 
        <label>Lenguajes:</label>
        <div className="checkbox-group">
          <label><input type="checkbox" name="html" checked={state.Lenguajes.html} onChange={() => setState(prev => ({ ...prev, Lenguajes: { ...prev.Lenguajes, html: !prev.Lenguajes.html } }))} /> HTML</label>
          <label><input type="checkbox" name="javascript" checked={state.Lenguajes.javascript} onChange={() => setState(prev => ({ ...prev, Lenguajes: { ...prev.Lenguajes, javascript: !prev.Lenguajes.javascript } }))} /> JavaScript</label>
          <label><input type="checkbox" name="css" checked={state.Lenguajes.css} onChange={() => setState(prev => ({ ...prev, Lenguajes: { ...prev.Lenguajes, css: !prev.Lenguajes.css } }))} /> CSS</label>
          <label><input type="checkbox" name="node" checked={state.Lenguajes.node} onChange={() => setState(prev => ({ ...prev, Lenguajes: { ...prev.Lenguajes, node: !prev.Lenguajes.node } }))} /> Node.js</label>
          <label><input type="checkbox" name="mongodb" checked={state.Lenguajes.mongodb} onChange={() => setState(prev => ({ ...prev, Lenguajes: { ...prev.Lenguajes, mongodb: !prev.Lenguajes.mongodb } }))} /> MongoDB</label>
        </div>
      </div>
      <div id="boton">
      <button type="submit">Add Developer</button>
      </div>
    </form>
  );
}
export default Form;