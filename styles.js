// Create scene
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create boxing ring
const ringGeometry = new THREE.TorusGeometry(4, 0.2, 8, 100);
const ringMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
const ring = new THREE.Mesh(ringGeometry, ringMaterial);
scene.add(ring);

// Create fighters (stick figures)
const stickMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const fighter1Geometry = new THREE.BoxGeometry(0.5, 1, 0.5);
const fighter1 = new THREE.Mesh(fighter1Geometry, stickMaterial);
fighter1.position.set(-1, 0.5, 0);
scene.add(fighter1);

const fighter2Geometry = new THREE.BoxGeometry(0.5, 1, 0.5);
const fighter2 = new THREE.Mesh(fighter2Geometry, stickMaterial);
fighter2.position.set(1, 0.5, 0);
scene.add(fighter2);

// Create judges
const judgeMaterial = new THREE.SpriteMaterial({ color: 0x333333, emissive: 0x333333, emissiveIntensity: 1 });

const judges = [];
for (let i = 0; i < 3; i++) {
    const judge = new THREE.Sprite(judgeMaterial);
    judge.position.set(-2 + i * 2, 0.5, -5);
    judge.scale.set(1, 1, 1);
    scene.add(judge);
    judges.push(judge);
}

// Add interactivity
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onClick(event) {
    event.preventDefault();

    // Calculate mouse position
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(judges, true);

    if (intersects.length > 0) {
        // Navigate to different pages based on the clicked judge
        const judgeIndex = judges.indexOf(intersects[0].object);
        if (judgeIndex === 0) {
            window.location.href = 'judge1_page.html';
        } else if (judgeIndex === 1) {
            window.location.href = 'judge2_page.html';
        } else if (judgeIndex === 2) {
            window.location.href = 'judge3_page.html';
        }
    }
}

window.addEventListener('click', onClick);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Update fighters' animation

    renderer.render(scene, camera);
}

animate();