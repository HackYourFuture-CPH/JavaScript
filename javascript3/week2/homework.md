> [!WARNING]
> You do not need to complete these homeworks. We are currently testing new homeworks for JS2 and JS3. More info [here](https://github.com/HackYourFuture-CPH/js-projects).

# Homework

## Start the homework

Need to brush up on the homework setup process? Check [this](https://github.com/HackYourFuture-CPH/Git/blob/main/homework_hand_in.md) out before you get into some git confusion!

## Why should i even do this homework?

Promises creates a **pleasant way of working with asynchronous code**. It will make your asynchronous code nearly look synchronous. It is possible to compose promises further developing the function part of javascript.

Since promises is becoming standard in javascript, new browser api's use promises for interacting with them. `getUserMedia` for accessing webcam, `Navigator.getBattery()` for getting battery level, `Bluetooth.requestDevice()`, `serviceWorker` or `USB.requestDevice()`

If you struggle to do this weeks homework there are a couple of things to do:

- Try watch these two videos: https://www.youtube.com/watch?v=XO77Fib9tSI, https://www.youtube.com/watch?v=QO4NXhWo_NM
- Watch the class recording. If it for some reason is missing. Then watch these: [part 1](https://www.youtube.com/watch?v=SDr1FCqqjAs), [part 2](https://www.youtube.com/watch?v=V82nhqIYWP0), [part 3](https://www.youtube.com/watch?v=iQgYX5tB7gs) [part 4](https://www.youtube.com/watch?v=RYdLBdHZMCU) [part 5](https://www.youtube.com/watch?v=A41NxevmHwI)
- Read up on [promises](https://javascript.info/promise-basics), [async await](https://javascript.info/async-await)

### Currency calculator
The homework for this week is to build a currency calculator using this API: https://open.er-api.com/v6/latest/USD

## Technical specifications
1. Make a request to the API and store the Exchange rates as well as a list of currencies for the dropdowns.
2. User can enter an amount
3. User can choose a currency to convert from(default should be EUR)
4. User can choose a currency to convert to(Default should be DKK)
5. Whenever amount, currency from or currency to changes we show what the amount translates to in the to currency
