// Envelope Opening Animation
const envelope = document.getElementById('envelope');
const card = document.getElementById('card');
const pages = document.querySelectorAll('.page');

envelope.addEventListener('click', () => {
  gsap.to('.flap', { rotationX: 180, duration: 1, ease: 'power2.inOut' });
  gsap.to(card, { rotationX: -180, duration: 1, ease: 'power2.inOut', delay: 0.5 });
  setTimeout(() => {
    pages[0].classList.add('active');
  }, 1500);
});

// Page Transitions
let currentPage = 0;
pages.forEach((page, index) => {
  page.addEventListener('click', () => {
    if (index < pages.length - 1) {
      pages[currentPage].classList.remove('active');
      pages[index + 1].classList.add('active');
      currentPage = index + 1;
    }
  });
});

// 3D Effect with Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff69b4, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();