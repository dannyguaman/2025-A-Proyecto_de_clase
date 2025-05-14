/* 
Para ejecutar este código, asegúrate de tener Node.js instalado en tu máquina.
Dar clic derecho en el archivo y seleccionar "Abrir con terminal" o "Abrir con línea de comandos".
Luego, ejecuta el siguiente comando en la terminal: node .\nombre_del_archivo.js
*/


/* ----- FUNCIONES DE ORDEN SUPERIOR ---- */
// una funcion que recibe otra función como argumento o devuelve una función como resultado se considera de orden superior
/* ----- .filter() ---- */
// Definimos un arreglo con diferentes edades
var edades = [12, 15, 18, 20, 25, 30, 35, 40];

// usamos el método filter para recorrer cada elemento del arreglo
edades.filter(function (edad) {
    // Si la edad es mayor o igual a 18
    if (edad >= 18) {
        // Imprime que es mayor de edad
        console.log(edad + " es mayor de edad");
    } 
});