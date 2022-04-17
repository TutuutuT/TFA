import * as THREE from 'three';
import { TetrahedronBufferGeometry } from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0x00000)
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(128, 262, 15);
const material = new THREE.MeshBasicMaterial( { 
    
    color: 0xFFFFFF,
	wireframe: true,
   
} );


// const loader = new GLTFLoader();

// loader.load( './assets/images/banana.glb', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );



function onLoadCallback(loaded) {
	// just output the length for arrays and binary blobs
	if (loaded.length) {
	  console.log("Loaded", loaded.length);
	} else {
	  console.log("Loaded", loaded);
	}
}

function onProgressCallback(progress) {
	console.log("Progress", progress);
  }
  function onErrorCallback(error) {
	console.log("Error", error)
  }





    
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 500;

function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.00;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();



// const loader = new GLTFLoader();

// loader.load( 'src/assets/images/banana.glb', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );




















////banane






// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import Stats from 'three/examples/jsm/libs/stats.module'

// const scene = new THREE.Scene()
// scene.add(new THREE.AxesHelper(5))

// const light = new THREE.SpotLight()
// light.position.set(5, 5, 5)
// scene.add(light)

// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// )
// camera.position.z = 2

// const renderer = new THREE.WebGLRenderer()
// // renderer.physicallyCorrectLights = true
// // renderer.shadowMap.enabled = true
// // renderer.outputEncoding = THREE.sRGBEncoding
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

// const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true

// const loader = new GLTFLoader()
// loader.load(
//     'models/monkey.glb',
//     function (gltf) {
//         // gltf.scene.traverse(function (child) {
//         //     if ((child as THREE.Mesh).isMesh) {
//         //         const m = (child as THREE.Mesh)
//         //         m.receiveShadow = true
//         //         m.castShadow = true
//         //     }
//         //     if (((child as THREE.Light)).isLight) {
//         //         const l = (child as THREE.Light)
//         //         l.castShadow = true
//         //         l.shadow.bias = -.003
//         //         l.shadow.mapSize.width = 2048
//         //         l.shadow.mapSize.height = 2048
//         //     }
//         // })
//         scene.add(gltf.scene)
//     },
//     (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
//     },
//     (error) => {
//         console.log(error)
//     }
// )

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

// const stats = Stats()
// document.body.appendChild(stats.dom)

// function animate() {
//     requestAnimationFrame(animate)

//     controls.update()

//     render()

//     stats.update()
// }

// function render() {
//     renderer.render(scene, camera)
// }

// animate()