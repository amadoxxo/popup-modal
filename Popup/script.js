document.addEventListener("DOMContentLoaded", function () {
    const botonMostrarPopup = document.getElementById("mostrarPopup");
    const botonCerrarPopup = document.getElementById("cerrarPopup");
    const popup = document.getElementById("miPopup");

    botonMostrarPopup.addEventListener("click", function () {
        popup.style.display = "block";
    });

    botonCerrarPopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
