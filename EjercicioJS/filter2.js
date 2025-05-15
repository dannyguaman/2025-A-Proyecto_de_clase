var listaRestaurantes = [
    {nombre: "Restaurante 1", precio: 10},
    {nombre: "Restaurante 2", precio: 20},
    {nombre: "Restaurante 3", precio: 30},
    {nombre: "Restaurante 4", precio: 10},
] 
var filtrada = listaRestaurantes.filter(restaurante => {
    return restaurante.precio >= 30;
})
console.log(filtrada);
