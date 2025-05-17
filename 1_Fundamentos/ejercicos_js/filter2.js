var restaurantes = [
    {nombre:"Restaurante1",precio:"20"},
    {nombre:"Restaurante2",precio:"40"},
    {nombre:"Restaurante3",precio:"10"}
]


var f = restaurantes.filter(a=>{return a.precio>=10});
console.log(f);