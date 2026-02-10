// 3D Spice Animation using Three.js
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('spice-animation').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xFF6B35 });
const spice = new THREE.Mesh(geometry, material);
scene.add(spice);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    spice.rotation.x += 0.01;
    spice.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
