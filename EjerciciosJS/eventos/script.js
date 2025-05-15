/*function welcome() {
    var name = document.getElementById("name").value;
 alert("Hello," + name + "! How are you?");
 }*/

 //pasar a funcion flecha

/*const welcome = () => {
    const name = document.getElementById("name").value;
    alert("Hello," + name + "! How are you?");
 }*/

// Validar edad en la funcion
 const welcome = () => {
      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;

      if (age >= 21)
         {
            alert("Hello, " + name + " u can drink!");
         }
      else 
      {
            alert("Hello, " + name + " u can not drink!");         
      }
 }
