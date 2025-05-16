/*
function myFunction() { alert("Hello, world!"); }
function welcome() { 
    var name = document.getElementById("name").value;    
    alert("Hi, " + name + "!"); 
}
*/
const myFunction = () => { alert("Hello, world!"); }
const saludar = () => { 
    const name = document.getElementById("name").value;    
    alert("Hi, " + name + "!"); 
}

function checkAge() { 
    var userName = document.getElementById("name").value;
    var age = document.getElementById("age").value; 
 if (age < 21) { 
    alert(userName + ", you can't drink!"); 
} else { 
    alert("Hi " + userName + ", drink away!"); 
}
}

