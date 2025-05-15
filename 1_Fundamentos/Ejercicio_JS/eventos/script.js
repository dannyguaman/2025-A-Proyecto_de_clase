const welcome = () => {
    var name = document.getElementById("name").value;
    alert("Hi, " + name + "!");
}

function checkage() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    if (age >= 18) {
        alert("Hola, " + name + "! Eres mayor de edad.");
    } else {
        alert("Hola, " + name + "! Eres menor de edad.");
    }
}