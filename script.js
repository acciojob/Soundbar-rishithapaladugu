//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentSound = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundSrc = button.getAttribute('data-sound');
        if (currentSound) {
            currentSound.pause();
        }
        currentSound = new Audio(soundSrc);
        currentSound.play();
    });
});

stopButton.addEventListener('click', () => {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0; // Reset the sound
    }
});