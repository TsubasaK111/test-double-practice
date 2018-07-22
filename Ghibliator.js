const fs = require("fs");

class Ghibliator {
  getAverageAge() {
    const text = fs.readFileSync("./data.json", "utf-8");
    const people = JSON.parse(text);
    const result =
      people
        .map((person) => person.age)
        .map((age) => parseInt(age, 10))
        .filter((age) => !isNaN(age))
        .reduce((acc, cur) => acc + cur) / people.length;
    return result;
  }

  appearances(name) {
    const text = fs.readFileSync("./data.json", "utf-8");
    const people = JSON.parse(text);
    const result = people.filter((person) => person.name === name)[0].films
      .length;
    return result;
  }
}
module.exports = Ghibliator;
