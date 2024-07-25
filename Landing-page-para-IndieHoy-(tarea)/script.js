//transicion de la portada

document.addEventListener("DOMContentLoaded", function () {
  var imagenes = document.querySelectorAll(".imagen-fondo");

  var index = 0;

  function mostrarSiguienteImagen() {
    imagenes[index].classList.remove("imagen-visible");

    index = (index + 1) % imagenes.length;

    imagenes[index].classList.add("imagen-visible");
  }

  imagenes[0].classList.add("imagen-visible");

  setInterval(mostrarSiguienteImagen, 5000);
});

//PopUp
const abrir1 = document.getElementById("abrir");
const abrir2 = document.getElementById("abrirdos");
const cerrar = document.getElementById("cerrar");
const overlaypop = document.getElementById("overlay-pop");
const popup = document.getElementById("popup");

function abrirpopup() {
  overlaypop.style.display = "flex";
  popup.style.display = "flex";
  popup.style.animation = "slideDown 0.8s ease forwards"; //abre
}

abrir1.addEventListener("click", function () {
  abrirpopup();
});

abrir2.addEventListener("click", function () {
  var input_maildos = document.getElementById("maildos").value;
  var mail = document.getElementById("mail");

  mail.value = input_maildos;

  abrirpopup();
});

cerrar.addEventListener("click", () => {
  elemento_feedback = document.getElementById("feedback");
  elemento_feedback.classList.add("oculto");

  elemento_formulario = document.getElementById("form");
  elemento_formulario.classList.remove("oculto");

  document.getElementById("nombre").value = "";
  document.getElementById("mail").value = "";
  document.getElementById("maildos").value = "";

  document.getElementById("ciudades").value = "";

  var checkbox = document.querySelectorAll(".opciones");

  checkbox.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  setTimeout(() => {
    overlaypop.style.display = "none";
    popup.style.display = "none";
    popup.style.animation = ""; // reinicio
  }, 0);
});

//Click afuera overlay
document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("overlay");
  var info = document.getElementById("info");

  window.addEventListener("click", function (event) {
    if (
      event.target !== overlay &&
      event.target !== info &&
      !overlay.contains(event.target)
    ) {
      info.checked = false;
    }
  });
});

//ciudades
document
  .getElementById("ciudades")
  .addEventListener("change", function (event) {
    var ubicacionelegida = event.target.value;
  });

//Formulario
var input_nombre = document.getElementById("nombre");
var input_mail = document.getElementById("mail");
var input_ciudades = document.getElementById("ciudades");
var input_submit = document.getElementById("enviar");

console.log(input_nombre);
console.log(input_mail);
console.log(input_submit);

input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event) {
  event.preventDefault();

  if (
    input_nombre.value.trim() === "" ||
    input_mail.value.trim() === "" ||
    input_ciudades.value.trim() === ""
  ) {
    input_nombre.reportValidity();
    input_mail.reportValidity();
    input_ciudades.reportValidity();
    return;
  }
  var valor_nombre = input_nombre.value;
  var valor_mail = input_mail.value;

  console.log(valor_nombre);
  console.log(valor_mail);

  var placeholder_nombre = document.getElementById("nombre-placeholder");
  var placeholder_mail = document.getElementById("mail-placeholder");

  placeholder_nombre.innerHTML = valor_nombre;
  placeholder_mail.innerHTML = valor_mail;

  elemento_feedback = document.getElementById("feedback");
  elemento_feedback.classList.remove("oculto");

  elemento_formulario = document.getElementById("form");
  elemento_formulario.classList.add("oculto");
}
