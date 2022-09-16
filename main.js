import './style.css'
import * as three from 'three'
import { Color } from 'three';
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import * as Quote from 'quotesy'; 

const scene = new three.Scene(); 
const perspectiveCamera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 50);  
const renderer = new three.WebGLRenderer({
  canvas: document.querySelector('#background'),
}); 

renderer.setPixelRatio(window.devicePixelRatio); 
renderer.setSize(window.innerWidth, window.innerHeight); 

perspectiveCamera.position.x = 15; 
perspectiveCamera.position.y = 18; 
perspectiveCamera.position.z = 0.15;   

const random_hex_color_code = () => {
  let color = new three.Color( 0xffffff );
  color.setHex( Math.random() * 0xffffff );
  return color; 
}; 


// const Quote = require('random-quotes'); 
const planeGeometry = new three.PlaneGeometry(window.innerWidth, window.innerHeight, 100, 100);  
const planeMaterial = new three.MeshStandardMaterial({color: random_hex_color_code()/*0xf0b46a*/ , wireframe:true, wireframeLinewidth:50}); 
const plane = new three.Mesh(planeGeometry,planeMaterial); 
const plane2 = new three.Mesh(planeGeometry, planeMaterial); 
const plane3 = new three.Mesh(planeGeometry, planeMaterial); 
const plane4 = new three.Mesh(planeGeometry, planeMaterial); 
const plane5 = new three.Mesh(planeGeometry, planeMaterial); 
const clock = new three.Clock(); 


plane.rotation.x = -Math.PI * 0.5; 
plane.position.y = -12.0; 
plane.position.z = 0.15; 

plane2.rotation.x = -Math.PI * 0.5; 
plane2.position.y = -12.0 + 2; 
plane2.position.z = 0.15; 

plane3.rotation.x = -Math.PI * 0.5; 
plane3.position.y = -12.0 + 3; 
plane3.position.z = 0.15; 

plane4.rotation.x = -Math.PI * 0.5; 
plane4.position.y = -12.0 + 4; 
plane4.position.z = 0.15; 

plane5.rotation.x = -Math.PI * 0.5; 
plane5.position.y = -12.0 + 5; 
plane5.position.z = 0.15; 
  

const ambientLight = new three.AmbientLight(0xffffff); 
ambientLight.position.set(5, 5, 5); 

scene.add(plane, plane2, plane3, plane4, plane5, ambientLight); 

const vaporWaveTexture = new three.TextureLoader().load('vaporWave3.jpg');
scene.background = vaporWaveTexture;  

var quoteHTMLElement = document.createElement('div');
quoteHTMLElement.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
quoteHTMLElement.style.width = 100;
quoteHTMLElement.style.height = 100;
quoteHTMLElement.style.backgroundColor = "blue";
quoteHTMLElement.style.top = 200 + 'px';
quoteHTMLElement.style.left = 200 + 'px';

const animate = () => {

  renderer.render(scene, perspectiveCamera); 
  
  const elapsedTime = clock.getElapsedTime();
  plane.position.z = ((elapsedTime * 9) % 200) ; 
  plane2.position.z = ((elapsedTime * 9) % 200) - 2 ; 
  plane3.position.z = ((elapsedTime * 9) % 200) - 3 ; 
  plane4.position.z = ((elapsedTime * 9) % 200) - 4 ; 
  plane5.position.z = ((elapsedTime * 9) % 200) - 5 ; 
  // console.log(Quote.getRandomQuote()); 

  // if () {
  //   setTimeout(function() {
  //     console.log(Quote.getRandomQuote()); 
  //     console.log(" "); 
  //   }, 3000); 
  // }

  // do {
  //   console.log(Quote.getRandomQuote()); 
  // }
  // while (plane.position.z == ((elapsedTime * 9) % 200));

  requestAnimationFrame(animate);

  // setTimeout(function() {
  //   plane.material.color.setHex(random_hex_color_code());
  // }, delayInMilliseconds);

  
}; 

function pullQuote() {
  plane.material.color.set(random_hex_color_code())
  let quoteNAuthor = Quote.random();
  console.log(quoteNAuthor.text + "\n-" + quoteNAuthor.author); 
  quoteHTMLElement.innerHTML = quoteNAuthor.text;
  document.body.appendChild(quoteHTMLElement);
  setTimeout(pullQuote, 30000);
}

pullQuote();
animate(); 
 

// document.querySelector('#app').innerHTML = 
// `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
