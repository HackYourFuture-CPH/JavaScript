function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.classList.add(`gradient-${getRandomInt(1,4)}`);

const liElements = document.querySelectorAll('li');
console.log(liElements);

// 1. click the button event

function animateLiOut(index, swipeDirection) {
    if(swipeDirection === 'left') {
        liElements[index].style.transform = 'translateX(1000px)';

    } else {
        liElements[index].style.transform = 'translateX(-1000px)';
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 700);
    });
}

function animateNextLiIn(index) {
    liElements[index].style.transform = 'scale(1)';
    liElements[index].style.opacity = 1;
}

let liIndexCounter = 0;
document.querySelector('.accept').addEventListener('click', () => {
    animateLiOut(liIndexCounter, 'right')
        .then(() => {
            animateNextLiIn(liIndexCounter + 1);
        });

    liIndexCounter++;
});



// 2. translate the li to the side

// 3. next li should appear. when the first is done. 

