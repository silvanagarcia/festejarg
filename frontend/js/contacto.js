// ============================================================
// Formulario de contacto: valida los campos con JavaScript y
// muestra un mensaje de confirmación. (Sin backend todavía:
// los datos no se envían a ningún lado, solo se simula.)
// ============================================================

const form = document.getElementById("formContacto");
const formMsg = document.getElementById("formMsg");

if (form) {
    form.addEventListener("submit", function (evento) {
        evento.preventDefault(); // Evita que la página se recargue

        // Leer los valores
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const tipo = document.getElementById("tipo").value;

        // Validaciones simples
        if (nombre === "") {
            mostrarMensaje("Por favor, escribí tu nombre.", "error");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            mostrarMensaje("Ingresá un email válido (debe tener @ y un punto).", "error");
            return;
        }

        if (tipo === "") {
            mostrarMensaje("Elegí el tipo de evento.", "error");
            return;
        }

        // Si todo está bien: confirmación y limpiar el formulario
        mostrarMensaje(`¡Gracias ${nombre}! Recibimos tu solicitud y te contactamos pronto. 🎉`, "ok");
        form.reset();
    });
}

// Función reutilizable para mostrar el mensaje con estilo según el caso
function mostrarMensaje(texto, tipo) {
    formMsg.textContent = texto;
    formMsg.className = "form-msg " + tipo; // "form-msg ok" o "form-msg error"
}
