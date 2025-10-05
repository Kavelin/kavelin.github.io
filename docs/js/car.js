const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialiasing: false,
});
renderer.setSize(
  document.querySelector(".main").clientWidth - 40,
  ((document.querySelector(".main").clientWidth - 40) * 1.5) / 4
);
document.querySelector(".main").appendChild(renderer.domElement);
const scene = new THREE.Scene();
const modelLoader = new THREE.GLTFLoader();
const textLoader = new THREE.TextureLoader();
let car = new THREE.Group();
modelLoader.load(
  "media/2015_honda_cr-v/scene.gltf",
  (gltf) => {
    car.add(gltf.scene);
  },
  (xhr) => console.log((xhr.loaded / xhr.total) * 100 + "% loaded"),
  (error) => console.error("An error happened", error)
);
textLoader.load(
  "media/stickers/driving-scare.png",
  function (texture) {
    const geometry = new THREE.PlaneGeometry(0.16, 0.08);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = -Math.PI;
    mesh.position.z -= 1.55;
    mesh.position.y += 0.1;
    car.add(mesh);
  },
  undefined,
  function (err) {
    console.error("An error occurred loading the texture:", err);
  }
);
textLoader.load(
  "media/stickers/Raspberry_Pi_Logo.png",
  function (texture) {
    const geometry = new THREE.PlaneGeometry(0.08, 0.1);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = -Math.PI;
    mesh.position.z -= 1.52;
    mesh.position.x -= 0.4;
    mesh.position.y += 0.2;
    car.add(mesh);
  },
  undefined,
  function (err) {
    console.error("An error occurred loading the texture:", err);
  }
);
textLoader.load(
  "media/stickers/262.png",
  function (texture) {
    const geometry = new THREE.PlaneGeometry(0.12, 0.09);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = -Math.PI;
    mesh.position.z -= 1.51;
    mesh.position.x += 0.4;
    mesh.position.y += 0.2;
    car.add(mesh);
  },
  undefined,
  function (err) {
    console.error("An error occurred loading the texture:", err);
  }
);

textLoader.load(
  "media/stickers/cowgirl.png",
  function (texture) {
    const geometry = new THREE.PlaneGeometry(0.145, 0.071);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = -Math.PI - 0.1;
    mesh.position.z -= 1.47;
    mesh.position.x += 0.4;
    mesh.position.y += 0.3;
    car.add(mesh);
  },
  undefined,
  function (err) {
    console.error("An error occurred loading the texture:", err);
  }
);

textLoader.load(
  "media/stickers/machine.png",
  function (texture) {
    const geometry = new THREE.PlaneGeometry(0.162, 0.087);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = -Math.PI;
    mesh.position.z -= 1.512;
    mesh.position.x -= 0.4;
    mesh.position.y += 0.3;
    car.add(mesh);
  },
  undefined,
  function (err) {
    console.error("An error occurred loading the texture:", err);
  }
);

textLoader.load(
  "media/stickers/xbox360.png",
  function (texture) {
    const geometry = new THREE.PlaneGeometry(0.12, 0.06);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = -Math.PI;
    mesh.position.z -= 1.512;
    mesh.position.x -= 0.3;
    mesh.position.y += 0.4;
    car.add(mesh);
  },
  undefined,
  function (err) {
    console.error("An error occurred loading the texture:", err);
  }
);

const camera = new THREE.PerspectiveCamera(10, 4 / 1.5, 0.1, 1000);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.update();

const light = new THREE.AmbientLight(0xffffff, 2); // soft white light
scene.add(light);
car.rotation.y = -Math.PI;
scene.add(car);
camera.position.z = 7;
function animate() {
  renderer.render(scene, camera);

  renderer.setSize(
    document.querySelector(".main").clientWidth - 40,
    ((document.querySelector(".main").clientWidth - 40) * 1.5) / 4
  );
}
renderer.setAnimationLoop(animate);
