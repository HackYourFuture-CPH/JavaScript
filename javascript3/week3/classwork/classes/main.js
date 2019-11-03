class Rectangle {
  constructor(l, w) {
    this.length = l;
    this.width = w;
  }

  calculateArea() {
    return this.length * this.width;
  }
}

const rect1 = new Rectangle(5, 3);
const rect2 = new Rectangle(8, 4);
const rect3 = new Rectangle(5, 3);


console.log(rect1.length, rect1.width);
console.log(rect2.calculateArea());

const rectangles = [rect1, rect2];

console.log(rect1 === rect3);

let x = 3;
let y = x;
x = 5;

let rect4 = new Rectangle(5, 3);
let rect5 = rect4;
rect5.length = 23;
console.log(rect4.length);


const weirdRect = new Rectangle(40);
// weirdRect.width = 20;
console.log(weirdRect.calculateArea());