import React, {useState} from "react";
import './tarjeta.css';
const html_icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png';
const js_icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascriptshield.svg/1200px-Javascript-shield.svg.png';
const css_icon = 'https://i.pinimg.com/originals/eb/7e/20/eb7e20e646f5b7ec9ed4f8f78a5dee8f.png';
const node_icon = 'https://icon-library.com/images/nodejs-icon/nodejsicon-17.jpg';
const mongo_icon = 'https://cdn.iconicons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png';



function Tarjeta (props) {
  const{ Nombre, Foto, Bio, Lenguajes } = props;
  const handleEliminar = () => {
    if (props.onEliminar) {
      props.onEliminar();
    }
  };

  return (
    <div id="tarjeta">
      <div id="estructura">
        <img id="avatar" src={Foto} alt="Avatar" />
        <div id="descripcion">
          <h3>{Nombre}</h3>
          {Lenguajes.html && <img id="logo" src={html_icon} alt="HTML" width="30" height="30" />}
          {Lenguajes.javascript && <img id="logo" src={js_icon} alt="JavaScript" width="30" height="30" />}
          {Lenguajes.css && <img id="logo" src={css_icon} alt="CSS" width="30" height="30" />}
          {Lenguajes.node && <img id="logo" src={node_icon} alt="Node.js" width="30" height="30" />}
          {Lenguajes.mongodb && <img id="logo" src={mongo_icon} alt="MongoDB" width="30" height="30" />}
        </div>
      </div>
      <div>
        <p id="bio">{Bio}</p>
      </div>
      <div id="boton">
       <button onClick={handleEliminar}>Eliminar</button>
      </div>
    </div>
  );
}
export default Tarjeta;