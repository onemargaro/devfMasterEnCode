class Person {
  name;
  lastname;
  age;
  sex;
  weight;
  hiegth;
  id;
  constructor(name, lastname, age, sex, weight, height) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.sex = sex;
    this.weight = weight;
    this.height = height;
  }

  calculateIMC() {
    return this.weight / this.height ** 2;
  }

  isUnderAge() {
    return this.age < 18;
  }

  isLegal() {
    return !this.isUnderAge();
  }

  generateID() {
    if (this.id) {
      return this.id;
    }
    this.id = `${this.name.slice(0, 3)}${this.lastname.slice(0, 3)}${
      new Date().getFullYear() - this.age
    }${this.sex}`;
    return generateID();
  }
}
