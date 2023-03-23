function Client(name, id, email, balance){
  this.name = name;
  this.id = id;
  this.email = email;
  this.balance = balance;
  this.deposit = function(value){
    this.balance += value;
  }
}

function SavingAccountClient(name, id, email, balance, savingBalance){
  Client.call(this, name, id, email, balance);
  this.savingBalance = savingBalance;
}

const michael = new SavingAccountClient(`Michael`, `55588844411`, `michael@email.com`, 100, 200);

console.log(michael);

SavingAccountClient.prototype.savingDeposit = function(value){
  
}