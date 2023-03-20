const client = {
  name: `André`,
  age: 36,
  id: `12543652266`,
  email: `andre@email.com`,
  phoneNumbers: [`55912345498`, `5521988743124`],
  dependents: [{
    name: `Sara Silva`,
    kinship: `daughter`,
    birthDate: `20/03/2011`
  }]
}

client.dependents.push({name: `Samia Maria`, kinship: `daughter`, birthDate: `04/01/2014`});

//console.log(client);

const newerDaughter = client.dependents.filter(dependent => dependent.birthDate === `04/01/2014`);

console.log(newerDaughter);

console.log(newerDaughter[0].name);