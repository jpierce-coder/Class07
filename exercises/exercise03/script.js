drinks = [
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "soda", price: 25 },
  { name: "coffee", price: 15 }
];

function sortDrinkByPrice(drinks) {
  const sortedDrinks = drinks.sort((a, b) => a.price - b.price);
  return sortedDrinks;
}

const drinksByPrice = sortDrinkByPrice(drinks);

console.log(drinksByPrice); 