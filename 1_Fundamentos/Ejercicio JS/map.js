var edades = [12, 15, 18, 20, 25, 30, 35, 40];
edades.map(function (edad) {
    if (edad >= 18) {
        console.log(edad + " es mayor de edad");
    } else {
        console.log(edad + " es menor de edad");
    }
});