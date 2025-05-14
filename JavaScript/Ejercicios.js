var edades = [11, 12, 30, 45, 20];
var valor = edades.map(function(edad) { 
    if (edad >= 18) {
        return edad;
    } else {
        return edad+4;
    }
    })
console.log(valor);

