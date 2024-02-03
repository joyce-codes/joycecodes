
// Get references to elements
const gif = document.getElementById('gif');
const arena = document.getElementById('arena');
const stickmanCanvas = document.getElementById('stickmanCanvas');
const ctx = stickmanCanvas.getContext('2d');

// Listen for gif load
gif.addEventListener('load', () => {
    console.log('GIF loaded');

    window.setTimeout(() => {
        console.log('Animation ended');
        gif.style.animationPlayState = 'paused'; // Pause animation
        gif.classList.add('hidden'); // Hide the GIF
        arena.classList.remove('hidden'); // Show the image container

        // Start stickman animation
        animateStickmen();
    }, 20900); // Adjust this delay as needed
});

// Function to animate stickmen
function animateStickmen() {
    let frame = 0;
    const stickmen = [];

    // Load stickman images
    const stickmanPaths = ['s1.webp', 's2.webp', 's3.webp', 's4.webp',
                       's5.webp', 's6.webp', 's7.webp', 's8.webp']; // Paths to stickman images
    const stickmanImages = [];
    let loadedImages = 0;

    function loadImages() {
        for (let i = 0; i < stickmanPaths.length; i++) {
            const img = new Image();
            img.onload = () => {
                loadedImages++;
                if (loadedImages === stickmanPaths.length) {
                    startAnimation();
                }
            };
            img.src = stickmanPaths[i];
            stickmanImages.push(img);
        }
    }

    function startAnimation() {
        for (let i = 0; i < 8; i++) {
            stickmen.push({ image: stickmanImages[i], x: i * 100, y: stickmanCanvas.height / 2 });
        }

        function animate() {
            ctx.clearRect(0, 0, stickmanCanvas.width, stickmanCanvas.height);
            for (const stickman of stickmen) {
                ctx.drawImage(stickman.image, stickman.x, stickman.y);
                stickman.x += Math.random() * 4 - 2; // Randomize x position
                stickman.y += Math.random() * 4 - 2; // Randomize y position
            }
            requestAnimationFrame(animate);
        }

        animate();
    }

    // Start loading images and animation
    loadImages();
}


// Add click handlers to judge elements
const judge1 = document.getElementById('judge1');
judge1.addEventListener('click', () => {
    // Navigate to page for judge 1
});

// Same for other judges
