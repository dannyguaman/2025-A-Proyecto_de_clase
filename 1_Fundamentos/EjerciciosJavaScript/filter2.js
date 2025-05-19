var restaurantes = [
    {nombre: "Restaurante A", precio: 10},
    {nombre: "Restaurante B", precio: 20},
{nombre: "Restaurante C", precio: 30}];

/*Mayor30 = restaurantes.filter(function(restaurante){
    return restaurante.precio >= 30;
});*/
Mayor30 = restaurantes.filter(restaurante => {
    return restaurante.precio >= 30
});
console.log(Mayor30);

	
