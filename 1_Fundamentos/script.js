// Vector de restaurantes
const restaurantes = [
  { nombre: "Restaurante El Buen Sabor", tipo: "Tradicional", horario: "12:00 - 22:00", reputacion: 5 },
  { nombre: "Café del Valle", tipo: "Cafetería", horario: "08:00 - 20:00", reputacion: 4 },
  { nombre: "La Parrilla de San José", tipo: "Parrillada", horario: "12:00 - 23:00", reputacion:3 },
  { nombre: "Tortillas tradicionales", tipo: "Tradicinal", horario: "13:00 - 21:00", reputacion:3 }
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

    const reputacion = document.createElement('p');
    reputacion.textContent = `Reputacion: ${restaurante.reputacion}`;
    
    // Crear elemento para las estrellas de reputación
    const estrellas = document.createElement('div');
    estrellas.classList.add('rating-stars');

    for (let i = 0; i < 5; i++) {
      const estrella = document.createElement('span');
      estrella.textContent = i < restaurante.reputacion ? '★' : '☆';
      estrella.style.color = i < restaurante.reputacion ? 'gold' : 'gray';
      estrellas.appendChild(estrella);
    }

    // Agregar los elementos al div del restaurante

    restaurantDiv.appendChild(estrellas);
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
      restaurante.nombre.toLowerCase().includes(input) || restaurante.tipo.toLowerCase().includes(input)
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


function insertarRestaurante() {
  const nombre = document.getElementById('nombre').value;
  const tipo = document.getElementById('tipo').value;
  const horario = document.getElementById('horario').value;
  const reputacion = parseInt(document.getElementById('reputacion').value);

  if (nombre && tipo && horario && reputacion) {
    const nuevoRestaurante = { nombre, tipo, horario, reputacion };
    restaurantes.push(nuevoRestaurante);
    renderRestaurantes(restaurantes);
    alert("Restaurante agregado exitosamente");
  } else {
    alert("Por favor, complete todos los campos.");
  }
}