
// Get references to elements
const gif = document.getElementById('gif');
const arena = document.getElementById('arena');//'image-container'

// Listen for gif load
gif.addEventListener('load', () => {
    console.log('GIF loaded');

    window.setTimeout(()=>{
        console.log('Animation ended');
        gif.style.animationPlayState = 'paused'; // Pause animation
        gif.classList.add('hidden'); // Hide the GIF
        arena.classList.remove('hidden'); // Show the image container
    },21670);
});

// Add click handlers to judge elements
const judge1 = document.getElementById('judge1');
judge1.addEventListener('click', () => {
    // Navigate to page for judge 1
});

// Same for other judges
