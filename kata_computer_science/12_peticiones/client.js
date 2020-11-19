const request = require("request");

console.log("Empezando peticion");
request.get("https://www.google.com", (err, response, body) => {
  console.log(response);
});
console.log("Termino peticion");


