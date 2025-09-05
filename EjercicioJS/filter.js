var edades = [12, 15, 18, 20, 25, 30, 35, 40];
var edadesMayores = edades.filter(function(edad) {
    return edad % 2 ==0;
});
console.log(edadesMayores); // [18, 20, 30, 40]