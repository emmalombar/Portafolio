//fecha header
function actualizarFecha() {
  const hoy = new Date();
  const opciones = { year: "numeric", month: "numeric", day: "numeric" };
  const fechaFormateada = hoy.toLocaleDateString("es-ES", opciones);
  document.getElementById("fecha").innerText = fechaFormateada;
}

actualizarFecha();
setInterval(actualizarFecha, 60000);

// Script para manejar la navbar
document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const contents = document.querySelectorAll(".contents");

  // Manejar el clic en los elementos de navegación
  navItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();

      navItems.forEach((item) => item.classList.remove("active"));

      item.classList.add("active");

      contents.forEach((content) => content.classList.remove("show"));

      // Obtener el id del contenido relacionado con el elemento clickeado
      const sectionId = item.getAttribute("data-section");

      // Mostrar el contenido correspondiente
      const section = document.getElementById(sectionId + "-section");
      if (section) {
        section.classList.add("show");
      }
    });
  });

  document.querySelector('.nav-item[data-section="home"]').click();
});


//Scroll para carrusel

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carrusel');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      carousel.classList.add('active');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
  
    carousel.addEventListener('mouseleave', () => {
      isDown = false;
      carousel.classList.remove('active');
    });
  
    carousel.addEventListener('mouseup', () => {
      isDown = false;
      carousel.classList.remove('active');
    });
  
    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Velocidad de desplazamiento ajustable
      carousel.scrollLeft = scrollLeft - walk;
    });
  });
  