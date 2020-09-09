const sumaTresValores = () => {
  const values = prompt("Dame la expresion a evaluar");
  alert(`la suma es: ${eval(values)}`);
};

const piedraPapelTijeraGame = () => {
  const validOptions = ["piedra", "papel", "tijeras"];
  const winner = {
    player1: "El Ganador es el jugador 1",
    player2: "El Ganador es el jugador 2",
    draw: "Empate reyes",
  };
  const readChoice = (playerName) => {
    const option = prompt(`${playerName} Elige piedra, papel o tijeras: `);
    if (!validOptions.includes(option)) {
      alert(
        "Opcion no valida: intenta con piedra, papel o tijeras todo en minuscula"
      );
      return readChoice(playerName);
    }
    return option;
  };
  const player1 = readChoice("Jugador 1");
  const player2 = readChoice("Jugador 2");
  if (player1 === player2) {
    return alert(winner.draw);
  }

  if (player1 === "piedra") {
    if (player2 === "papel") {
      return alert(winner.player2);
    }
    return alert(winner.player1);
  } else if (player1 === "papel") {
    // papel
    if (player2 === "piedra") {
      return alert(winner.player1);
    }
    return alert(winner.player2);
  }
  if (player2 === "piedra") {
    return alert(winner.player2);
  }
  alert(winner.player1);
};

const maxNumber = () => {
  const number1 = prompt("Numero 1: ");
  const number2 = prompt("Numero 2: ");
  const number3 = prompt("Numero 3: ");
  // alert(Math.max(number1, number2, number3)); // opcion 1
  const myArray = [number1, number2, number3];
  alert(myArray.sort().reverse()[0]); // opcion 2
};

// sumaTresValores();
// piedraPapelTijeraGame();
// maxNumber();
