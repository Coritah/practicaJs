const inp1 = document.getElementById("nombre");
const inp2 = document.getElementById("juego");
const boton = document.getElementById("btn");
const sectCard = document.getElementById("cards");

// {nombre: 'pepe', juego: 'mario'}

let jugadores = JSON.parse(localStorage.getItem("jugadores") || "[]");

boton.addEventListener("click", (ev) => guardarJugador(ev));

const guardarJugador = (ev) => {
  ev.preventDefault();
  if (
    jugadores.find((j) => j.nombre === inp1.value) !== undefined ||
    inp1.value === ""
  ) {
    alert("No puedes ejecutar esta acción❌ " + inp1.value);
  } else {
    let nuevoJugador = { nombre: inp1.value, juego: inp2.value };
    jugadores.push(nuevoJugador);
    localStorage.setItem("jugadores", JSON.stringify(jugadores));
    renderizarJugador(nuevoJugador);
  }
};
// mirar si existe o no el jugador (por nombre)
// hacer lo de abajo  si no existe

const borrarJugador = (ev) => {
  ev.preventDefault();

  console.log(ev.target.parentElement);
  //   let nombreJugador = ev.target.parentElement.innerText;
  //   nombreJugador = nombreJugador.slice(0, nombreJugador.length - 1);
  let nombreJugador = ev.target.dataset.nombre;
  console.log(nombreJugador);
  jugadores = jugadores.filter(
    (actual) => actual.nombre !== nombreJugador.trim()
  );
  console.log(jugadores);
  localStorage.setItem("jugadores", JSON.stringify(jugadores));
  sectCard.removeChild(ev.target.parentElement);
};

const renderizarJugador = (j) => {
  // primero el card
  let divJ = document.createElement("div");
  divJ.className = "card";
//   divJ.classList.add = "mostrar";
  divJ.innerHTML = `<p>Player: ${j.nombre}</p> <p> Game: ${j.juego} </p>`;
  //   agregar una p para ejuego ****************

  // luego el boton borrar
  let x = document.createElement("button");
  x.classList.add("rosa");
  x.textContent = `X`;
  x.dataset.nombre = j.nombre;
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
