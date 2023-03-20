const character = {
  name: `Gandalf`,
  class: `wizard`,
  level: `20`,
  ally: {
    name: `Saruman`,
    class: `wizard`
  },
  status: `missed`
}

const deletedProperty = delete character.ally;
delete character[`status`];
const missedDeletedProperty = delete character[`address`];

//console.log(character.ally);
//console.log(character.status);
console.log(character);

console.log(deletedProperty);
console.log(missedDeletedProperty);