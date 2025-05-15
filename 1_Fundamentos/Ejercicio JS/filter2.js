var listaRestaurantes = [
    { nombre: "Restaurante A", tipo: "Comida rápida", precio: 10 },
    { nombre: "Restaurante B", tipo: "Comida rápida", precio: 15 },
    { nombre: "Restaurante C", tipo: "Comida rápida", precio: 20 }
]

// que retorne solo restaurantes mayor o igual a 20
var restaurantesFiltrados = listaRestaurantes.filter(function (restaurante) {
    if (restaurante.precio >= 20) {
        console.log(restaurante.nombre + " es mayor o igual a 20");
    }


});

// vamos a cambiar la funcion por una funcion de flecha (anonima)
// la estructura de una funcion de flecha es:
// (parametros) => { return algo; }, si es un solo parametro no es necesario usar los parentesis
// si son varios parametros se deben usar los parentesis, separan por comas
var restaurantesFiltrados = listaRestaurantes.filter((restaurante) => {
    return restaurante.precio >= 20;
});

console.log(restaurantesFiltrados);