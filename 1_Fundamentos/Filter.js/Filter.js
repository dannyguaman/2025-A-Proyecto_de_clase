var listarestaurante = [
    {nombre: "Restaurante 1", precio: 20},
    {nombre: "Restaurante 2", precio: 50},
    {nombre: "Restaurante 3", precio: 30},
]
var restraurantesFiltrados = listarestaurante.filter(restaurante=>{
    return restaurante.precio < 50;
}
)
console.log(restraurantesFiltrados);


   