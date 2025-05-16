/*dame una lista de restaurantes con 4 atributos*/

var restaurantes = [
    { nombre: "La Pizzeria", tipo: "Italiana", precio: 50, calificacion: 4.5 },
    { nombre: "Sushi World", tipo: "Japonesa", precio: 20, calificacion: 4.8 },
    { nombre: "Taco Palace", tipo: "Mexicana", precio: 15, calificacion: 4.2 },
    { nombre: "Burger House", tipo: "Americana", precio: 25, calificacion: 4.0 }]

    var listaRestaurantesFiltrada = restaurantes.filter(function(restaurante) {
        return restaurante.calificacion <=20
        });

        console.log(listaRestaurantesFiltrada);
        

    