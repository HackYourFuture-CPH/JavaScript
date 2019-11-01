window.addEventListener("DOMContentLoaded", () => {
  console.log("Dom was fully loaded and parsed");

  const button1 = document.getElementById("button1");

  let count = 0;

  button1.addEventListener("click", () => {
    count += 1000;
    const localCount = count;
    console.log("count was", { localCount, count });
    setTimeout(() => {
      console.log("Button click was delayed 3 seconds", { localCount, count });
    }, 10000 - count);
  });

  // Do not try this in production
  function reallyHorribleSetTimeout(cb, time) {
    const end = new Date().setSeconds(new Date().getSeconds() + time / 1000);
    while (new Date().getTime() < end) {}

    cb();
  }
});
