/*function myFunction() {
alert("Hello, world!");
}*/
/*function welcome() {
var name = document.getElementById("name").value; alert("Hi, " + name + "!");
}*/

//funcion flecha
const welcome = () => {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    
    if (age >= 18) {
        alert("Hi, " + name + "!");
    }else{
        alert("No puede ingresar");
    }


}
   
    


