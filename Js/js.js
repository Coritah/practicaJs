document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("boton");
  let contador = 0; // Variable para contar las veces que se mueve el botón

  boton.addEventListener("mouseenter", () => {
    if (contador < 5) {
      // Solo se mueve si el contador es menor que 5
      const nuevaX = Math.random() * (window.innerWidth - boton.clientWidth);
      const nuevaY = Math.random() * (window.innerHeight - boton.clientHeight);

      boton.style.position = "absolute"; // Asegurar que el botón pueda moverse
      boton.style.left = `${nuevaX}px`;
      boton.style.top = `${nuevaY}px`;

      console.log("Se movió el botón");

      contador++; // Incrementamos la variable
    } else {
      console.log("Ya no se mueve más");
    }
  });
});
