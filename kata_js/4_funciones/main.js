const MAYOR = 18;
const sum = (a, b) => a + b;
const subs = (a, b) => a - b;
const majorAge = (age) => (age > MAYOR ? "Mayor de edad" : "Menor de edad");
const evaluate = (verify) => {
  if (verify === 0) return "Cero";
  if (verify > 0) return "Positive";
  return "Negative";
};

const makeSum = () => {
  const a = prompt("Dame un numero");
  const b = prompt("Dame otro numero");
  alert(`El resultado es: ${sum(Number(a), Number(b))}`);
}

const makeSub = () => {
  const a = prompt("Dame un numero");
  const b = prompt("Dame otro numero");
  alert(`El resultado es: ${subs(Number(a), Number(b))}`);
};

const verifyAge = () => {
  const age = prompt("Cual es tu edad: ");
  alert(`${majorAge(Number(age))}`);
};

const evaluateNum = () => {
  const num = prompt("Dame un numero: ");
  alert(`El numero es: ${evaluate(Number(num))}`);
};