
// Solution
var pageSize = document.documentElement.clientWidth;
var obj = {
    div : document.querySelector('div'),
    isMoving : false, // is currently moving
    // EDIT : normal function instead of arrow function. Here the this object will point to obj.
    move : function () {
        // EDIT : should use offsetWidth since style object only contains inline css
        this.div.style.transform = "translateX(" + (pageSize - this.div.offsetWidth) + "px)";
        this.isMoving = true;
        // EDIT : using arrow function as callback if we want the this in the function to point to obj. Otherwise this will point to this.div
        this.div.addEventListener('transitionend', () => {
            this.isMoving = false;
        })  
    }
}

obj.div.addEventListener('mouseover', function () {
    obj.move();
    setTimeout(function () {
        console.log(obj.isMoving)
    }, 1200)
})

