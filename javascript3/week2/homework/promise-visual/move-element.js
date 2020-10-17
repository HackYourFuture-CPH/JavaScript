// Creating new scope
{
    const redBox = document.querySelector('ul.marks li:nth-child(1)');
    const blueBox = document.querySelector('ul.marks li:nth-child(2)');
    const greenBox = document.querySelector('ul.marks li:nth-child(3)');
    const boxes = [redBox, blueBox, greenBox];

    const span = document.querySelector('span');

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomizeStartPosition() {
        boxes.forEach(box => {
            const x = getRandomInt(-20, 20);
            const y = getRandomInt(-20, 20);
            
            box.style.left = x;
            box.style.top = y;
        });
    }

    randomizeStartPosition();


    const targets = document.querySelectorAll('ul.targets li');
    // continously check if circles has been added to the right targets
    setInterval(() => {
        setTargetFulfilled(redBox, targets[0], {x: 20, y: 300});
        setTargetFulfilled(blueBox, targets[1], {x: 400, y: 300});
        setTargetFulfilled(greenBox, targets[2], {x: 400, y: 20});
        
        const allTargetsFulfilled = [...targets].every(target => target.classList.contains('fulfilled'));
        if (allTargetsFulfilled) {
            setTimeout(() => span.classList.add('shown'), 300);
        }
    }, 10);

    function setTargetFulfilled(box, targetBox, fulfilledPosition) {
        const renderedClientBox = box.getBoundingClientRect();
        
        if (renderedClientBox.left === fulfilledPosition.x && renderedClientBox.top === fulfilledPosition.y) {
            targetBox.classList.add('fulfilled');
        }
    }


    /**
     * @param {DOMelement} boxToMove - A DOM element of the box to move
     * @param {Position} newPosition - An object specifying how much to move the box in the x and y directions.
     * @return {Promise<any>}
     */

    function moveElement(boxToMove, newPosition) {
        return new Promise(resolve => {
            boxToMove.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
            boxToMove.addEventListener('transitionend', resolve);
        });
    }

    window.moveElement = moveElement;
}