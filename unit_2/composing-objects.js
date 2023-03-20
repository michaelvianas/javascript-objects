const client = {
  name: `André`,
  age: 36,
  id: `12543652266`,
  email: `andre@email.com`,
  phoneNumbers: [`55912345498`, `5521988743124`]
}

client.dependents = {
  name: `Sara`,
  kinship: `daughter`,
  birthDate: `20/03/2011`
}

console.log(client);

client.dependents.name = `Sara Silva`;

console.log(client)