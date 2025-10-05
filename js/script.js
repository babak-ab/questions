// data.js

// Sample user data
const user = {
  id: 1,
  name: "Alice",
  age: 25,
  location: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "coding", "traveling"],
};

// // Destructuring object
// const { name, age, location, hobbies } = user;
// console.log(`Name: ${name}, Age: ${age}`);
// console.log(`City: ${location.city}, Country: ${location.country}`);

// // Destructuring array
// const [firstHobby, secondHobby, thirdHobby] = hobbies;
// console.log(`Hobbies: ${firstHobby}, ${secondHobby}, ${thirdHobby}`);

// // Nested destructuring
// const {
//   location: { city, country },
// } = user;
// console.log(`Lives in: ${city}, ${country}`);

// // Destructuring with default values
// const { profession = "Software Developer" } = user;
// console.log(`Profession: ${profession}`);

// // Function parameter destructuring
// function displayUser({ name, age, location: { city } }) {
//   console.log(`${name} is ${age} years old and lives in ${city}.`);
// }

// displayUser(user);
//----------------------------------------------Arrays------------------------------------
const users = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    location: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["reading", "coding", "traveling"],
  },
];

for (const user of users) {
  console.log(user);
}
users.forEach((user, index) => {
  console.log(`${index}: ${user}`);
});

const u = users.at(0);
const [u1] = users;
const u2 = users[0];

//-----------------------Object-----------------------

const { id, age } = user;

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
Object.keys(user).forEach((key) => {
  console.log(`${key}: ${user[key]}`);
});

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
//---------------------
const numbers = [0, 1, 2, 3, 4, 5, 6];
const [b, ...c] = numbers;
const firstTwo = numbers.slice(0, 2);
const index1 = numbers.unshift(10);
const index2 = numbers.push(10);
const moreFruits = [...numbers, "orange"];

const { id: myid, ...rest } = user;
user.home = "1";
const updatedPerson = { ...user, hobby: "reading" };

const newObj = {
  ...user,
  t1: "1",
};
//---------------------------------String-------------------
const text = "Hello World";

const newText1 = "1" + text.slice(1);
console.log(newText1); // "Hello"

// --- slice(start, end) ---
const sliced = text.slice(0, 5);
console.log("Slice:", sliced); // "Hello"

// --- replace(old, new) ---
const replaced = text.replace("World", "JavaScript");
console.log("Replace:", replaced); // "Hello JavaScript"

// --- toLowerCase() ---
const lower = text.toLowerCase();
console.log("Lowercase:", lower); // "hello world"

// --- compare strings (case-insensitive) ---
const str1 = "Apple";
const str2 = "apple";
const isEqual = str1.toLowerCase() === str2.toLowerCase();
console.log("Equal (case-insensitive):", isEqual); // true

// --- substring(start, end) ---
const sub = text.substring(6, 11);
console.log("Substring:", sub); // "World"

// --- bonus: check substring exists ---
const hasHello = text.toLowerCase().includes("hello");
console.log("Contains 'hello'?", hasHello); // true

const test1 = "ddd";
const text2 = `Hello ${test1} World`;

//------------------------------------------------
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};

// Shorter version for single expression
const addShort = (a, b) => a + b;

console.log(addArrow(2, 3)); // 5
console.log(addShort(2, 3)); // 5
//------------------------------------------------

console.log(true || "hello");
console.log(true && "hello");

console.log(false || "hello");
console.log(false && "hello");

if (!0) console.log("0 is falsy"); // prints
if (!"hello") console.log("won't print"); // doesn't print

///---------------------------------------------
const object = {
  name: "Alice",
  address: {
    city: "New York",
  },
  value: 1,
};

function sum(object, object2) {
  const v1 = object.value;
  const v2 = object2?.value2 || 0;
  const v3 = object2?.value2 ?? 0;
  return v1 + v3;
}
console.log(object.address?.street || "not defined");

console.log(sum(object));

//--------------------------------------------------
//array.map((currentValue, index, array) => { ... })
const ar = [1, 2, 3, 4];
p = ar.map((c,i,a) => {i; return c * 2;});


//array.filter((currentValue, index, array)
const evens = ar.filter((num,index,array) => index).filter((num,index,array) => index).map((num) => num*2);

const p2 =  ar.includes(1,0)



// array.reduce((accumulator, currentValue, index, array) => {
//   // return the updated accumulator
// }, initialValue);

const arrays = [[1,2], [3,4], [5]];

const flat = arrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat); // [1, 2, 3, 4, 5]

console.log(flat.slice())

//-----------------------
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json()) // parse JSON
  .then(data => {
    console.log("Data received:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });


  fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json()) // parse JSON
  .then(data => {
    console.log("Data received:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });