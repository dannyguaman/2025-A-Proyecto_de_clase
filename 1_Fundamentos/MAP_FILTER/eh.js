var restaurante ={nombre: 'Restaurante San Jose' ,tipo: 'tradicional'}
undefined
    console.log(restaurante)

undefined
var restaurante ={nombre: 'Restaurante San Jose' ,tipo: 'tradicional',horario:'08:00-20:00'}
undefined
console.log(restaurante.horario)

undefined
restaurante["horario"]
'08:00-20:00'
var elevarCuadrado= function(numero){}
undefined
var elevarCuadrado= function (numero){ return numero*numero;}
undefined
elevarCuadrado(9)
81
 var a = [1, 2, 3, 4, 5];
undefined
 a.map(function(x) { return x*x; })
(5) [1, 4, 9, 16, 25]
 a.filter(function(x) { return x % 2 == 0; })
(2) [2, 4]
console.log(a)
VM1320:1 (5) [1, 2, 3, 4, 5]
undefined


var edades =a.map(function(x) { return x*x; })
undefined
console.log(edades)
VM1501:1 (5) [1, 4, 9, 16, 25]
undefined
var edades5 =a.map(function(x) { return x-4; })
undefined
console.log(edades5)
VM1528:1 (5) [-3, -2, -1, 0, 1]
undefined
edades = a.filter(function(x) { return x<=2})
    


edades = a.filter(function(x) { return x<=2})
    

(2) [1, 2]
edades = edades.map(function(x) {return 2-4})
    


edades = edades.map(function(x) {return 2-4})
    

(2) [-2, -2]