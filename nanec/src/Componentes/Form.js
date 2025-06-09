import {useState} from 'react';

const Form = (props) => {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [tipo, setTipo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({ nombre, direccion, tipo, imagen });
        setNombre('');
        setDireccion('');
        setTipo('');
    };

    return (
        <form onSubmit={registerHandler}>  
            <div className="input">
                <label htmlFor="Nombre">Nombre: </label>
                <input type="text" name="Nombre" size={30} onChange={(e) => setNombre(e.target.value)} />
                {
                    <p style={{ color: 'red' }}> {fnTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="Direccion">Dirección: </label>
                <input type="text" name="Direccion" size={30} onChange={(e) => setDireccion(e.target.value)} />
                {
                    <p style={{ color: 'red' }}> {fnTitle}</p>
                }  
            </div>
        </form>
    );
}