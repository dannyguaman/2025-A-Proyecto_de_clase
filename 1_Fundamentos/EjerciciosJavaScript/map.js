var edades = [12, 15, 18, 20, 25, 30];
var Edadesmapeadas = edades.map(function (edad) {
    if (edad < 18) {
        return edad + 4;
        }
    });

    console.log(Edadesmapeadas);