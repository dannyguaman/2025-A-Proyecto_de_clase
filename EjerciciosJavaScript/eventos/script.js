//function myFunction() { alert("Hello, world!"); }

//function welcome() { var name = document.getElementById("name").value;    alert("Hi, " + name + "!"); }

/*var welcome = () => { //funcion tipo flecha () vacio porque no recibe parametros externos
    var name = document.getElementById("name").value; 
    alert("Hi, " + name + "!");
};*/

var checkAge = () => { //funcion tipo flecha () vacio porque no recibe parametros externos
    var name = document.getElementById("name").value;

    if(age = document.getElementById("age").value >= 18) {
        alert("Hi, " + name + "!" + "you can drink");
        return;
    }else {
        alert("Hi, " + name + "!" + "you can not drink");
    }    
}

