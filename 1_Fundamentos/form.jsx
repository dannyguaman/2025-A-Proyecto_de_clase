import { useState } from 'react';
const Form = (props) => {
    const { state, setState } = props;
    const [nameTitle, setnameTitle] = useState("");
    const [dirTitle, setLnTitle] = useState("");
    const [tipoTitle, setEdadTitle] = useState("");
    const [repTitle, setETitle] = useState("");
    
    
    const handlerName = (e) => {
        setState({ ...state, 'name': e.target.value });
        if (state.firstName.length < 1) {
            setnameTitle('First name must have at least two characters!');
        } else {
            setFnTitle("");
        }
    }

    const handleLastName = (e) => {
        setState({ ...state, 'lastName': e.target.value });
        if (state.lastName.length < 1) {
            setLnTitle('Last name must have at least two characters!');
        } else {
            setLnTitle("");
        }
    }

    const handleEdad = (e) => {
        setState({ ...state, 'edad': e.target.value });
        if (e.target.value < 18) {          // otra opcion era if (setState.edad < 18) El mensaje no salía porque estabas evaluando el estado antes de que se actualizara, o porque estabas usando mal la función setState. Usa siempre el valor del evento (e.target.value) para validaciones inmediatas.
            setEdadTitle('Eres menor de edad!');
        } else {
            setEdadTitle("");

        }



    }

    const handleEmail = (e) => {
        setState({ ...state, 'email': e.target.value });
        if (state.email.length < 1) {
            setETitle('Email must have at least two characters!');
        } else {
            setETitle("");
        }
    }

    const handlePassword = (e) => {
        setState({ ...state, 'password': e.target.value });
        if (state.password.length < 7) {
            setPTitle('Password must have at least 8 characters!');
        } else {
            setPTitle("");
        }
    }
    const handleConfirmPassword = (e) => {
        if (state.password !== e.target.value) {
            setCpTitle('Password must match!');
        } else {
            setCpTitle("");
        }
    }

    const registerHandler = (e) => {
        e.preventDefault();         //evita que se recargue la pagina al enviar el formulario
        //Code
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "¡Gracias por registrarse!";
        } else {
            return "¡Bienvenido, por favor regístrese!";
        }
    }





    return (
        <form onSubmit={registerHandler}>
            
            <div className="input">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" name="firstName" size={30} onChange={handleFirstName} />
                {
                    <p style={{ color: 'red' }}> {fnTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" name="lastName" size={30} onChange={handleLastName} />
                {
                    <p style={{ color: 'red' }}> {lnTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="edad">Edad: </label>
                <input type="number" name="edad" size={30} onChange={handleEdad} />
                {
                    <p style={{ color: 'red' }}> {edadTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" size={30} onChange={handleEmail} />
                {
                    <p style={{ color: 'red' }}> {eTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" size={30} onChange={handlePassword} />
                {
                    <p style={{ color: 'red' }}> {pTitle}</p>
                }
            </div>
            <div className="input">
                <label htmlFor="confirmPassword">Confirm password: </label>
                <input type="password" name="confirmPassword" size={30} onChange={handleConfirmPassword} />
                {
                    <p style={{ color: 'red' }}> {cPTitle}</p>
                }
            </div>
            {/* <h3>{formMessage()}</h3>        { /*ESTA ES UNA DE LAS FORMAS, se llama a la funcion formMessage, se usa parentesis debido a que se esta llamando a la funcion*/}
            {
                hasBeenSubmitted ?
                    <h3>¡Gracias por registrarse!</h3> :
                    <h3>¡Bienvenido, por favor regístrese!</h3>
                //Omitted code
            }
            <input type="submit" value="Register" />
        </form>
    );
}

export default Form;