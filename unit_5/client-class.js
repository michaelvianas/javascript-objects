class Client {
  constructor(name, email, id, balance){
    this.name = name;
    this.email = email;
    this.id = id;
    this.balance = balance;
  }

  deposit(value){
    this.balance += value;
  }

  showBalance(){
    console.log(`Balance: ${this.balance}`);
  }
}

const michael = new Client(`Michael`, `michael@email.com`, `73278288329`, 1000.01);

console.log(michael);

michael.showBalance();