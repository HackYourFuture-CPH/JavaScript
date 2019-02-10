// Properties and methods on an object;

var a = 1,
   b = 2,
   c = 3,
   g = "baz";

var o = {
   a,
   b,
   c,
   d() {
      return this.c;
   },
   get e() {
      return this.a
   },
   set f(val) {
      this.a = val;
   },
   [g] : "Foo",
   h: function() {
      return "returned from object function";
   },
   i: () => {
      return "returned from object arrow function";
   }
};

delete o.b // delete prop

o.f = 5; // setter prop

var prop_d = o.d;
console.log(prop_d()); // undefined - The this in the function now points to the global scope
console.log(prop_d.call(o)) // 3 - call function in o context
var boundD = prop_d.bind(o); // permanently bind o object as this
console.log(boundD()) // 3

