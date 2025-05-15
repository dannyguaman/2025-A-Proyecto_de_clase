// Conceptos básicos de desestructuración
// a partir de un objeto o vector, desesctructuramos sus propiedades y las asignamos a variables

// ........ destructuracion de objetos ........
// var objeto = { propiedad1: valor1, propiedad2: valor2 }
// var { propiedad1, propiedad2 } = objeto;
// console.log(propiedad1); // valor1
// console.log(propiedad2); // valor2

// ........ destructuracion de arreglos o vectores ........
// para desestructurar un vector, se usa la siguiente sintaxis:
// var vector = [valor1, valor2]
// var [valor1, valor2] = vector;
// console.log(valor1); // valor1 


var restaurante = {
    nombre: "Restaurante A",
    tipo: "Comida rápida",
    precio: 10,
    horario: {
        apertura: "10:00",
        cierre: "22:00"
    },
    menu: [
        { nombre: "Hamburguesa", precio: 10 },
        { nombre: "Papas fritas", precio: 5 },
        { nombre: "Refresco", precio: 2 }
    ]
}


var { nombre } = restaurante;
console.log(nombre); // Restaurante A

var { menu } = restaurante;
console.log(menu); // [ { nombre: 'Hamburguesa', precio: 10 }, { nombre: 'Papas fritas', precio: 5 }, { nombre: 'Refresco', precio: 2 } ]