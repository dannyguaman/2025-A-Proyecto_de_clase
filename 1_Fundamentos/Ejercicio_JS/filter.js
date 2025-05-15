var edades = [20, 30, 34, 8];
var mayores18Años = edades.filter(function(edad){
    return edad>=18;
});
console.log(mayores18Años);            