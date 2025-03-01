const inp1 = document.getElementById("nombre");
const inp2 = document.getElementById("juego");
const boton = document.getElementById("btn");
const sectCard = document.getElementById("cards");

// {nombre: 'pepe', juego: 'mario'}

let jugadores = JSON.parse(localStorage.getItem("jugadores") || "[]");

boton.addEventListener("click", (ev) => guardarJugador(ev));

const guardarJugador = (ev) => {
  // mirar si existe o no el jugador (por nombre)
  // hacer lo de abajo  si no existe

  ev.preventDefault();
  console.log("Guardando jugadores");
  let nuevoJugador = { nombre: inp1.value, juego: inp2.value };
  jugadores.push(nuevoJugador);
  localStorage.setItem("jugadores", JSON.stringify(jugadores));
  renderizarJugador(nuevoJugador);
};

const borrarJugador = (ev) => {
  ev.preventDefault();
  // console.log(ev.target.parentElement);
  let nombreJugador = ev.target.parentElement.textContent;
  console.log(nombreJugador);
  jugadores = jugadores.filter((actual) => actual.nombre !== nombreJugador);
  sectCard.removeChild(ev.target.parentElement);
  localStorage.setItem("jugadores", JSON.stringify(jugadores));
};

const renderizarJugador = (j) => {
  // primero el card
  let divJ = document.createElement("div");
  divJ.className = "card";
  divJ.textContent = j.nombre;

  // luego el boton borrar
  let x = document.createElement("button");

  x.addEventListener("click", (ev) => borrarJugador(ev));

  divJ.appendChild(x); // luego al card le pongo como hijo el boton

  // por ultimo añado el card (que ya tiene el boton dentro) al section
  sectCard.appendChild(divJ);
};

const renderizarJugadores = () => {
  for (j of jugadores) {
    renderizarJugador(j);
  }
};

renderizarJugadores();
