class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(salutation) {
    return `${salutation} ${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User('Linus', 'Torvalds');
const user2 = new User('Bill', 'Gates');

console.log(user1, user1.firstName);
console.log(user2, user2.lastName);

console.log(user1.getFullName('Mr.'));
