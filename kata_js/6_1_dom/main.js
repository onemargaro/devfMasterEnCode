const CONVERT_TO_HUMAN = "Convertir a humano";
const CONVERT_TO_DOG = "Convertir a perro";
const DOG_URL = "https://i.ytimg.com/vi/JQ9mbvgpWEs/hqdefault.jpg";
const HUMAN_URL =
  "https://i.pinimg.com/736x/39/d1/af/39d1aff933ba2e4af11e8fd2203df8e6.jpg";
const thirdMessage = document.querySelector(".third-exercise .message");
const raceImg = document.querySelector(".race_img img");

const randomNumber = () => {
  const number = Math.floor(Math.random() * 100);
  thirdMessage.innerHTML = `El numero random es: ${number}`;
};

const completed = (e) => {
  if (e.target.checked) {
    return e.target.parentNode.classList.add("completed");
  }
  e.target.parentNode.classList.remove("completed");
};

const switchDogHuman = (e) => {
  const currentRace = e.target.innerText;
  if (currentRace === CONVERT_TO_HUMAN) {
    raceImg.setAttribute("src", HUMAN_URL);
    raceImg.setAttribute("alt", "Humano");
    return (e.target.innerHTML = CONVERT_TO_DOG);
  }
  raceImg.setAttribute('src', DOG_URL);
  raceImg.setAttribute('alt', 'Perro');
  return (e.target.innerHTML = CONVERT_TO_HUMAN);
};
