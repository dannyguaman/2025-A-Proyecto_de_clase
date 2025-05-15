var edades = [20, 30, 34, 8];
var edadesMapeadas = edades.map(function(edad){
    if(edad>=18){
        return edad
    }else{
        return edad+4;
    }
});

console.log(edadesMapeadas);