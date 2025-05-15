// Vector de restaurantes
const restaurantes = [
  { nombre: "Restaurante El Buen Sabor", tipo: "Tradicional", horario: "12:00 - 22:00",reputacion: 4 },
  { nombre: "Café del Valle", tipo: "Cafetería", horario: "08:00 - 20:00", reputacion: 5 },
  { nombre: "La Parrilla de San José", tipo: "Parrillada", horario: "12:00 - 23:00", reputacion: 2 },
  { nombre: "Tortillas tradicionales", tipo: "Tradicinal", horario: "13:00 - 21:00", reputacion: 3 },
  { nombre: "Lucho´s Pizza", tipo: "Italiana", horario: "11:00 - 22:00", reputacion: 1 },
]; //vector de objetos de javascript

//Funcion para crear un nuevo restaurante tomando los datos del formulario
function crearRestaurante(event) { // Maneja el evento de envío del formulario
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  const nombre = document.getElementById('nombre').value; // Obtener el valor del campo de entrada
  const tipo = document.getElementById('tipo').value; // Obtener el valor del campo de entrada
  const horario = document.getElementById('horario').value; // Obtener el valor del campo de entrada
  const reputacion = parseInt(document.getElementById('reputacion').value,10); // Obtener el valor del campo de entrada

  const nuevoRestaurante = { // Crear un nuevo objeto restaurante
    nombre: nombre,
    tipo: tipo,
    horario: horario,
    reputacion: reputacion,
  };
  restaurantes.push(nuevoRestaurante); // Añadir el nuevo restaurante al array de restaurantes 
  
  renderRestaurantes(restaurantes); // Renderizar la lista actualizada de restaurantes
}


// Función para inicializar el evento del formulario
// Función para renderizar la lista de restaurantes
function renderRestaurantes(lista) {
  const container = document.getElementById('restaurants-container'); // Obtener el contenedor donde se mostrarán los restaurantes
  container.innerHTML = ''; // Limpiar contenido anterior

  lista.forEach(restaurante => { // Iterar sobre cada restaurante en la lista, for eeach es una funcion de orden superior, con una funcion anonima
    const restaurantDiv = document.createElement('div'); // Crear un nuevo div para cada restaurante
    restaurantDiv.classList.add('restaurant-item'); // Añadir clase para estilos
    
    const nombre = document.createElement('h4'); // Crear un elemento h4 para el nombre del restaurante
    nombre.textContent = restaurante.nombre;// Asignar el nombre del restaurante al elemento h4
    
    const tipo = document.createElement('p');// Crear un elemento p para el tipo de comida
    tipo.textContent = `Tipo de comida: ${restaurante.tipo}`;// Asignar el tipo de comida al elemento p
    
    const horario = document.createElement('p');// Crear un elemento p para el horario
    horario.textContent = `Horario: ${restaurante.horario}`;// Asignar el horario al elemento p

    const reputacion = document.createElement('p');
    reputacion.textContent = `Reputación: ${restaurante.reputacion}`;
    
    restaurantDiv.appendChild(nombre); // Añadir el nombre al div del restaurante
    restaurantDiv.appendChild(tipo); // Añadir el tipo de comida al div del restaurante
    restaurantDiv.appendChild(horario); // Añadir el horario al div del restaurante
    restaurantDiv.appendChild(reputacion); 
    
    container.appendChild(restaurantDiv); // Añadir el div del restaurante al contenedor principal
  });
}

// Renderiza la lista completa de restaurantes al cargar la página
renderRestaurantes(restaurantes); // Muestra todos los restaurantes al cargar la página

// Función que se ejecuta al enviar el formulario
function handleSubmit(event) { // Maneja el evento de envío del formulario
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  const input = document.querySelector('input[name="restaurant-name"]').value.toLowerCase();// Obtener el valor del campo de entrada y convertirlo a minúsculas
  const resultElement = document.getElementById('search-result'); // Obtener el elemento donde se mostrarán los resultados de búsqueda

  if (input.trim() === "") {// Verifica si el campo de entrada está vacío
    resultElement.textContent = "Por favor, ingrese un nombre válido.";// Mensaje de error si el campo está vacío
    resultElement.style.color = "red";// Cambia el color del mensaje a rojo
    renderRestaurantes(restaurantes); // Muestra la lista completa si el campo está vacío
  } else {
    const resultados = restaurantes.filter(restaurante => // Filtra la lista de restaurantes
      restaurante.nombre.toLowerCase().includes(input) || restaurante.tipo.toLocaleLowerCase().includes(input)// Verifica si el nombre del restaurante incluye el texto ingresado
    );

    if (resultados.length > 0) {// Si hay resultados
      resultElement.textContent = `Mostrando resultados para: "${input}"`;// Mensaje de éxito con el texto ingresado
      resultElement.style.color = "green";// Cambia el color del mensaje a verde
      renderRestaurantes(resultados);// Muestra los restaurantes que coinciden con la búsqueda
    } else {
      resultElement.textContent = "No se encontraron coincidencias.";// Mensaje de error si no hay coincidencias
      resultElement.style.color = "red";// Cambia el color del mensaje a rojo
      renderRestaurantes([]); // Limpia la lista si no hay coincidencias
    }
  }
}
// Función que cambia la imagen al hacer clic
function changeImage() {// Cambia la imagen al hacer clic
  const imageElement = document.getElementById('main-image');// Obtener el elemento de la imagen
  imageElement.src = "./img/nuevo_plato.jpg"; // Cambiar la imagen al hacer clic
}

