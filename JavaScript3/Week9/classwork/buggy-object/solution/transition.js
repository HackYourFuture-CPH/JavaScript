
// Solution
var pageSize = document.documentElement.clientWidth;
var obj = {
    div : document.querySelector('div'),
    isMoving : false, // is currently moving
    // EDIT : normal function
    move : function () {
        // EDIT : should use offsetWidth since style object oly contains inline css
        this.div.style.transform = "translateX(" + (pageSize - this.div.offsetWidth) + "px)";
        this.isMoving = true;
        // EDIT : using arrow function as callback if we want the this in the function to point to obj
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

