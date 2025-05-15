var listaRestaurantes = [
    { nombre: "Restaurante 1", precio: 20 },
    { nombre: "Restaurante 2", precio: 30 },
    { nombre: "Restaurante 3", precio: 15 }
];


var listaRestaurantesesMayor20 = listaRestaurantes.filter(/*function (restaurante)*/restaurante => {
    return restaurante.precio >= 20;
});

console.log(listaRestaurantesesMayor20);

//var listaRestaurantesesMayor20Flecha = listaRestaurantes.filter(restaurante => restaurante.precio >= 20);
//console.log(listaRestaurantesesMayor20Flecha);
