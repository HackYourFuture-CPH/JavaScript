
# Level 1 - Regular Difficulty
> [!IMPORTANT]
> The Level 1 exercises will require you to apply your learnings from previous weeks. We recommend that you start with one exercise. If you find it easy, proceed to the [Level 2 exercises](./level2.md). Otherwise, try another exercise here.




## 🧱 1.1 Implement Student Grades
In this exercise you will create a basic system to manage student records. Let's get started:

1. **Create Student Objects**
    * Define a function `createStudent(name, age, grades)` that takes a student's name, age, and grades and return an object with these properties.
2. **Store Students in an Array**
    * Create an empty array called `students`.
    * Use the `createStudent` function to create at least three student objects and store them in the students array.
3. **Calculate Average Grade**
    * Write a function `calculateAverageGrade(student)` that takes a student object and returns their average grade.
4. **Find the Best Student**
    * Write a function `findTopStudent(students)` that takes an array of students and returns the student with the highest average grade.
5.  **Display Student Information**
    * Write a function `displayStudentInfo(student)` that logs a message like:
        `"John, Age: 20, Average Grade: 85"`
    * Use this function to display details for all students in the students array.
6. **Add Grades Dynamically**
    * Modify the `createStudent` function to also include a method `addGrade(newGrade)` inside the student object, allowing new grades to be added dynamically. Use this function to add a grade to a student after it is created.

Now help us answer these questions for the below students:
 * What is the average grade of Frank?
 * Who has the highest average grades?
 * Who has the lowest average grades?

> * Allan 20 years - Grades: [10, 10, 7, 4, 7]
> * Betty 22 years - Grades: [12, 7, 7, 4, 2]
> * Charlie 21 years - Grades: [10, 7, 4, 2, 0]
> * David 23 years - Grades: [7, 4, 2, 0, -3]
> * Eva 20 years - Grades: [12, 7, 10, 2, 12]
> * Grace 22 years - Grades: [7, 10, 7, 10, 7]
> * Henry 21 years - Grades: [4, 7, 7, 4, 4]
> * Irene 23 years - Grades: [2, 7, 7, 4, 0]









## ✨ 1.2 Review IMDB's code
> [!TIP]
> When refactoring existing code there is always a risk that we introduce bugs, so it is crucial that you take precautions to reduce the risk of introducing bugs. Here are some good steps to follow which limits these risks:
> 1. **🔍 Understand the Code**: Thoroughly read and understand the existing code.
> 2. **📝 Plan Changes**: Outline the changes you intend to make and weigh the effort required against the benefits.
> 3. **🧪 Create Test Scenarios**: Develop test scenarios and document their expected outcomes.
> 4. **💻 Implement Changes**: Make the necessary code changes.
> 5. **✅ Verify Functionality**: Ensure that your test scenarios still pass after the changes.

1. Describe in your own words to a team mate or mentor what this code does
2. The code is hard to read due to poor naming. Can you improve it? (there might be more than just the names to improve) 



```js
function f(m) {
    let a = [];
    for (let i = 0; i < m.length; i++) {
        if (m[i].rating >= 8) {
        a.push(m[i].title);
    }} return a; }

let d = [
    { title: "Interstellar", rating: 8.6 },
    { title: "The Room", rating: 3.7 },
    { title: "The Godfather", rating: 9.2 },
    { title: "Cars", rating: 7.1 }
];

console.log(f(d)); 
// Expected Output: ["Interstellar", "The Godfather"]
```






## ✨ 1.3 Review the behaviour of JS
> [!TIP]
> When **reviewing** code now you want to watch out for:
> * Is all code required or can some be removed?
> * Are the naming of variables and functions good?
> * Is some code repeated which could be done with a function or a loop instead?
> * Are each function doing one thing really well?

Your niece found this script on the internet and is asking how it works.
1. Guess the output
2. Now run the code, did you guess correctly?
```js
const a = 10;
const b = -10;
const c = "100"
const d = "no";
const e = {
    name: "John",
};
const f = [1, 2, 3];
const h = true;

// guess the output of the following statements
console.log("#1", a + a);
console.log("#2", a + b);
console.log("#3", a + c);
console.log("#4", a + d);
console.log("#5", a + e);
console.log("#6", a + e["name"]);
console.log("#7", a + e["age"]);
console.log("#8", a + f);
console.log("#9", a + f[1]);
console.log("#10", a + h);
```



## 🔥 1.4 Troubleshoot issue with grades
> [!TIP]
> Effective troubleshooting involves a systematic approach:
> 1. **🔍 Understand the Problem**: Gather all relevant information and understand how to reproduce the issue.
> 2. **🕵️ Identify the Issue**: Locate where in the code the problem occurs and determine its cause.
> 3. **🔧 Develop a Solution**: Implement a fix for the issue.
> 4. **✅ Test the Solution**: Ensure the problem is resolved and no new issues have been introduced.

Below is a piece of code that is supposed to process a list of students and their grades, and return the average grade for the class. The calculation should ignore any invalid grades (negative numbers or non-numeric grades). However, the code has some bugs. Your task is to identify and fix the issues.



```js
function calculateAverageGrade(students) {
    let total = 0;
    let count = 0;
    
    for (let i = 0; i < students.length; i++) {
        let grade = students[i].grade;
        
        if (grade > 0) {
            total += grade;
            count++;
        } else {
            console.log("Invalid grade for student: " + students[i].name);
        }
    }
    
    return total / count;
}

let studentsList = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: -10 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 100 },
    { name: "Eva", grade: "A" }
];

console.log("Average grade:", calculateAverageGrade(studentsList)); 
// Expected Output: Average grade: 91.66
```

**Tasks**
1. Identify the bug(s) in the code.
2. Fix the code so that it correctly calculates the average grade for the students.


## 🧱 1.5 Implement a Recipe Management System
You are tasked with creating a recipe management system. This system will keep track of recipes, each containing:
* The name of the recipe.
* The time it takes to cook the recipe, in minutes.
* A list of ingredients required for the recipe.

```
Spaghetti
30 min
spaghetti, tomato sauce, garlic

Salad
10 min
lettuce, tomato, cucumber, olive oil

Pancakes
20 min
flour, milk, eggs, sugar
```

**Tasks**
1. Create a list with the below recipes. Each recipes which each have a name, time, and ingredients.
2. Write a method to find the fastest recipe based on the cooking time.
3. Write another method to find all recipes that contain specific ingredients. The function should take an array of ingredients as an argument and return all recipes that contain any of those ingredients.






## ✨ 1.6 Review Amazon's code
1. Describe in your own words to a team mate or mentor what this code does
2. The code is hard to read due to poor naming. Can you improve it? (there might be more than just the names to improve) 
```js
function filterItems(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i].price < 30 && list[i].inStock) {
            if (list[i].price < 20) {
                let item = list[i].item;
                result.push(item);
            }
        }
    }
    if (result.length === 0) {
        return [];
    }

    return result;
}

let shpitms = [
    { item: "Apple", price: 1.5, inStock: true },
    { item: "Laptop", price: 999.99, inStock: true },
    { item: "T-shirt", price: 15, inStock: false },
    { item: "Bananas", price: 2, inStock: true },
    { item: "Headphones", price: 25, inStock: true }
];

console.log(filterItems(shpitms)); 
// Expected Output: ["Apple", "Bananas"]

```



## 🎓🧱 1.7 Implement Graceful Error Handling
> [!TIP]
> The best way to verify your understanding of a topic or some code is to explain it to someone else!

In this exercise, you will learn how to handle errors in JavaScript. Proper error handling is crucial for building robust applications.



1. Learn how errors work in Javascript and explain it to a classmate and a mentor.
   * How can I create a custom error?
   * What does it mean to "handle" an error?
    * What happens if you don't handle errors in your code?
    * How can custom error classes improve error handling in your applications?

1. **Basic Error Handling**
    * Write a function `divide(a, b)` that returns the result of dividing `a` by `b`.
    * What happens if you call divide(5, 0)
    * Make sure the method logs a meaningful error: `Division by zero is not allowed`

2. **Handling Multiple Errors**
    * Use a `try...catch` block to handle errors that occurs.
    ```js
    function logOnlySmallNumbers(number) {
        // make this function throw an error if the number is higher than 100
        // otherwise log the number
    }

    function logSmallNumbers(numbers) {
        // make sure this method logs all the small numbers by handling any errors
        for (const number of numbers) {
            logOnlySmallNumbers(number);
        }    
    }

    logSmallNumbers([40, 150, 9999, 20, -10, 3000]);
    ```
    







## 🧱 1.8 Implement a Shopping Cart
You will create a basic shopping cart system that calculates the total price, applies discounts, and adds taxes.

1. **Create a Visitor Object**
    * Write a function createVisitor(name, age, height, hasPass) and returns an object with these properties. Height should be in cm.
2. **Calculate Ticket Price**
    * Write a function calculateTicketPrice(visitor).
    * Rules:
        * Kids (under 12 years) → $10
        * Teens (12-17 years) → $15
        * Adults (18+) → $20
        * Season Pass Holders → Free!
3. **Ride Eligibility Check** 🎡
    * Write a function `canRide(visitor, minHeight)` that returns `true` if the visitor is tall enough, otherwise `false`.
    * Example:
    ```js
    canRide({ name: "Alice", height: 140 }, 120);  // true
    canRide({ name: "Bob", height: 110 }, 120);  // false
    ```

4. **Group Visitors & Total Revenue**
    * Create an array `visitors` with at least 5 visitor objects.
    * Write a function `calculateTotalRevenue(visitors)` that:
        * Loops through all visitors.
        * Adds up the total ticket sales.
        * Returns the total amount earned by the park.

5. **Display Visitor Details**
    * Write a function `displayVisitorInfo(visitor)` that logs:
    ```yaml
    Name: Jake | Age: 14 | Height: 150cm | Ticket Price: $15
    ```
