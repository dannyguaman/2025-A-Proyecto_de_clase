var listaRestaurantes = [
    { nombre: "Restaurante A", precio: 35 },
    { nombre: "Restaurante B", precio: 15 },
    { nombre: "Restaurante C", precio: 20 },
]

var listaRestaurantesFiltrada = listaRestaurantes.filter(function(restaurante){
    if(restaurante.precio >= 20){
        return restaurante;
    } 
})

console.log(listaRestaurantesFiltrada);


var listaRestaurantesFiltradaFlecha = listaRestaurantes.filter(restaurante => restaurante.precio >= 20);
console.log(listaRestaurantesFiltradaFlecha);