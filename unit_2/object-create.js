const character = {
  name: `Gandalf`,
  class: `Wizard`,
  level: 20
};

const character2 = Object.create(character);
character2.name = `Saruman`;

console.log(character.name);
console.log(character2.name);