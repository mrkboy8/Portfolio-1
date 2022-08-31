let scene, camera, renderer;

function init() {

scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
camera.rotation.y = 1;
camera.rotation.z = 1;
camera.position.x = -2000;
camera.position.y = 100;
camera.position.z = 100;

hlight = new THREE.AmbientLight (0x404040,2);
scene.add(hlight);

//directionalLight = new THREE.DirectionalLight(0xffffff,10);
//directionalLight.position.set(0,1,0);
//directionalLight.castShadow = true;
//scene.add(directionalLight);

light = new THREE.PointLight(0xc4c4c4,5);
light.position.set(0,300,500);
scene.add(light);

light2 = new THREE.PointLight(0xc4c4c4,5);
light2.position.set(500,100,0);
scene.add(light2);

light3 = new THREE.PointLight(0xc4c4c4,5);
light3.position.set(0,100,-500);
scene.add(light3);

light4 = new THREE.PointLight(0xc4c4c4,5);
light4.position.set(-500,300,0);
scene.add(light4);

renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

controls = new THREE.OrbitControls(camera,renderer.domElement);
controls.addEventListener('change', renderer);

let loader = new THREE.GLTFLoader();
loader.load('../assets/Body1.gltf', function(gltf){
    char = gltf.scene.children[0];
    char.scale.set(80,80,80);
    scene.add(gltf.scene);
    renderer.render(scene,camera);
    animate();
});
function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
    console.log(camera.rotation);
};
}

init();