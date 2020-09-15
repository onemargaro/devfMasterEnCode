const isPalindrome = (sentence) =>
  sentence.toLowerCase() ===
  sentence.toLowerCase().split("").reverse().join("");

const longestCountry = (countries) => {
  countries.sort((a, b) => b.length - a.length);
  return countries[0];
};
console.log(longestCountry(["Mexico", "Panama", "El Salvador", "Guatemala"]));

const piedraPapelTijeraGame = () => {
  const PLAYER_1 = "Jugador 1";
  const PLAYER_2 = "Jugador 2";
  const validOptions = ["piedra", "papel", "tijeras"];
  const winner = {
    player1: `El Ganador es el ${PLAYER_1}`,
    player2: `El Ganador es el ${PLAYER_2}`,
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
  const player1 = readChoice(PLAYER_1);
  const player2 = readChoice(PLAYER_2);
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

const convertFaharenheitToCelsius = (faharenheit) =>
  ((faharenheit - 32) * 5) / 9;

const TEMP_F = 98.6;
console.log(`${TEMP_F} F = ${convertFaharenheitToCelsius(TEMP_F)} C`);
