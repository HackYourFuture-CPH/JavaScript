// DATA
const clothes = [
  "Definitely bundle up in layers like an onion - keep warm!",
  "Grab a thick jacket, but don't forget about style. Winter is still a fashionable season!",
  "Who says a jacket and scarf can't be stylish accessories?",
  "A stylish down jacket - your best friend during this time.",
  "Time for light jackets and spring boots!",
  "A spring jacket and a pair of stylish sunglasses - the perfect combination",
  "Of course, it's time for sneakers, shorts, and T-shirts!",
  "Definitely just wear what you have on right now, because it's the perfect temperature!",
  "T-shirt and shorts - always a fitting choice!",
  "Maybe it's time to get out the swimsuit or shorts and a shirt?",
];
const temperatures = [-10, -5, 0, 5, 10, 15, 20, 25, 30];

function getClothesToWear(temperature, clothes, temperatures) {
  // LOGIC
  for (let i = 0; i < temperatures.length; i++) {
    if (temperature < temperatures[i]) {
      return clothes[i];
    }
  }
  return clothes[clothes.length - 1];
}
// LOGIC
const clothesToWear = getClothesToWear(30, clothes, temperatures);
// RENDER
console.log(clothesToWear);

// now getClothesToWear is abstract enough to call it on different data
// DATA
const memos = [
  "Zero balance or less",
  "Just enough to buy an icecream",
  "Pizza time",
  "Hair dresser",
  "You are rich",
];
const balances = [0, 10, 20, 30];
// LOGIC
const statusOnYourCapital = getClothesToWear(15, memos, balances);
// RENDER
console.log(statusOnYourCapital);
