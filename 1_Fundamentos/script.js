// Vector de restaurantes, este vector contiene objetos de java script con formato json 
// Esta constante es una funcion anónima que hace uso de funciones flecha 
const restaurantes = [
  { nombre: "Restaurante Pancho Villa", tipo: "Tradicional", horario: "12:00 - 22:00", reputacion:5 },
  { nombre: "Café del Valle", tipo: "Cafetería", horario: "08:00 - 20:00", reputacion:4 },
  { nombre: "La Parrilla de San José", tipo: "Parrillada", horario: "12:00 - 23:00", reputacion:3 },
  { nombre: "Tortillas tradicionales", tipo: "Tradicinal", horario: "13:00 - 21:00", reputacion:4 },
  { nombre: "Pasta y Pizza", tipo: "Italiana", horario: "11:00 - 22:00", reputacion:5 },
];

// Función para renderizar la lista de restaurantes
function renderRestaurantes(lista) {
  const container = document.getElementById('restaurants-container');
  container.innerHTML = ''; // Limpiar contenido anterior

  // Esto es un funcion flecha que recorre el vector de restaurantes y crea un div para cada uno de ellos
  lista.forEach(restaurante => {
    const restaurantDiv = document.createElement('div');
    restaurantDiv.classList.add('restaurant-item');
    
    const nombre = document.createElement('h4');
    nombre.textContent = restaurante.nombre;
    
    const tipo = document.createElement('p');
    tipo.textContent = `Tipo de comida: ${restaurante.tipo}`;
    
    const horario = document.createElement('p');
    horario.textContent = `Horario: ${restaurante.horario}`;

    const reputacion = document.createElement('p');
    reputacion.classList.add('reputacion'); // Añadir clase para estilos
    reputacion.classList.add('span'); // Añadir clase para estilos
    reputacion.textContent = `Reputación: ${'★'.repeat(restaurante.reputacion)}`; // Muestra estrellas según la reputación
    

    restaurantDiv.appendChild(nombre);
    restaurantDiv.appendChild(tipo);
    restaurantDiv.appendChild(horario);
    restaurantDiv.appendChild(reputacion);
    
    container.appendChild(restaurantDiv);
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
