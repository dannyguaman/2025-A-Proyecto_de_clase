function myFunction() {
alert("Hello, world!");
}

// funciona anonima 
const welcome = () => {

var edad = document.getElementById("edad").value;
if (edad >= 18) {
    var name = document.getElementById("name").value; alert("Hi, " + name + "!"+" you can drink");
} else {

    var name = document.getElementById("name").value; alert("Hi, " + name + "!"+" you cannot drink");
}


}