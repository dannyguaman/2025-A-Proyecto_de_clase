function myFunction() {
    alert("Hello, world!");
}

/*function welcome() {
    var name = document.getElementById("name").value;
    alert("Hi, " + name + "!");
}*/

//cambiar la funcion welcome por tipo flecha

const welcome = () => {
    var userName = document.getElementById("name").value;  // en este caso son obligatorios los () porque no hay parametrosa
    var userAge = document.getElementById("age").value; // aqui desestructuramos el objeto para obtener la edad
    if (userAge > 18) {

        alert("Hi, " + userName + "!" + " You are an adult.");
    } else {
        alert("Hi, " + userName + "!" + " You are a minor.");
    }

}