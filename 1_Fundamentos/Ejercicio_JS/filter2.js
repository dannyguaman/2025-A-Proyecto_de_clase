var listaRestaurantes = [
    { nombre: "Restaurante 1", precio: 20 },
    { nombre: "Restaurante 2", precio: 40 },
    { nombre: "Restaurante 3", precio: 10 }
]

var listaRestaurantesFiltrada = listaRestaurantes.filter(restaurante => {
    return restaurante.precio <= 20
})
console.log(listaRestaurantesFiltrada)
