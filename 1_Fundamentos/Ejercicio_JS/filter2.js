var listaRestaurantes = [
    { nombre: "Restaurante A", tipo: "Comida rápida", precio: 30 },
    { nombre: "Restaurante B", tipo: "Comida rápida", precio: 15 },
    { nombre: "Restaurante C", tipo: "Comida rápida", precio: 20 }
];

//utiliza filter para filtrar los restaurantes que tienen un precio mayor o igual a 20
var restaurantesFiltrados = listaRestaurantes.filter(function (restaurante) {
    return restaurante.precio >= 20;
});
 console.log(restaurantesFiltrados);

//ahora usando una funcion flecha
var restaurantesFiltrados = listaRestaurantes.filter(restaurante => restaurante.precio >= 20);
console.log(restaurantesFiltrados);