// lift.js
let currentLevel = 0;
let moving = false;

function moveLift(direction) {
    if (moving) return;
    moving = true;
    let lift = document.getElementById('lift');
    if (direction === 'up' && currentLevel < 2) {
        currentLevel++;
    } else if (direction === 'down' && currentLevel > 0) {
        currentLevel--;
    }
    lift.style.bottom = currentLevel * 233 + 'px';
    setTimeout(() => { moving = false; }, 5000);
}
