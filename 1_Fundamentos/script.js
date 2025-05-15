// Vector de restaurantes //Vector de objetos de java Script
const restaurantes = [
  { nombre: "Restaurante El Buen Sabor", tipo: "Tradicional", horario: "12:00 - 22:00", reputacion: 1 },
  { nombre: "Café del Valle", tipo: "Cafetería", horario: "08:00 - 20:00",reputacion: 3},
  { nombre: "La Parrilla de San José", tipo: "Parrillada", horario: "12:00 - 23:00", reputacion: 2 },
  { nombre: "Tortillas tradicionales", tipo: "Tradicinal", horario: "13:00 - 21:00", reputacion: 4},
  { nombre: "Sabores Zuleteños", tipo: "Tradicinal", horario: "10:00 - 18:00", reputacion: 5},

];
console.log("Si");
// Función para renderizar la lista de restaurantes
function renderRestaurantes(lista) { 
  const container = document.getElementById('restaurants-container');// 
  container.innerHTML = ''; // Limpiar contenido anterior

  lista.forEach(restaurante => {  //Funcion de orden superior (restaruante es una funcion anonima )
    const restaurantDiv = document.createElement('div'); // Constante 
    restaurantDiv.classList.add('restaurant-item'); // <div class = "restarant-item> </div>"
    
    const nombre = document.createElement('h4');
    nombre.textContent = restaurante.nombre;
    
    const tipo = document.createElement('p');
    tipo.textContent = `Tipo de comida: ${restaurante.tipo}`;
    
    const horario = document.createElement('p');
    horario.textContent = `Horario: ${restaurante.horario}`;

    const reputacion = document.createElement('p'); // 
    reputacion.textContent = `Reputacion: ${restaurante.reputacion}`; // 
    
    
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
function handleSubmit(event) {// Se ejecuta al enviar el formulario
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  const input = document.querySelector('input[name="restaurant-name"]').value.toLowerCase(); // Obtiene el valor del input y lo convierte a minúsculas
  const resultElement = document.getElementById('search-result');
  console.log(document.querySelector('input[name="restaurant-name"]'));
   console.log("nombre");
  if (input.trim() === "") {
    resultElement.textContent = "Por favor, ingrese un nombre válido.";
    resultElement.style.color = "red";
    renderRestaurantes(restaurantes); // Muestra la lista completa si el campo está vacío
  } else {
    
    const resultados = restaurantes.filter(restaurante =>
      restaurante.nombre.toLowerCase().includes(input) || // Filtra por nombre
      restaurante.tipo.toLowerCase().includes(input) // Filtra por tipo de comida
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



// Función para manejar la creación de un nuevo restaurante
function handleCreateRestaurant(event) {
  event.preventDefault();

  const name = document.getElementById('create-restaurant-name').value.trim(); //
  const type = document.getElementById('create-restaurant-type').value.trim();
  const hours = document.getElementById('create-restaurant-hours').value.trim();
  const reputation = parseInt(document.getElementById('create-restaurant-reputation').value, 10);

  const resultElement = document.getElementById('search-result'); // Elemento para mostrar mensajes

  if (!name || !type || !hours || isNaN(reputation) || reputation < 1 || reputation > 5) {
    resultElement.textContent = "Por favor, complete todos los campos correctamente.";
    resultElement.style.color = "red";
    return;
  }

  const nuevoRestaurante = {
    nombre: name,
    tipo: type,
    horario: hours,
    reputacion: reputation
  };

  restaurantes.push(nuevoRestaurante);

  resultElement.textContent = `Restaurante "${name}" agregado exitosamente.`;
  resultElement.style.color = "green";

  renderRestaurantes(restaurantes);

  event.target.reset();
}



