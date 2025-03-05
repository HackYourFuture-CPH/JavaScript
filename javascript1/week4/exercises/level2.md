
# Level 1 - Hard Difficulty
> [!IMPORTANT]
> These exercises will challenge all your skills so far. There will be less guidance compared to Level 1, and you may need to learn new topics independently. Choose an exercise that interests you. Once completed, if you seek an even greater challenge, proceed to the [Level 3 exercises](./level3.md). Otherwise, try another exercise here.

> [!TIP]
> Remember to take **breaks** once in a while to stretch and rest your eyes. The most productive people take regular breaks. Here are some ideas:
> * Work for 25 minutes, then take a 5-minute break.
> * Work for 50 minutes, then take a 15-minute break.
> * Work in 90-minute deep focus sessions, then take a 20–30 minute break.


## 🎓🧱 2.1 Implement a Calendar 
1. Learn how we can work with dates in Javascript and explain it to a classmate and a mentor.
    * How can I get today's date?
    * How can I get Jan 16th 1992?
    * What kind of operations can I do with dates?
2. Write a function `daysUntilBirthday` that takes a birthdate (YYYY-MM-DD) as input and returns the number of days until the next birthday.
     ```js
     console.log(daysUntilBirthday("1995-06-15")); // Outputs the number of days until June 15 next occurrence
     ```
3. Write a function `ageOnDate` that takes a birthdate (YYYY-MM-DD) and a specific date (YYYY-MM-DD) as input and returns the age on that date.
     ```js
     console.log(ageOnDate("1995-06-15", "2025-06-15")); // Outputs 30
     ```
4. Write a function `daysBetweenDates` that takes two dates (YYYY-MM-DD) as input and returns the number of days between them.
     ```js
     console.log(daysBetweenDates("2023-01-01", "2023-12-31")); // Outputs 364
     ```









## 🎓✨ 2.2 Review NASA's Code
> [!TIP]
> **Don't Repeat Yourself (DRY)** is a principle in software development that encourages avoiding code duplication by using functions, loops, or reusable components. This helps to keep the codebase clean, maintainable, and easier to understand.

NASA has called you to review their code from the latest space mission. The current code works, but it’s inefficient. Identify repeated logic, unnecessary code, and ways to improve clarity.
1. The team member suggested that the code could be simplified using ternary operators, but what is that? 
   * Research what a ternary operator is and explain it to a team mate and a mentor
2. Note down the results of the existing code
3. Improve the code where possible:
   * Is any code redundant and can be removed?
   * Is any code repeated and can be reused in a function or loop instead?
   * Are the variable names good?
   * Can we use ternary operators anywhere?
   * Anything else?
4. Verify that the code still works and gives the same results as in step 2.
```js
function getTicketPrice(age, isVIP) {
    let price;
    if (isVIP) {
        price = 0;
    } else {
        if (age < 12) {
            price = 50;
        } else {
            if (age >= 12 && age < 18) {
                price = 75;
            } else {
                price = 100;
            }
        }
    }
    return price;
}

function canTravel(height, age) {
    if (height >= 140) {
        if (age >= 10) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function printPassengerInfo(name, age, height, isVIP) {
    let ticketPrice = getTicketPrice(age, isVIP);
    let travelStatus = canTravel(height, age) ? "Approved for launch" : "Not eligible for space travel";
    console.log(name + " | Age: " + age + " | Height: " + height + "cm | Ticket Price: $" + ticketPrice + " | Travel Status: " + travelStatus);
}

printPassengerInfo("John", 25, 180, false);
printPassengerInfo("Jane", 10, 130, false);
printPassengerInfo("Bob", 16, 155, true);
printPassengerInfo("Alice", 8, 120, false);
printPassengerInfo("David", 12, 140, false);
printPassengerInfo("Eve", 18, 160, false);
printPassengerInfo("Frank", 11, 145, false);
printPassengerInfo("Grace", 14, 135, false);
printPassengerInfo("Henry", 9, 125, false);
printPassengerInfo("Isabel", 13, 150, false);
printPassengerInfo("Kevin", 17, 170, false);
printPassengerInfo("Lucy", 7, 110, false);
printPassengerInfo("Michael", 15, 165, false);
printPassengerInfo("Nancy", 19, 175, false);
printPassengerInfo("Oliver", 6, 105, false);
printPassengerInfo("Patricia", 20, 185, false);
printPassengerInfo("Quinn", 5, 100, false);
printPassengerInfo("Robert", 21, 190, false);
```





## 🔥🧱 2.3 Implement a Almost-Math tool
1. Write a function called `sumEvenNumbers` that takes an array of numbers and returns the sum of only the even numbers in the array.
    ```js
    sumEvenNumbers([1, 2, 3, 4, 5, 6]); 
    // Expected output: 12 (because 2 + 4 + 6 = 12)

    sumEvenNumbers([10, 15, 20, 25]); 
    // Expected output: 30 (because 10 + 20 = 30)
    ```
2. Write a function that takes an array of numbers and returns the second largest number. If there aren't enough unique numbers, return null.
    ```js
    console.log(secondLargest([10, 20, 4, 45, 99])); // 45
    console.log(secondLargest([3, 3, 3])); // null
    console.log(secondLargest([5])); // null
    console.log(secondLargest([])); // null
    ```
3. One of you team members added this function and went on vacation. Users have reported that they sometimes see a bug. Can you help find it?
    * What do you think `doStuff()` is meant to do? 
    * Can you figure out why we get `NaN`? 
    ```js
    function doStuff(numbers) {
        const oddNumbers = [];
        let sum = 0;
        let count = 0;
        for (let number of numbers) {
            if (number % 2 !== 0) {
                oddNumbers.push(number);
                count = count + 1;
            }
            sum = 0;
        }
        for (let number of oddNumbers) {
            sum += number;
        }

        return sum / count;
    }

    let numbers = [-3, 1, 8, 5, 7, 14, 98, 15];
    console.log(doStuff(numbers)); // Output: 5

    numbers = [2, 4, 8, 5, 7];
    console.log(doStuff(numbers)); // Output: 6

    numbers.pop();
    numbers.unshift(1);
    numbers.pop();
    numbers.push(8);
    numbers.unshift(2);
    numbers[0] += 3;
    numbers[2] *= 3;
    console.log(doStuff([2, 4, 6])); // Nan???
    ```
4. Write a function called `isPrime` that takes a number and returns true if the number is a prime number, otherwise false. It should support numbers 1-100 and otherwise throw an error.
    ```js
    console.log(isPrime(7)); // true
    console.log(isPrime(10)); // false
    ```
5. Write a function called `factorial` that takes a number and returns its [factorial](https://www.mathsisfun.com/numbers/factorial.html).
    ```js
    console.log(factorial(5)); // 120
    console.log(factorial(7)); // 5040
    ```
