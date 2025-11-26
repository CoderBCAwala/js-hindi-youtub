// singleton

// object literalas

const mysym = Symbol("key1");
const user = {
  "full name": "charan singh",
  name: "charan",
  [mysym]: "mykey1",
  age: 18,
  Email: "charan@gmail.com",
  location: "utter pradesh",
  isLoggedIn: false,
};
// console.log(user.Email);
// console.log(user["Email"]);
// console.log(user["full name"]);
// console.log(typeof [Symbol]);

user.Email = "rana@gmail.com";
// Object.freeze(user);
user.Email = "ranaR7@gmail.com";
// console.log(user);

user.greeting = function () {
  console.log("Hello js users ");
};
user.greeting2 = function () {
  console.log(`Hello js users ${this.name}`);
};
console.log(user.greeting());
console.log(user.greeting2());
