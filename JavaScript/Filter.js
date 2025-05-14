var a = [1, 2, 3, 4, 5];
var elemento = a.filter(function(x) { 
    return x % 2 == 0; 
});
console.log(elemento);