const getBudgets = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
];

function totalBudgets() {
  const sum = getBudgets.reduce((sum, budget) => {
    return sum + getBudgets[budget];
  },
  0);
}

console.log(totalBudgets());

// Need to walk through in class
