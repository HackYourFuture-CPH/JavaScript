let start = Date.now()
setTimeout(function () {
  console.log("Timeout ran at", Date.now() - start)
}, 20)
while (Date.now() < start + 50) {}
console.log("Wasted time until", Date.now() - start)
