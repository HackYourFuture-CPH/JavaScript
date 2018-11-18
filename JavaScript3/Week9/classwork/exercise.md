# Part 1

## Creating a calendar

The calendar that we will be making uses two factory functions: ```createEvent``` and
```createCalendar```. The ```createCalendar``` we have made for you (with some missing functionality). The ```createEvent``` factory function you need to create.

### Part 1:
```createEvent``` has three parameters: ```name```, ```startTime``` in hours and ```duration``` in minutes. It should return an object with those keys and the value set to the corrosponding parameter. Create that factory function.

### Part 2: 
Now add the functionality for the methods in the ```createCalendar```  factory function.

```js
function createCalendar(events) {
    return {
        name: 'Personal calendar',
        getName: function() {
            // returns the name of the calendar using the this keyword
            // add functionality here
        },
        getAllEvents: function() {
            // returns all the events in an array
            // add functionality here
        },
        addEvent: function(event) {
            // Adds an event to the events array
            // add functionality here
        },
        removeEvent: function(event) {
            // Removes an event to the events array
            // add functionality here
        },
        getCalendarOwner: function() {
            // should return a promise with the user object found from this url: https://jsonplaceholder.typicode.com/users/1
        }
    };
}

const firstEvent = createEvent('Super duper mega important meeting (VERY ImPoRtAnT!!)', 14, 45);
const calendar = createCalendar([firstEvent]);
```

### Part 3:
Apply the methods you have created on the calendar factory function. 

### part 4: 
Add two extra methods:  getEvent and logEvents: 