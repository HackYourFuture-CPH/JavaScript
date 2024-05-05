function getClothesToWear(temperature) {
  if (temperature <= -10) {
    return "Definitely bundle up in layers like an onion - keep warm!";
  } else if (temperature <= -5) {
    return "Grab a thick jacket, but don't forget about style. Winter is still a fashionable season!";
  } else if (temperature <= 0) {
    return "Who says a jacket and scarf can't be stylish accessories?";
  } else if (temperature <= 5) {
    return "A stylish down jacket - your best friend during this time.";
  } else if (temperature <= 10) {
    return "Time for light jackets and spring boots!";
  } else if (temperature <= 15) {
    return "A spring jacket and a pair of stylish sunglasses - the perfect combination";
  } else if (temperature <= 20) {
    return "Of course, it's time for sneakers, shorts, and T-shirts!";
  } else if (temperature <= 25) {
    return "Definitely just wear what you have on right now, because it's the perfect temperature!";
  } else if (temperature <= 30) {
    return "T-shirt and shorts - always a fitting choice!";
  } else if (temperature > 40) {
    return "Maybe it's time to get out the swimsuit or shorts and a shirt?";
}

const clothesToWear = getClothesToWear(23);
console.log(clothesToWear);
