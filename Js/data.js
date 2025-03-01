const inp1 = document.getElementById("nombre");
const inp2 = document.getElementById("juego");
const boton = document.getElementById("btn");

// {nombre: 'pepe', juego: 'mario'}

let jugadores = JSON.parse(localStorage.getItem("jugadores") || '[]');

boton.addEventListener("click", (ev) => {
  ev.preventDefault();
  console.log("Guardando jugadores");
  let nuevoJugador = { nombre: inp1.value, juego: inp2.value };
  jugadores.push(nuevoJugador);
  localStorage.setItem("jugadores", JSON.stringify(jugadores));
});

function miFuncion() {
  // no hace nada
}

const miFuncion2 = () => {}; // tampoco hace nada
