document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("miFormulario");
    const archivoInput = document.getElementById("archivo");
    const fechaInput = document.getElementById("fecha");
    const mensajeTextarea = document.getElementById("mensaje");
    const button = document.querySelector("button");

    button.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe sin validación
        const archivo = archivoInput.files[0]; // Obtiene el archivo
        const fecha = fechaInput.value.trim();
        const mensaje = mensajeTextarea.value.trim();
        if (!archivo || !fecha || mensaje === "") {
            alert("Debe completar todos los campos."); 
            return;
        }
        const extensionesPermitidas = ["image/png", "application/pdf"];
        if (!extensionesPermitidas.includes(archivo.type)) {
            alert("Error: Solo se permiten archivos PNG o PDF.");
            return;
        }
        alert("Registro exitoso!");
        form.reset();
    });
});
