/*function welcome() {
var name = document.getElementById("name").value; alert("Hi, " + name + "!");
}*/


const welcome = () => {
    var name = document.getElementById("name").value; 
    //alert("Hi, " + name + "!");
    var edad = document.getElementById("edad").value;
    if(edad < 18){
        alert("hola "+name+" Eres menor de edad y no puedes tomar un wiskitullito");
    }else{
        alert("hola "+name+" Eres mayor de edad y puedes tomar un wiskitullito");
    }
}
