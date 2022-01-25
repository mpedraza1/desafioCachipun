//Le pedimos al jugador que elija las veces que va a jugar
let numJuegos = parseInt(prompt("Elija cuantas veces quiere jugar: 1, 2 o 3."));

//Definimos las reglas del juego
function juego(jugador, maquina) {
  if (!jugador) return;

  if (jugador === maquina) {
    console.log("empate");
  } else if (jugador === "papel" && maquina === "piedra") {
    console.log("ganaste");
  } else if (jugador === "tijera" && maquina === "papel") {
    console.log("ganaste");
  } else if (jugador === "piedra" && maquina === "tijera") {
    console.log("ganaste");
  } else {
    console.log("perdiste");
  }
}

//Aqui definimos las veces que el usuario quiere jugar
while (numJuegos > 0 && numJuegos <= 3) {

  //De aqui se obtendrá el lenght para que la maquina pueda elegir una opcion de 0 a 2
  let cachipun = ["piedra", "papel", "tijera"];

  //Le pedimos al jugador que elija la opción que quiere jugar
  let jugador = prompt("Escriba: piedra o papel o tijera");

  //La maquina elije su opción con Math.random, la cual obtiene del orden de lenght
  let maquina = cachipun[Math.floor(Math.random() * (0, cachipun.length - 1))];

  console.log(`Has elegido ${jugador} y la maquina ha elegido ${maquina}`);
  //Aqui vamos descontando las "vidas" del juego
  numJuegos = numJuegos - 1;

  juego(jugador, maquina);
}
// con este IF decimos que no se puede escoger mas de 3 "vidas"
if (numJuegos > 3) {
  console.log("El maximo de juegos es 3");
}
