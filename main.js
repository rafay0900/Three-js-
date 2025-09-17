import * as THREE from "three"
import  {OrbitControls} from 'three/addons/controls/OrbitControls.js'

const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(0,15,150)


const canvas=document.querySelector('canvas.three');
const renderer=new THREE.WebGLRenderer({canvas:canvas,antialias:true})


const loader = new THREE.CubeTextureLoader();
const skyboxTexture = loader.load([
  '/Textures/Skybox2_8/SkyboxX-.png',
  '/Textures/Skybox2_8/SkyboxX+.png',
  '/Textures/Skybox2_8/SkyboxY-.png',
  '/Textures/Skybox2_8/SkyboxY+.png',
  '/Textures/Skybox2_8/SkyboxZ-.png',
  '/Textures/Skybox2_8/SkyboxZ+.png'
]);

scene.background = skyboxTexture;
const textureLoader = new THREE.TextureLoader();
//sun
const sunMesh=new THREE.SphereGeometry(10,64,64
);

const sunMat=new THREE.MeshBasicMaterial(
    {map:textureLoader.load("/Textures/2k_sun.jpg")}
);

const sun=new THREE.Mesh(sunMesh,sunMat)


// mercury
const mercuryMesh=new THREE.SphereGeometry(2,64,64
);

const mercuryMat=new THREE.MeshBasicMaterial(
    {map:textureLoader.load("/Textures/2k_mercury.jpg")}
);

const mercury=new THREE.Mesh(mercuryMesh,mercuryMat)

//venus
const VenusMesh=new THREE.SphereGeometry(4,64,64
);

const VenusMat=new THREE.MeshBasicMaterial(
    {map:textureLoader.load("/Textures/8k_venus_surface.jpg")}
);

const Venus=new THREE.Mesh(VenusMesh,VenusMat)

// earth
const earthMesh=new THREE.SphereGeometry(3,64,64
);

const earthMat=new THREE.MeshBasicMaterial(
    {map:textureLoader.load("/Textures/8k_earth_daymap.jpg")}
);

const Earth=new THREE.Mesh(earthMesh,earthMat)

// moon
const moonMesh=new THREE.SphereGeometry(2.5,64,64
);

const moonMat=new THREE.MeshBasicMaterial(
    {map:textureLoader.load("/Textures/8k_moon.jpg")}
);

const Moon=new THREE.Mesh(moonMesh,moonMat)

// mars
const marsMesh=new THREE.SphereGeometry(2.8,64,64
);

const marsMat=new THREE.MeshBasicMaterial(
    {map:textureLoader.load("/Textures/8k_mars.jpg")}
);

const Mars=new THREE.Mesh(marsMesh,marsMat)

// jupiter
const jupiterMesh=new THREE.SphereGeometry(6,64,64
);

const jupiterMat=new THREE.MeshBasicMaterial(
    {map:textureLoader.load("/Textures/8k_jupiter.jpg")}
);

const Jupiter=new THREE.Mesh(jupiterMesh,jupiterMat)

// saturn
const saturnMesh=new THREE.SphereGeometry(5,64,64
);

const saturnMat=new THREE.MeshBasicMaterial(
    {map:textureLoader.load("/Textures/8k_saturn.jpg")}
);

const Saturn=new THREE.Mesh(saturnMesh,saturnMat)

// uranus
const uranusMesh=new THREE.SphereGeometry(4.5,64,64
);

const uranusMat=new THREE.MeshBasicMaterial(
    {map:textureLoader.load("/Textures/2k_uranus.jpg")}
);

const Uranus=new THREE.Mesh(uranusMesh,uranusMat)

// neptune
const neptuneMesh=new THREE.SphereGeometry(4,64,64
);

const neptuneMat=new THREE.MeshBasicMaterial(
    {map:textureLoader.load("/Textures/2k_neptune.jpg")}
);

const Neptune=new THREE.Mesh(neptuneMesh,neptuneMat)


scene.add(sun,mercury,Venus,Earth,Moon,Mars,Jupiter,Saturn,Uranus,Neptune)

addEventListener('resize',()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    renderer.setSize(window.innerWidth,window.innerHeight)
    camera.updateProjectionMatrix()
})
// sun rotation

function SunRotation(delta,speed)
{
    sun.rotateY(0.01*delta*speed)

}

// mercury rotation

let mercuryAngle=0;
let mercuryRadius=0;
function MercuryRotation(delta,speed)
{
    mercuryAngle+=.019*delta*speed;
    mercuryRadius=15
     mercury.rotateY(0.01*delta*speed)
     mercury.position.x = sun.position.x + mercuryRadius * Math.cos(mercuryAngle);
    mercury.position.z = sun.position.z + mercuryRadius * Math.sin(mercuryAngle);
   
}
// venus rotation

let venusAngle=0;
let venusRadius=0;
function VenusRotation(delta,speed)
{
    venusAngle+=.015*delta*speed;
    venusRadius=30

     Venus.rotateY(0.01*delta*speed)
     Venus.position.y=1
     Venus.position.x = sun.position.x + venusRadius * Math.cos(venusAngle);
    Venus.position.z = sun.position.x + venusRadius * Math.sin(venusAngle);
  
}
// earth rotation

let earthAngle=0;
let earthRadius=0;
function EarthRotation(delta,speed)
{
    earthAngle+=.0125*delta*speed;
    earthRadius=40

     Earth.rotateY(0.01*delta*speed)
     
     Earth.position.x = sun.position.x + earthRadius * Math.cos(earthAngle);
    Earth.position.z = sun.position.x + earthRadius * Math.sin(earthAngle);
    Earth.position.y=0.5

}
// moon rotation
let moonAngle=0;
let moonRadius=0;
function MoonRotation(delta,speed)
{
    moonAngle+=0.02*delta*speed;
    moonRadius=8

     Moon.rotateY(0.01*delta*speed)
     
     Moon.position.x = Earth.position.x + moonRadius * Math.cos(moonAngle);
    Moon.position.z = Earth.position.z + moonRadius * Math.sin(moonAngle);
    Moon.position.y=Earth.position.y
   
}
// mars rotation

let marsAngle=0;
let marsRadius=0;
function MarsRotation(delta,speed)
{
    marsAngle+=0.01*delta*speed;
    marsRadius=50

     Mars.rotateY(0.01*delta*speed)
     
     Mars.position.x = sun.position.x + marsRadius * Math.cos(marsAngle);
    Mars.position.z = sun.position.z + marsRadius * Math.sin(marsAngle);
 
}
// jupiter rotation
let jupiterAngle=0;
let jupiterRadius=0;
function JupiterRotation(delta,speed)
{
    jupiterAngle+=0.0075*delta*speed;
    jupiterRadius=60

     Jupiter.rotateY(0.01*delta*speed)
     
     Jupiter.position.x = sun.position.x + jupiterRadius * Math.cos(jupiterAngle);
    Jupiter.position.z = sun.position.z + jupiterRadius * Math.sin(jupiterAngle);
    Jupiter.position.y=1.5
  

}
// saturn rotation
let SaturnAngle=0;
let SaturnRadius=0;
function SaturnRotation(delta,speed)
{
    SaturnAngle+=0.005*delta*speed;
    SaturnRadius=70

     Saturn.rotateY(0.01*delta*speed)
     
     Saturn.position.x = sun.position.x + SaturnRadius * Math.cos(SaturnAngle);
    Saturn.position.z = sun.position.z + SaturnRadius * Math.sin(SaturnAngle);

    

}
// uranus rotation
let uranusAngle=0;
let uranusRadius=0;
function UranusRotation(delta,speed)
{
    uranusAngle+=0.0025*delta*speed;
    uranusRadius=80

     Uranus.rotateY(0.01*delta*speed)
     
     Uranus.position.x = sun.position.x + uranusRadius * Math.cos(uranusAngle);
    Uranus.position.z = sun.position.z + uranusRadius * Math.sin(uranusAngle);

   

}
// neptune rotation
let neptuneAngle=0;
let neptuneRadius=0;
function NeptuneRotation(delta,speed)
{
    neptuneAngle+=0.001*delta*speed;
    neptuneRadius=90

     Neptune.rotateY(0.01*delta*speed)
     
     Neptune.position.x = sun.position.x + neptuneRadius * Math.cos(neptuneAngle);
    Neptune.position.z = sun.position.z + neptuneRadius * Math.sin(neptuneAngle);

  


}
// camera move

function CameraMovement(delta,speed)
{
if(keys["w"] ||keys["W"] ) camera.position.z-=0.5*delta*speed;
if(keys["s"]||keys["S"]) camera.position.z+=0.5*delta*speed;
if(keys["a"] ||keys["A"] ) camera.position.x-=0.5*delta*speed;
if(keys["d"]||keys["D"]) camera.position.x+=0.5*delta*speed;
if(keys["z"] ||keys["Z"] ) camera.position.y-=0.5*delta*speed;
if(keys["x"]||keys["X"]) camera.position.y+=0.5*delta*speed;
camera.position.x=THREE.MathUtils.clamp(camera.position.x,-50,50)
camera.position.y=THREE.MathUtils.clamp(camera.position.y,-100,100)
camera.position.z=THREE.MathUtils.clamp(camera.position.z,200,400)

}
const keys={};
window.addEventListener('keydown',(k)=>{
    keys[k.key.toLowerCase() ||k.key.toUpperCase() ]=true;
})
window.addEventListener('keyup',(k)=>{
    keys[k.key.toLowerCase()||k.key.toUpperCase() ]=false;
})





const clock=new THREE.Clock()
let currentTime=0;
let previousTime=0;

const RenderLoop = ()=>
{
    currentTime=clock.getElapsedTime()
    let delta = currentTime-previousTime;
    previousTime = currentTime
SunRotation(delta,100)
MercuryRotation(delta,100)
VenusRotation(delta,100)
EarthRotation(delta,100)
MoonRotation(delta,100)
MarsRotation(delta,100)
JupiterRotation(delta,100)
SaturnRotation(delta,100)
UranusRotation(delta,100)
NeptuneRotation(delta,100)
CameraMovement(delta,100)
  renderer.render(scene,camera)
  requestAnimationFrame(RenderLoop)
}
RenderLoop()



