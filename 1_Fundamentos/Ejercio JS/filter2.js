var restaurantes = [
    { nombre: "Restaurante A",  precio: 10 },
    { nombre: "Restaurante B",  precio: 30 },
    { nombre: "Restaurante C",  precio: 20 }];

    var restaurantesFiltrados = restaurantes.filter(restaurante => restaurante.precio >= 20);
    console.log(restaurantesFiltrados);


