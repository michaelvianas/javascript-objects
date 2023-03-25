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

class SavingAccountClient extends Client{
  constructor(name, email, id, balance, savingBalance){
    super(name, email, id, balance);
    this.savingBalance = savingBalance;
  }

  depositInSavingAccount(value){
    this.savingBalance += value;
  }
}

const michael = new SavingAccountClient(`Michael`, `michael@email.com`, `22233344455`, 100, 200);

console.log(michael);

michael.deposit(50);
michael.depositInSavingAccount(50);

console.log(michael)