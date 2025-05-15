var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
});
console.log(pares); // [2, 4, 6, 8, 10]