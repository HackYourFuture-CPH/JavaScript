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
            // add functionality here
        },
        getEvents: function() {
            // add functionality here
        },
        logEvents: function() {
            // add functionality here
            // should log out events in a easy readible way
        },
        addEvent: function(event) {
            // add functionality here
        }
    };
}

const firstEvent = createEvent('Super duper mega important meeting (VERY ImPoRtAnT!!)', 14, 45);
const calendar = createCalendar([firstEvent]);
```

### Part 3:
Apply the methods you have created on the calendar factory function. 