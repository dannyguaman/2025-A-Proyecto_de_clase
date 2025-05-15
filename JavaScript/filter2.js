var restau = [ 
    {nombre: "Restaurante 1", precio: 10, calificacion: 4.5},
    {nombre: "Restaurante 2", precio: 23, calificacion: 4.0},        
    {nombre: "Restaurante 3", precio: 205, calificacion: 3.5},   
]
/*var elemento = restau.filter(function(x) {
    return x.precio >= 20; 
})*/
var elemento = restau.filter((x) => x.precio >= 20); //operador flecha


console.log(elemento);

