// Función para limpiar el formulario de contacto
function limpiarFormulario() {  
    document.getElementById('contactForm').reset();  
}  

// Función para manejar el envío del formulario  
function enviarFormulario(event) {  
    event.preventDefault();  // Previene el comportamiento por defecto de envío del formulario  

    // Obtener los valores de los campos del formulario  
    var nombre = encodeURIComponent(document.getElementById('nombre').value);  
    var email = encodeURIComponent(document.getElementById('email').value);  
    var mensaje = encodeURIComponent(document.getElementById('mensaje').value);  

    // Validación simple de los campos  
    if (nombre && email && mensaje) {  
        // Construir la URL con los parámetros  
        var url = `?nombre=${nombre}&email=${email}&mensaje=${mensaje}`;  
        
        // Cambiar la URL en el navegador (sin recargar la página)  
        window.history.pushState({}, '', url);  
        
        limpiarFormulario(); // Limpiar el formulario después de enviar  
    } else {  
        alert('Por favor, llena todos los campos antes de enviar');  
    }  
}  

// Esperamos a que la página esté completamente cargada  
document.addEventListener('DOMContentLoaded', function () {  
    // Asociamos los eventos  
    document.getElementById('clear-btn').addEventListener('click', limpiarFormulario);  // Botón Limpiar  
    document.getElementById('contactForm').addEventListener('submit', enviarFormulario);  // Enviar Formulario  
});  