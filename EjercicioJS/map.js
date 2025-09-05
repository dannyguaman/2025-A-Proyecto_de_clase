var edades = [12, 15, 18, 20, 25, 30, 35, 40];
var edadesMapeadas = edades.map(function(edad) {
    if (edad < 18) {
        return edad+4;
    }
    else{
        return edad;
    }
});
console.log(edadesMapeadas); // [16, 19, 18, 20, 25, 30, 35, 40]