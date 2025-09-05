var welcome =() => {
     var name = document.getElementById("name").value;    
    alert("Hi, " + name + "!");
}
var verificarEdad = () => {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    if (age >= 18) {
        alert("Hi " + name + " Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}