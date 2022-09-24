import './style.css'
import * as three from 'three'
import * as Quote from 'quotesy'; 
import '/vaporWave3.jpg'

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


const vaporWaveTextureLoader = new three.TextureLoader(); 

const textaaa = vaporWaveTextureLoader.load(
	// resource URL
	'/vaporWave3.jpg',
);


scene.background = textaaa;  

var quoteHTMLElement = document.createElement('div');
quoteHTMLElement.style.position = 'absolute';
quoteHTMLElement.style.fontFamily = 'Verdana'; 
quoteHTMLElement.style.fontSize = '20px'; 
quoteHTMLElement.style.width = 50;
quoteHTMLElement.style.height = 75;
quoteHTMLElement.style.top = 150 + 'px';
quoteHTMLElement.style.left = 150 + 'px';

const animate = () => {

  renderer.render(scene, perspectiveCamera); 
  
  const elapsedTime = clock.getElapsedTime();
  plane.position.z = ((elapsedTime * 9) % 200) ; 
  plane2.position.z = ((elapsedTime * 9) % 200) - 2 ; 
  plane3.position.z = ((elapsedTime * 9) % 200) - 3 ; 
  plane4.position.z = ((elapsedTime * 9) % 200) - 4 ; 
  plane5.position.z = ((elapsedTime * 9) % 200) - 5 ; 

  requestAnimationFrame(animate);
}; 

function pullQuote() {
  plane.material.color.set(random_hex_color_code())
  let quoteNAuthor = Quote.random();
  quoteHTMLElement.innerHTML = quoteNAuthor.text + "<br></br>-" + quoteNAuthor.author;
  document.body.appendChild(quoteHTMLElement);
  setTimeout(pullQuote, 30000);
}

pullQuote();
animate(); 