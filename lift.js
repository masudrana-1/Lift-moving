
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
    lift.style.bottom = currentLevel * 200 + 'px';
    setTimeout(() => { moving = false; }, 5000);
}


let movingSound = document.getElementById('movingSound');

function moveLift(direction) {
    if (moving) return;
    moving = true;

    // Play the sound
    movingSound.play(); 
    let lift = document.getElementById('lift');
    if (direction === 'up' && currentLevel < 2) {
        currentLevel++;
    } else if (direction === 'down' && currentLevel > 0) {
        currentLevel--;
    }
    lift.style.bottom = currentLevel * 200 + 'px';
    setTimeout(() => { 
        moving = false; 

        // Stop the sound
        movingSound.pause(); 

        // Reset the sound to the start
        movingSound.currentTime = 0; 
    }, 5000);
}
