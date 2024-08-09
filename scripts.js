const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

function mostrarform() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)";
    form.style.transition = "left 0.5s, transform 0.5s"; // Adiciona transição suave
    mascara.style.visibility = "visible";
}

function esconderForm() {
    form.style.left = "-600px";
    form.style.transform = "translateX(0)";
    form.style.transition = "left 0.5s, transform 0.5s"; // Adiciona transição suave
    mascara.style.visibility = "hidden";
}
