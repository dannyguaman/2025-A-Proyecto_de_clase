// Vector de restaurantes
//Objeto de javascript
//Se parece a un JASON (CLAVE,SECCION)
const restaurantes = [
  { nombre: "Restaurante El Buen Sabor", tipo: "Tradicional", horario: "12:00 - 22:00",reputacion: 2 },
  { nombre: "Café del Valle", tipo: "Cafetería", horario: "08:00 - 20:00", reputacion: 3 },
  { nombre: "La Parrilla de San José", tipo: "Parrillada", horario: "12:00 - 23:00", reputacion: 4 },
  { nombre: "Tortillas tradicionales", tipo: "Tradicinal", horario: "13:00 - 21:00", reputacion: 5 },

];

// Función para renderizar la lista de restaurantes
function renderRestaurantes(lista) {
  
  const container = document.getElementById('restaurants-container');
  // Limpiar el contenedor antes de agregar nuevos elementos
  // Se utiliza para evitar que se repitan los elementos al filtrar
  container.innerHTML = ''; // Limpiar contenido anterior

  // Crear un elemento para mostrar el resultado de la búsqueda
  // Se utiliza para mostrar el resultado de la búsqueda
  // el forcEach es una funcion de orden superior que se utiliza para recorrer un array, por lo que se le pasa una funcion como argumento
  // funcion lambda => { } es una funcion de flecha que se utiliza para crear funciones anónimas
  lista.forEach(restaurante => {
    const restaurantDiv = document.createElement('div'); // Crear un nuevo div para cada restaurante
    restaurantDiv.classList.add('restaurant-item'); // agregar una clase al div para darle no solo un estilo, sino varios estilos (classList)
    
    const nombre = document.createElement('h4'); // Crear un nuevo elemento html h4 para el nombre del restaurante
    nombre.textContent = restaurante.nombre; // Asignar el nombre del restaurante al elemento h4
    
    const tipo = document.createElement('p'); // Crear un nuevo elemento html p para el tipo de comida
    tipo.textContent = `Tipo de comida: ${restaurante.tipo}`; // Asignar el tipo de comida al elemento p
    
    const horario = document.createElement('p'); // Crear un nuevo elemento html p para el horario variable invertida con el nombre de la variable
    horario.textContent = `Horario: ${restaurante.horario}`;// Asignar el horario al elemento p 

    restaurantDiv.appendChild(nombre); // Agregar el elemento h4 al div del restaurante 
    restaurantDiv.appendChild(tipo); // Agregar el elemento p del tipo de comida al div del restaurante
    restaurantDiv.appendChild(horario); // Agregar el elemento p del horario al div del restaurante

    
    //agrega un nuevo atributo al div del restaurante llamado reputacion y le asigna un valor de 5
    restaurantDiv.setAttribute('reputacion', '5'); // Agregar un nuevo atributo al div del restaurante  
    
    
    container.appendChild(restaurantDiv); // Agregar el div del restaurante al contenedor principal, aqui se actualiza el DOM
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
