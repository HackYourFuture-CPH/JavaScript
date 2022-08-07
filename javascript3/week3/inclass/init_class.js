class User {
    constructor(name) {
        this.name = name; // Attribute Property

        this.lastName = null;
    }

    sayHi() { // method
        alert(this.name);
    }

    setLastName(lastName) {
        this.lastName = lastName
    }
}

// Usage:
let user = new User("John");
let user2 = new User("Peter");
user.sayHi();

user2.sayHi();
user2.lastName = "Pan"