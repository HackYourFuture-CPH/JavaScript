
// Exercise: Correct this buggy code.
// When you mouseover the div it should transform so that the div is perfectly positioned next to the right edge of the browser window
// Hint : can be fixed by doing 3 edits
var pageSize = document.documentElement.clientWidth;
var obj = {
    div : document.querySelector('div'),
    isMoving : false, // is currently moving
    move : () => {
        this.div.style.transform = "translateX(" + (pageSize - this.div.style.width) + "px)"; 
        this.isMoving = true;
        this.div.addEventListener('transitionend', function () { // called when the transition has finished
            this.isMoving = false;
        })  
    }
}

obj.div.addEventListener('mouseover', function () {
    obj.move();
    // The setTimeout is called after the transition has finished (1s). isMoving prop should be false then.
    setTimeout(function () {
        console.log(obj.isMoving)
    }, 1200)
})

