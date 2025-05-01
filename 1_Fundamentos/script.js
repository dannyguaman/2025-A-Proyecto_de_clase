// Vector de restaurantes
const restaurantes = [
  { nombre: "Restaurante El Buen Sabor", tipo: "Tradicional", horario: "12:00 - 22:00" },
  { nombre: "Café del Valle", tipo: "Cafetería", horario: "08:00 - 20:00" },
  { nombre: "La Parrilla de San José", tipo: "Parrillada", horario: "12:00 - 23:00" },
  { nombre: "Tortillas tradicionales", tipo: "Tradicinal", horario: "13:00 - 21:00" }
];

//son objetos de Javascript, que contienen atributos: propiedades y valores. En este caso, 
// cada objeto representa un restaurante con su nombre, tipo de comida y horario de atención.
// Función para renderizar la lista de restaurantes
// restaurante[1.0]


function renderRestaurantes(lista) {
  const container = document.getElementById('restaurants-container');  
  //retorna el elemento con el id restaurants-container
  // que se encuentra en el HTML. Este elemento es donde se mostrará la lista de restaurantes.
  container.innerHTML = ''; // Limpiar contenido anterior de lo que este en ese div

  // Definicion de funcion de orden superior: tiene una funcion dentro de otra funcion
  // y la funcion de orden superior recibe como argumento una funcion como parametro.
  // => es una funcion flecha o funcion anonima, que es una forma de definir funciones en Javascript.
//function sumar (x, y){} esto pasado a una funcion anonima es (x, y) => {}
// cuando solo se tiene un argumento se puede omitir los parentesis, por ejemplo: (x) => x + 1
// todo lo que esta dentro de las {} es el cuerpo de la funcion, y lo que esta fuera de las llaves es el nombre de la funcion
// si no hay parametro de entrada, los parentesis son obligatorios, por ejemplo: () => { return 1; }


  lista.forEach(restaurante => {
    const restaurantDiv = document.createElement('div');  // Crea un nuevo elemento div para cada restaurante, y se guarda en la constante tipo div
    restaurantDiv.classList.add('restaurant-item');       // Agrega la clase 'restaurant-item' al div creado para aplicar estilos CSS, es classlist porque es una lista de clases, y add agrega una clase a la lista de clases del elemento.
    
    const nombre = document.createElement('h4'); // Crea un nuevo elemento h4 para el nombre del restaurante
    // y se guarda en la constante tipo nombre del primer elemento
    nombre.textContent = restaurante.nombre;
    
    const tipo = document.createElement('p');  // Crea un nuevo elemento p para el tipo de comida del restaurante
    // y se guarda en la constante tipo del primer elemento
    tipo.textContent = `Tipo de comida: ${restaurante.tipo}`;
    
    const horario = document.createElement('p');  // Crea un nuevo elemento p para el horario del restaurante
    // y se guarda en la constante tipo del primer elemento
    horario.textContent = `Horario: ${restaurante.horario}`;
    
    restaurantDiv.appendChild(nombre);  // Agrega el elemento nombre al div del restaurante
    // appendChild es un metodo que agrega un elemento hijo a un elemento padre, en este caso el nombre es el hijo y restaurantDiv es el padre
    restaurantDiv.appendChild(tipo);
    restaurantDiv.appendChild(horario);
    
    container.appendChild(restaurantDiv); // Agrega el div del restaurante al contenedor principal, es decir, actualizamos el div restaurants-container.
  });
}

// Renderiza la lista completa de restaurantes al cargar la página
renderRestaurantes(restaurantes);

// Función que se ejecuta al enviar el formulario
function handleSubmit(event) {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  const input = document.querySelector('input[name="restaurant-name"]').value.toLowerCase();
  const resultElement = document.getElementById('search-result');

  if (input.trim() === "") {
    resultElement.textContent = "Por favor, ingrese un nombre válido.";
    resultElement.style.color = "red";
    renderRestaurantes(restaurantes); // Muestra la lista completa si el campo está vacío
  } else {
    const resultados = restaurantes.filter(restaurante => 
      restaurante.nombre.toLowerCase().includes(input)
    );

    if (resultados.length > 0) {
      resultElement.textContent = `Mostrando resultados para: "${input}"`;
      resultElement.style.color = "green";
      renderRestaurantes(resultados);
    } else {
      resultElement.textContent = "No se encontraron coincidencias.";
      resultElement.style.color = "red";
      renderRestaurantes([]); // Limpia la lista si no hay coincidencias
    }
  }
}

// Función que cambia la imagen al hacer clic
function changeImage() {
  const imageElement = document.getElementById('main-image');
  imageElement.src = "./img/nuevo_plato.jpg"; // Cambiar la imagen al hacer clic
}
