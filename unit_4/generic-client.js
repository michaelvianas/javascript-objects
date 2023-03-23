function Client(name, id, email, balance){
  this.name = name;
  this.id = id;
  this.email = email;
  this.balance = balance;
  this.deposit = function(value){
    this.balance += value;
  }
}

const andre = new Client(`André`, `1254359542`, `andre@email.com`, 100);

console.log(andre);