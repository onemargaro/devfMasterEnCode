const request = require("request");
const POKE_API = "https://pokeapi.co/api/v2/pokemon";
const BOOK_API = "http://openlibrary.org/search.json";
const AUDIO_API = "http://www.theaudiodb.com/api/v1/json/1/search.php";
const SWAPI_API = "https://swapi.dev/api";
const NASA_API_KEY = "lqefrHrY5z4rxa6ySWcckHlkxR0dEcr6mgmJ6nju";
const NASA_API = "https://api.nasa.gov/neo/rest/v1/feed";
const ERROR = new Error("Something went wrong");

const hasError = (err, response) => {
  if (err) return true;
  if (response.statusCode !== 200) return true;
  return false;
};

const ejercicio1 = () => {
  try {
    const numberPokemon = 150;
    const { href } = new URL(`${POKE_API}/${numberPokemon}`);
    request.get(href, (err, response, body) => {
      if (hasError(err, response)) {
        throw Error;
      }
      const data = JSON.parse(body);
      const types = data.types.map(({ type }) => type.name);
      console.log({ types });
    });
  } catch (error) {
    throw error;
  }
};

const ejercicio2 = () => {
  try {
    const book = "i+robot";
    const { href } = new URL(`${BOOK_API}?q=${book}`);
    request.get(href, (err, response, body) => {
      if (hasError(err, response)) {
        throw Error;
      }
      const data = JSON.parse(body);
      console.log(data.docs[0].author_name);
    });
  } catch (error) {
    throw error;
  }
};

const ejercicio3 = () => {
  try {
    const author = "asimov";
    const { href } = new URL(`${BOOK_API}?author=${author}`);
    request.get(href, (err, response, body) => {
      if (hasError(err, response)) {
        throw Error;
      }
      const data = JSON.parse(body);
      const booksName = data.docs.map((doc) => doc.title_suggest);
      console.log(booksName);
    });
  } catch (error) {
    throw error;
  }
};

const ejercicio4 = () => {
  try {
    const banda = "muse";
    const { href } = new URL(`${AUDIO_API}?s=${banda}`);
    request.get(href, (err, response, body) => {
      if (hasError(err, response)) {
        throw Error;
      }
      const data = JSON.parse(body);
      console.log(data.artists[0].strGenre);
    });
  } catch (error) {
    throw error;
  }
};

const ejercicio5 = () => {
  try {
    const character = "1";
    const { href } = new URL(`${SWAPI_API}/people/${character}`);
    request.get(href, (err, response, body) => {
      if (hasError(err, response)) {
        throw Error;
      }
      const data = JSON.parse(body);
      data.films.forEach((film) => {
        const { href: filmURL } = new URL(film);
        request.get(filmURL, (filmErr, filmResponse, filmBody) => {
          if (hasError(filmErr, filmResponse)) {
            throw Error;
          }
          const filmData = JSON.parse(filmBody);
          console.log(filmData.title);
        });
      });
    });
  } catch (error) {
    throw error;
  }
};

const ejercicio6 = () => {
  try {
    const startDate = "2020-11-11";
    const endDate = "2020-11-17";
    const { href } = new URL(
      `${NASA_API}?start_date=${startDate}&end_date=${endDate}&api_key=${NASA_API_KEY}`
    );

    request.get(href, (err, response, body) => {
      if (hasError(err, response)) {
        throw Error;
      }
      const data = JSON.parse(body);
      const dates = Object.keys(data.near_earth_objects);
      dates.forEach((date) => {
        const warningAsteroid = data.near_earth_objects[date].filter(
          (asteroid) => asteroid.is_potentially_hazardous_asteroid
        );
        warningAsteroid.map((asteroid) =>
          console.log(
            asteroid.name,
            asteroid.nasa_jpl_url,
            asteroid.is_potentially_hazardous_asteroid
          )
        );
      });
    });
  } catch (error) {
    throw error;
  }
};

const ejercicio7 = () => {
  try {
    const pokemonTotal = 151;
    const { href } = new URL(`${POKE_API}?limit=${pokemonTotal}`);
    request.get(href, (err, response, body) => {
      if (hasError(err, response)) {
        throw Error;
      }
      const data = JSON.parse(body);
      data.results.forEach(({ url }) => {
        const { href: pokeURL } = new URL(url);
        request.get(pokeURL, (pokeErr, pokeResponse, pokeBody) => {
          if (hasError(pokeErr, pokeResponse)) {
            throw Error;
          }
          const pokemon = JSON.parse(pokeBody);
          console.log(`nombre: ${pokemon.name}`);
          pokemon.moves.forEach(({ move }, index) => {
            console.log(`move ${index}: ${move.name}`);
          });
          pokemon.types.forEach(({ type }, index) => {
            console.log(`type ${index}: ${type.name}`);
          });
          console.log(`height: ${pokemon.height}`);
          console.log(`weight: ${pokemon.weight}`);
        });
      });
    });
  } catch (error) {
    throw error;
  }
};

