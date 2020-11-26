const request = require("request");
const BASE_URL = "https://goodreads-devf-aaron.herokuapp.com";
const AUTHOR_URL = `${BASE_URL}/api/v1/authors/`;

const DEFAULT_AUTHOR = {
  name: "Manny Default",
  last_name: "Generacion 2",
  nacionalidad: "MX",
  biography: "Que paso tio? aqui papi chakalito default",
  gender: "M",
  age: 26,
};

const hasError = (err, response) => {
  const ok_status = [200, 201];
  if (err) return true;
  if (!ok_status.includes(response.statusCode)) return true;
  return false;
};

const createAuthor = () => {
  
    return new Promise((resolve, reject) => {
      return request.post(
      AUTHOR_URL,
      { form: DEFAULT_AUTHOR },
      (err, response, body) => {
        if (hasError(err, response)) {
          throw Error(JSON.parse(body));
        }
        const data = JSON.parse(body);
        console.log("created: ", data);
        return data;
      }
    );
    })
};

const getAllAuthors = () => {
  try {
    request.get(AUTHOR_URL, (err, response, body) => {
      if (hasError(err, response)) {
        throw Error(JSON.parse(body));
      }
      const data = JSON.parse(body);
      console.log("Get: ", data);
    });
  } catch (error) {
    throw error;
  }
};

const getAuthor = (id = 12902) => {
  try {
    return new Promise((resolve, reject) =>
      request.get(`${AUTHOR_URL}${id}/`, (error, response, body) => {
        if (hasError(error, response)) {
          reject({
            error,
            response,
          });
        }
        resolve(JSON.parse(body));
      })
    );
  } catch (error) {
    throw error;
  }
};

const updateAuthor = (
  id = 12902,
  changes = {
    name: "Chakalito Default",
    last_name: "Generacion x",
    nacionalidad: "MX",
    biography: "Que paso tio papu chulo actualizado",
    gender: "M",
    age: 25,
  }
) => {
  try {
    request.put(
      `${AUTHOR_URL}${id}/`,
      { form: changes },
      (err, response, body) => {
        if (hasError(err, response)) {
          console.log(err, response.statusCode);
          console.log(body);
          throw Error(JSON.parse(body));
        }
        const data = JSON.parse(body);
        console.log("Update author: ", data);
      }
    );
  } catch (error) {
    throw error;
  }
};

const deleteAuthor = (id = 13231) => {
  try {
    request.delete(`${AUTHOR_URL}${id}/`, (err, response, body) => {
      if (hasError(err, response)) {
        console.log(err, response);
        console.log(body);
        throw Error(JSON.parse(body));
      }
      const data = JSON.parse(body);
      console.log("Delete author: ", data);
    });
  } catch (error) {
    throw error;
  }
};

const makeAllOperations = () => {
  const author = await createAuthor();
  
  // getAuthor(author.id);
  // updateAuthor(author.id);
  // deleteAuthor(author.id);
};

makeAllOperations();
