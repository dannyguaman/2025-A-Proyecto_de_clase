const saludar = () => {
    var name = document.getElementById("name").value; 
    alert("Hi, " + name + "!");
}

function validadEdad() {
    var edad = document.getElementById("age").value;
    var nombre = document.getElementById("name").value;
    if (edad < 21) {
        alert(nombre+", you can't drink");
    } else {
        alert(nombre+", you can drink"); 
        // Simulación de celebración y felicitaciones
        const celebracion = document.createElement("div");
        celebracion.innerHTML = "🎉 ¡Felicidades, " + nombre + "! Puedes celebrar responsablemente. 🥳";
        celebracion.style.background = "#ffe066";
        celebracion.style.padding = "15px";
        celebracion.style.marginTop = "10px";
        celebracion.style.fontSize = "18px";
        celebracion.style.textAlign = "center";
        document.body.appendChild(celebracion);
    }
}