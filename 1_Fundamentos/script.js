// Vector de restaurantes
const restaurantes = [
  { nombre: "Restaurante El Buen Sabor", tipo: "Tradicional", horario: "12:00 - 22:00", ranking: 4.5 },
  { nombre: "Café del Valle", tipo: "Cafetería", horario: "08:00 - 20:00", ranking: 4 },
  { nombre: "La Parrilla de San José", tipo: "Parrillada", horario: "12:00 - 23:00", ranking: 4.7 },
  { nombre: "Tortillas tradicionales", tipo: "Tradicinal", horario: "13:00 - 21:00", ranking: 4.2 },
  { nombre: "Guadalajara", tipo: "Comida Mexicana", horario: "10:00 - 20:00", ranking: 4.6 },
  { nombre: "Sushi World", tipo: "Comida Japonesa", horario: "11:00 - 22:00", ranking: 4.8 },
  { nombre: "Pasta Fresca", tipo: "Italiana", horario: "12:00 - 21:00", ranking: 4.3 },
  { nombre: "Pizza Express", tipo: "Pizzería", horario: "10:00 - 23:00", ranking: 4.1 },
  { nombre: "El Marisco Feliz", tipo: "Mariscos", horario: "12:00 - 22:00", ranking: 4.9 },
  { nombre: "Dulce Tentación", tipo: "Postres", horario: "10:00 - 20:00", ranking: 4.4 }
];

// Función para renderizar la lista de restaurantes
function renderRestaurantes(lista) {
  const container = document.getElementById('restaurants-container');
  container.innerHTML = ''; // Limpiar contenido anterior

  lista.forEach(restaurante => {
    const restaurantDiv = document.createElement('div');
    restaurantDiv.classList.add('restaurant-item');

    const nombre = document.createElement('h4');
    nombre.textContent = restaurante.nombre;

    const tipo = document.createElement('p');
    tipo.textContent = `Tipo de comida: ${restaurante.tipo}`;

    const horario = document.createElement('p');
    horario.textContent = `Horario: ${restaurante.horario}`;

    const ranking = document.createElement('p');
    ranking.textContent = `Ranking: ${restaurante.ranking}`;

    restaurantDiv.appendChild(nombre);
    restaurantDiv.appendChild(tipo);
    restaurantDiv.appendChild(horario);
    restaurantDiv.appendChild(ranking);

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
      restaurante.nombre.toLowerCase().includes(input) ||
      restaurante.tipo.toLowerCase().includes(input)
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
//funcion para agregar un nuevo restaurante obteniendo por id y push


function addRestaurant(event) {
  event.preventDefault();
  var restaurante = {
    nombre: document.getElementById('nameR').value,
    tipo: document.getElementById('tipoR').value,
    horario: document.getElementById('horarioR').value,
    ranking: parseFloat(document.getElementById('rankingR').value)
  };

  restaurantes.push(restaurante);
  renderRestaurantes(restaurantes); // Actualiza la lista de restaurantes
}
