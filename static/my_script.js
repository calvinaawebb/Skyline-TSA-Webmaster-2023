import * as THREE from 'https://cdn.skypack.dev/three';

// create a scene
const scene = new THREE.Scene();

// create a camera
const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );
camera.position.z = 5;

// create a renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("threejs-canvas") });

// add the renderer to the HTML document
document.getElementById("threejs-container").appendChild( renderer.domElement );

// create a cube and add it to the scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// center the cube in the right container
/*
function centerCube() {
  const container = document.querySelector('.right');
  const { width, height } = container.getBoundingClientRect();
  cube.position.x = 0;
  cube.position.y = 0;
  cube.position.z = 0;
  cube.translateX(-width/2);
  cube.translateY(-height/2);
}
centerCube();
*/
// render the scene
function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

// update the size of the renderer and camera when the window is resized
function onWindowResize() {
  const container = document.querySelector('.right');
  const { width, height } = container.getBoundingClientRect();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize( width, height );
  /*centerCube();*/
}
window.addEventListener( 'resize', onWindowResize, false );
onWindowResize();
