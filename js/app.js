// //Task 1
console.log("////Task1");
const car = {
  type: "electric",
  wheels: 4,
};

const sportCar = {
  doors: 2,
};
Object.setPrototypeOf(sportCar, car);
console.log(sportCar);

const passangerCar = Object.create(car);
passangerCar.doors = 4;

console.log(passangerCar);

const toyCar = Object.create(passangerCar);
toyCar.type = "toy";

console.log(toyCar);

// //task 2
console.log("////Task2");
let employees = {
  wallet: {},
  pay(munth, sum) {
    this.wallet[munth] = sum;
  },
};

let frontendDevelopers = {
  name: "Mike",
};
frontendDevelopers.wallet = {};

Object.setPrototypeOf(frontendDevelopers, employees);

let backendDevelopers = {
  name: "Bob",
};

Object.setPrototypeOf(backendDevelopers, employees);
backendDevelopers.pay("june", 1500);

console.log(backendDevelopers.wallet.june);
console.log(frontendDevelopers.wallet.june);

// //task 3
console.log("////Task3");
function User(name, age) {
  this.name = name;
  this.age = age;
}

let user_1 = new User("Mike", 18);
console.log(user_1);

let user_2 = {
  name: "Bob",
  age: 25,
};

Object.setPrototypeOf(user_2, user_1);

console.log(user_2);

//Task 4
console.log("////Task4");

function UserType(name) {
  for (let i = 0; i < name.length; ++i) {
    this[i] = name[i];
    if (i + 1 === name.length) {
      Object.defineProperty(this, "length", {
        enumerable: true,
        writable: false,
        configurable: true,
        value: i + 1,
      });
    }
  }
}

UserType.prototype = Array.prototype;

let admins = new UserType(["Mike", "Bob", "Nikola"]);

console.log(admins.join(", ")); 