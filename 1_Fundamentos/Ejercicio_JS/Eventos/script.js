/*function welcome() {
    var name = document.getElementById("name").value; 
    alert("Hi, " + name + "!");
}*/
//has la funcion en una funcion flecha
//validar la edad si es mayor de 18 años no saludar y si es menor de 18 años saludar
const welcome = () => {
    const name = document.getElementById("name").value; 
    const age = document.getElementById("edad").value;
    if (age >= 18) {
        alert("Hi, " + name + "!");
    } else {
        alert("You are not allowed to enter");
    }
}