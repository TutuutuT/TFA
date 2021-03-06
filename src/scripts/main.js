
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import Stats from 'three/examples/jsm/libs/stats.module'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// apparition titres


gsap.from('.t-titre',{
    delay: 0.7,
    y: 100,
    duration: 0.7,
    ease: 'easeIn'
});

gsap.from('.b-titre',{
    delay: 0.5,
    y: 100,
    duration: 0.7,
    ease: 'easeIn'
});


////Iphone


const scene = new THREE.Scene()
scene.background = new THREE.Color( 0x00000 );

const light = new THREE.SpotLight()
light.position.set(0, 5, 10)
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
renderer.setPixelRatio(window.devicePixelRatio);
// document.body.appendChild(renderer.domElement)
document.getElementById("three").appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = false;
controls.autoRotate = false;
controls.object = false;

const loader = new GLTFLoader()
loader.load(
    'assets/images/tel.glb',
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

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

function animate() {
    requestAnimationFrame(animate)
	renderer.render(scene, camera)
}

animate()






//gsap 
gsap.registerPlugin(ScrollTrigger);
//set camera position
camera.position.y = 0;
camera.position.z = 7;
camera.position.x = 0;

const timeline = gsap.timeline({ 
  paused: true,
  scrollTrigger: {
    trigger: renderer.domElement,
    start: 'top top',
    end: '+=2500',
    //end premiere 1000px
    scrub: true,  
  }
})

timeline
.to(camera.position, { y: 1,ease: "none" })
.to(camera.position, { z: -0.2,ease: "none" })
.to(camera.rotation, { x: -1.57, ease: "none" })
.to(camera.position, { y: 7,ease: "none" })
.to(camera.position, { y: 8,ease: "none" })
.to(camera.position, { y: 9,ease: "none" })
.to(camera.position, { y: 10,ease: "none" })
.to(camera.position, { y: 10,ease: "none" })//end premiere 1000px


//anim gsap


gsap.from(".title", {
    scrollTrigger: ".intro__title",
    y: 100,
    delay: 0.5,
  });

gsap.from(".list__item", {
    scrollTrigger: ".intro__title",
    y: 100,
    delay: 0.7,
    stagger: 0.05,
  });

  gsap.from(".style-list", {
    scrollTrigger: ".intro__title",
    y: 100,
    delay: 0.7,
  });

  gsap.from(".button-nav", {
    scrollTrigger: ".intro__title",
    y: 100,
    opacity: 0,
    delay: 1,
    stagger: 0.05,
  });




  

  var numberElement1 = document.getElementById('number1');
  var numberValue1 = { value: 0, endValue: 40 };
    gsap.to(numberValue1, {
      scrollTrigger: ".grid-stat__b",
      value: numberValue1.endValue,
      duration: 4,
      roundProps: 'value',
      ease: 'power2.inOut',
      onUpdate: () => {
        numberElement1.innerHTML = numberValue1.value;
      },
    });

  var numberElement2 = document.getElementById('number2');
  var numberValue2 = { value: 0, endValue: 29 };
    gsap.to(numberValue2, {
      scrollTrigger: ".grid-stat__b",
      value: numberValue2.endValue,
      duration: 4,
      roundProps: 'value',
        ease: 'power2.inOut',
      onUpdate: () => {
        numberElement2.innerHTML = numberValue2.value;
      },
    });
  
  var numberElement = document.getElementById('number3');
  var numberValue = { value: 0, endValue: 532 };
    gsap.to(numberValue, {
      scrollTrigger: ".grid-stat__b",
      value: numberValue.endValue,
      duration: 4,
      roundProps: 'value',
      ease: 'power2.inOut',
      onUpdate: () => {
        numberElement.innerHTML = numberValue.value;
      },
    });
    