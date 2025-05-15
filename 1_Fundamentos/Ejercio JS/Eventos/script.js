const saludar = () => {
    var name = document.getElementById("name").value; 
    alert("Hi, " + name + "!");
}

function validadEdad() {
    var edad = document.getElementById("age").value;
    var nombre = document.getElementById("name").value;
    if (edad < 21) {
        alert(nombre+", you can't drink");
    } else {
        alert(nombre+", you can drink"); 
    }
}