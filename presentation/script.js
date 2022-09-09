// function outer() {
//   const someVar = 'some value';

//   function inner() {
//     const someInnerVar = 'inner var';
//     console.log(someVar);
//   }

//   console.log(someInnerVar);
// }


/* NOTES for Demo 2: 


*/

// // ~ DEMO 2 START ~ \\
// function greeting(greeting) {
//   return function(name) {
//     return `${name}! ${greeting}`;
//   };
// }

// const basicWelcome = greeting("Welcome.");
// const friendlyWelcome = greeting("So glad to see you again!");

// console.log("basicWelcome:", basicWelcome("John"));
// console.log("friendlyWelcome:", friendlyWelcome("John"));
// // ~ DEMO 2 END ~ \\


// // ~ DEMO 3 START ~ \\
// const createBankAccount = initialBalance => {
//   let userBalance = initialBalance;

//   return {
//     getBalance: function() {
//       return userBalance;
//     },
//     deposit: function(amount) {
//       userBalance += amount;
//       return userBalance;
//     },
//     withdrawl: function(amount) {
//       userBalance -= amount;
//       return userBalance;
//     }
//   };
// };

// const myAccount = createBankAccount(100);
// let myBalance;

// myBalance = myAccount.getBalance(); // 100
// console.log("myBalance after creation:", myBalance);

// myAccount.deposit(99);
// myBalance = myAccount.getBalance(); // 100
// console.log("myBalance after $99 deposit:", myBalance);

// myAccount.withdrawl(12);
// myBalance = myAccount.getBalance(); // 100
// console.log("myBalance after $12 withdrawl:", myBalance);
// // ~ DEMO 3 END ~ \\

// OBJECTS 
// objects stores data grouped together using key/value pairs


// object example

// const myObj = {
//   key: 'value',
//   nestedInfo: {
//     nestedKey: 'nested value',
//     age: 42,
//     location: {
//       state: {
//         name: 'Missouri',
//         initials: 'MO'
//       }
//     }
//   },
//   createdAt: new Date(),
//   someMethod: function(text = 'Hello') {
//     console.log(text);
//   }
// };

// //Object Property Usage
// const bestState = myObj.nestedInfo.location.state.name;
// console.log('bestState: ', bestState);

// const whenWasThisObjCreated = myObj['createdAt'];
// console.log('whenWasThisObjCreated: ', whenWasThisObjCreated);

// //Object Method Usage

// myObj.someMethod(
//   'Calling a method on an object. . . these are the same thing as functions but inside of an object'
// );

// Object Constructors

// const student = new Object();
// student.learning = 'JavaScript',
// student.name = 'Missy';

// console.log('student', student);

// ~ ARRAYS ~ \\
// Arrays stores information in a list-like format

// Array Example
// const myArr = [1, "Test", false, { name: "Chris", age: 33 }];

// // Accessing Arrays
// let firstItem = myArr[0];
// console.log("firstItem:", firstItem);

// let lastItem = myArr[myArr.length - 1];
// console.log("lastItem:", lastItem);

// // Array Constructor
// const myArr2 = new Array("item 1", "item 2", "item 3");
// console.log("myArr2:", myArr2);

// const myEmptyArr = new Array(100);
// console.log("myEmptyArr:", myEmptyArr);

// ~ Common Array Methods ~ \\
// const students = [
//   { name: "Medina", grade: 88 },
//   { name: "Blake", grade: 72 },
//   { name: "Roscoe", grade: 58 },
//   { name: "Stephanie", grade: 99 },
//   { name: "Edith", grade: 93 },
//   { name: "Janey", grade: 34 },
//   { name: "Ivan", grade: 89 }
// ];

// // filter
// const passingStudents = students.filter(student => student.grade > 58);
// console.log("passingStudents:", passingStudents);

// // map
// students.map(student => (student.isRegistered = true));
// console.log("students after being registered:", students);

// // sort
// const studentsByGrade = students.sort((a, b) => b.grade - a.grade);
// console.log("studentsByGrade:", studentsByGrade);

// // find
// const classClown = students.find(student => student.name === "Roscoe");
// console.log("classClown:", classClown);

// // forEach
// students.forEach(student => student.grade++);
// console.log("students w/ added grade point:", students);

// // some
// const hasAnyFailingStudents = students.some(student => student.grade < 59);
// console.log("hasAnyFailingStudents (some):", hasAnyFailingStudents);

// // every
// const hasAllFailingStudents = students.every(student => student.grade < 59);
// console.log("hasAllFailingStudents (every):", hasAllFailingStudents);

