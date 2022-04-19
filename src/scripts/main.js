
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Stats from 'three/examples/jsm/libs/stats.module'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// boule 

var boule = document.querySelector('.boule');
window.addEventListener('mousemove', (e)=>{
    let leftPos = e.pageX;
    let topPos = e.pageY;
    boule.style.left= leftPos+'px';
    boule.style.top= topPos+'px';
})





// import * as THREE from 'three';
// import { TetrahedronBufferGeometry } from 'three';

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setClearColor(0x00000)
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// // const geometry = new THREE.BoxGeometry(128, 262, 15);
// // const material = new THREE.MeshBasicMaterial( { 
    
// //     color: 0xFFFFFF,
// // 	wireframe: true,
   
// // } );




// function onLoadCallback(loaded) {
// 	// just output the length for arrays and binary blobs
// 	if (loaded.length) {
// 	  console.log("Loaded", loaded.length);
// 	} else {
// 	  console.log("Loaded", loaded);
// 	}
// }

// function onProgressCallback(progress) {
// 	console.log("Progress", progress);
//   }
//   function onErrorCallback(error) {
// 	console.log("Error", error)
//   }





    
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 500;

// function animate() {
// 				requestAnimationFrame( animate );

// 				cube.rotation.x += 0.00;
// 				cube.rotation.y += 0.01;

// 				renderer.render( scene, camera );
// 			};

// 			animate();



// // const loader = new GLTFLoader();

// // loader.load( 'src/assets/images/banana.glb', function ( gltf ) {

// // 	scene.add( gltf.scene );

// // }, undefined, function ( error ) {

// // 	console.error( error );

// // } );























////Iphone


const scene = new THREE.Scene()
scene.background = new THREE.Color( 0xffffff );
scene.add(new THREE.AxesHelper(5))

const light = new THREE.SpotLight()
light.position.set(5, 5, 5)
scene.add(light)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 10


const renderer = new THREE.WebGLRenderer()
// renderer.physicallyCorrectLights = true
// renderer.shadowMap.enabled = true
// renderer.outputEncoding = THREE.sRGBEncoding
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true

const loader = new GLTFLoader()
loader.load(
    'assets/images/Apple.glb',
    function (gltf) {
        scene.add(gltf.scene)
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

const stats = Stats()
document.body.appendChild(stats.dom)

function animate() {
    requestAnimationFrame(animate)
	renderer.render(scene, camera)
}

animate()






//gsap 
gsap.registerPlugin(ScrollTrigger);
//set camera position
camera.position.y = 0;
camera.position.z = 10;
camera.position.x = 0;

const timeline = gsap.timeline({ 
  paused: true,
  scrollTrigger: {
    trigger: renderer.domElement,
    start: '+=100px',
    end: '+=500px',
    pin: true,
    scrub: true,  
	markers: true, 
  }
})

timeline
.to(camera.position, { x: -0,ease: "none" })
.to(camera.rotation, { y: -10, ease: "none" }, "<")
.to(camera.rotation, { y: -3, ease: "none" })
.to(camera.position, { z: 20, ease: "none" })