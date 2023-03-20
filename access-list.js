const client = {
  name: `André`,
  age: 36,
  id: `12543652266`,
  email: `andre@email.com`
}

const keys = [`name`, `age`, `id`, `email`];

//let key = `name`;

//console.log(client[chaves[0]]);
//console.log(client[key]);

keys.forEach(info => console.log(client[info]));