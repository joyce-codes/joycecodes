// Get references to elements
const gif = document.getElementById('gif');
const imageContainer = document.getElementById('image-container');

// Listen for gif load
gif.addEventListener('load', () => {
    console.log('GIF loaded');

    // Listen for animation end just once
    gif.addEventListener('animationend', function animationEndHandler() {
        console.log('Animation ended');
        gif.style.animationPlayState = 'paused'; // Pause animation
        gif.classList.add('hidden'); // Hide the GIF
        imageContainer.classList.remove('hidden'); // Show the image container
        
        // Remove the event listener to avoid duplicate handlers
        gif.removeEventListener('animationend', animationEndHandler);
    }, { once: true });
});

// Add click handlers to judge elements
const judge1 = document.getElementById('judge1');
judge1.addEventListener('click', () => {
    // Navigate to page for judge 1
});

// Same for other judges