const client = {
  name: 'Andre',
  age: 36,
  id: '12543652266',
  email: 'andre@email.com',
  phoneNumbers: [ '5591235498', '5521988743124' ],
  dependents: [
    {
      name: 'Sara Silva',
      kinship: 'filha',
      birthDate: '20/03/2011' },
    {
      name: 'Samia Maria',
      kinship: 'filha',
      birthDate: '04/01/2014'
    }
  ],
  balance:100,
  deposit:function(value){
    this.balance += value;
  },
  withdraw: function(value){
    this.balance -= value;
  }
}

let report = ``;

for (let info in client){
  if(typeof client[info] === `object` || typeof client[info] === `function`){
    continue;
  }else{
    report += `
    ${info} ==> ${client[info]}
    `;
  }
}

console.log(typeof client.deposit);
console.log(report);