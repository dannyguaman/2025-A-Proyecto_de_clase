//La idea basica tras la desestructuracion es que podemos extraer propiedades de un objeto y asignarlas a variables
//de una manera mas sencilla y legible que usando la notacion de punto
//Ejemplo de desestructuracion de un objeto Restaurante
var restaurante = { nombre: "Restaurante A",  precio: 10 };

//Desestructuracion de un objeto
var { nombre, precio } = restaurante;
console.log(nombre); // "Restaurante A"
console.log(precio); // 10

