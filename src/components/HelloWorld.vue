<script setup>
import {ref, reactive, nextTick} from 'vue'
import * as THREE from 'three'
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
//引入性能监视器stats.js
import Stats from 'three/addons/libs/stats.module.js';

const webGlRef = ref(null)

let scene, mesh, camera, stats, renderer, geometry, material, width, height;

// 测试
const initThree = () => {
  initScene() // 场景
  initSun() // 太阳
  initCamera() // 相机
  initPointLight() // 光源
  initRender()
  initStats()
  initMercury() // 水星
  initVenus() // 金星
  initEarth() // 地球
  initMars() // 火星
  initJupiter() // 木星
  initSaturn() // 土星
  initUranus() // 天王星
  initNeptune() // 海王星
  initSunRotate() // 太阳自转
  atStars()
  backStars()
}

// 场景
const initScene = () => {
  width = webGlRef.value.offsetWidth; //宽度
  height = webGlRef.value.offsetHeight; //高度
  scene = new THREE.Scene()
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.getElementById('webgl').appendChild(renderer.domElement);
}

// sun
const initSun = () => {
  geometry = new THREE.SphereGeometry(300, 32, 16);
  // 添加纹理加载器
  const texLoader = new THREE.TextureLoader();
  const texture = texLoader.load('./sun.jpg');
  const material = new THREE.MeshBasicMaterial({
    // color:0x0000FF,
    map: texture,
    side: THREE.DoubleSide  //默认只渲染正面，这里设置双面渲染
  });

  mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  mesh.position.set(0, 0, 0)
  scene.add(mesh);
}

// 相机
const initCamera = () => {
  // 实例化一个透视投影相机对象
  camera = new THREE.PerspectiveCamera(30, width / height, 1, 50000000);
  //相机在Three.js三维坐标系中的位置
  // 根据需要设置相机位置具体值
  camera.position.set(3500, 1000, 10000);
  camera.lookAt(0, 10, 0);  //y轴上位置10
  // camera.lookAt(mesh.position);//指向mesh对应的位置
  renderer.render(scene, camera);
}

// 光源
const initPointLight = () => {
  const pointLight = new THREE.PointLight('#ffeedb', 2.0);
  pointLight.intensity = 2;//光照强度
  pointLight.decay = 2;//设置光源不随距离衰减
  pointLight.position.set(0, 0, 0);
  scene.add(pointLight); //点光源添加到场景中

  // 光源辅助观察
  const pointLightHelper = new THREE.PointLightHelper(pointLight, 10);
  scene.add(pointLightHelper);
  // pointLight.position.set(100, 200, 150);
}

// 监听性能
const initRender = () => {
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', function () {
    renderer.render(scene, camera); //执行渲染操作
  });//监听鼠标、键盘事件
}

// stats对象
const initStats = () => {
  stats = new Stats();
  stats.setMode(1);
  //stats.domElement:web页面上输出计算结果,一个div元素，
  document.body.appendChild(stats.domElement);
}

// 自转
const initSunRotate = () => {
  stats.update();
  renderer.render(scene, camera); //执行渲染操作
  mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
  requestAnimationFrame(initSunRotate);//请求再次执行渲染函数render，渲染下一帧
}

// 水星
const initMercury = () => {
  const geometrys = new THREE.SphereGeometry(5, 32, 16);
  const texLoader = new THREE.TextureLoader();
  const texture = texLoader.load('./mercury.jpg');
  const materials = new THREE.MeshPhysicalMaterial({
    map: texture,
    side: THREE.DoubleSide  //默认只渲染正面，这里设置双面渲染
  });

  const meshs = new THREE.Mesh(geometrys, materials); //网格模型对象Mesh
  meshs.position.set(-500, 0, 0)
  scene.add(meshs);

  function renderTemp() {
    renderer.render(scene, camera); //执行渲染操作
    meshs.rotateY(0.05);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(renderTemp);//请求再次执行渲染函数render，渲染下一帧
  }

  renderTemp()
  initPlanet(500)
  // 公转
  let angle = 0, speed = 0.025, distance = 500;

  function rotationMesh() {
    renderer.render(scene, camera); //执行渲染操作
    angle += speed;
    if (angle > Math.PI * 2) {
      angle -= Math.PI * 2;
    }

    meshs.position.set(distance * Math.sin(angle), 0, distance * Math.cos(angle));

    requestAnimationFrame(rotationMesh);//请求再次执行渲染函数render，渲染下一帧
  }

  rotationMesh()
}

// 金星
const initVenus = () => {
  const geometrys = new THREE.SphereGeometry(20, 32, 16);
  const texLoader = new THREE.TextureLoader();
  const texture = texLoader.load('./venus.jpg');
  const materials = new THREE.MeshPhysicalMaterial({
    map: texture,
    side: THREE.DoubleSide  //默认只渲染正面，这里设置双面渲染
  });

  const meshs = new THREE.Mesh(geometrys, materials); //网格模型对象Mesh
  meshs.position.set(600, 0, 0)
  scene.add(meshs);

  function renderTemp() {
    renderer.render(scene, camera); //执行渲染操作
    meshs.rotateY(0.05);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(renderTemp);//请求再次执行渲染函数render，渲染下一帧
  }

  renderTemp()
  initPlanet(600)
  // 公转
  let angle = 0, speed = 0.022, distance = 600;

  function rotationMesh() {
    renderer.render(scene, camera); //执行渲染操作
    angle += speed;
    if (angle > Math.PI * 2) {
      angle -= Math.PI * 2;
    }

    meshs.position.set(distance * Math.sin(angle), 0, distance * Math.cos(angle));

    requestAnimationFrame(rotationMesh);//请求再次执行渲染函数render，渲染下一帧
  }

  rotationMesh()
}

// 地球
const initEarth = () => {
  const geometrys = new THREE.SphereGeometry(21, 32, 16);
  const texLoader = new THREE.TextureLoader();
  const texture = texLoader.load('./earth.jpg');
  const materials = new THREE.MeshPhysicalMaterial({
    map: texture,
    side: THREE.DoubleSide  //默认只渲染正面，这里设置双面渲染
  });

  const meshs = new THREE.Mesh(geometrys, materials); //网格模型对象Mesh
  meshs.position.set(-850, 0, 0)
  scene.add(meshs);

  function renderTemp() {
    renderer.render(scene, camera); //执行渲染操作
    meshs.rotateY(0.05);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(renderTemp);//请求再次执行渲染函数render，渲染下一帧
  }

  renderTemp()
  initPlanet(850)
  // 公转
  let angle = 0, speed = 0.02, distance = 850;

  function rotationMesh() {
    renderer.render(scene, camera); //执行渲染操作
    angle += speed;
    if (angle > Math.PI * 2) {
      angle -= Math.PI * 2;
    }

    meshs.position.set(distance * Math.sin(angle), 0, distance * Math.cos(angle));

    requestAnimationFrame(rotationMesh);//请求再次执行渲染函数render，渲染下一帧
  }

  rotationMesh()
}

// 火星
const initMars = () => {
  const geometrys = new THREE.SphereGeometry(11, 32, 16);
  const texLoader = new THREE.TextureLoader();
  const texture = texLoader.load('./mars.jpg');
  const materials = new THREE.MeshPhysicalMaterial({
    map: texture,
    side: THREE.DoubleSide  //默认只渲染正面，这里设置双面渲染
  });

  const meshs = new THREE.Mesh(geometrys, materials); //网格模型对象Mesh
  meshs.position.set(1150, 0, 0)
  scene.add(meshs);

  function renderTemp() {
    renderer.render(scene, camera); //执行渲染操作
    meshs.rotateY(0.05);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(renderTemp);//请求再次执行渲染函数render，渲染下一帧
  }

  renderTemp()
  initPlanet(1150)
  // 公转
  let angle = 0, speed = 0.015, distance = 1150;

  function rotationMesh() {
    renderer.render(scene, camera); //执行渲染操作
    angle += speed;
    if (angle > Math.PI * 2) {
      angle -= Math.PI * 2;
    }

    meshs.position.set(distance * Math.sin(angle), 0, distance * Math.cos(angle));

    requestAnimationFrame(rotationMesh);//请求再次执行渲染函数render，渲染下一帧
  }

  rotationMesh()
}

// 木星
const initJupiter = () => {
  const geometrys = new THREE.SphereGeometry(100, 32, 16);
  const texLoader = new THREE.TextureLoader();
  const texture = texLoader.load('./jupiter.jpg');
  const materials = new THREE.MeshPhysicalMaterial({
    map: texture,
    side: THREE.DoubleSide  //默认只渲染正面，这里设置双面渲染
  });

  const meshs = new THREE.Mesh(geometrys, materials); //网格模型对象Mesh
  meshs.position.set(-1450, 0, 0)
  scene.add(meshs);

  function renderTemp() {
    renderer.render(scene, camera); //执行渲染操作
    meshs.rotateY(0.05);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(renderTemp);//请求再次执行渲染函数render，渲染下一帧
  }

  renderTemp()
  initPlanet(1450)
  // 公转
  let angle = 0, speed = 0.018, distance = 1450;

  function rotationMesh() {
    renderer.render(scene, camera); //执行渲染操作
    angle += speed;
    if (angle > Math.PI * 2) {
      angle -= Math.PI * 2;
    }

    meshs.position.set(distance * Math.sin(angle), 0, distance * Math.cos(angle));

    requestAnimationFrame(rotationMesh);//请求再次执行渲染函数render，渲染下一帧
  }

  rotationMesh()
}

// 土星
const initSaturn = () => {
  const geometrys = new THREE.SphereGeometry(80, 32, 16);
  const texLoader = new THREE.TextureLoader();
  const texture = texLoader.load('./saturn.jpg');
  const materials = new THREE.MeshPhysicalMaterial({
    map: texture,
    side: THREE.DoubleSide  //默认只渲染正面，这里设置双面渲染
  });

  const meshs = new THREE.Mesh(geometrys, materials); //网格模型对象Mesh
  meshs.position.set(1700, 0, 0)
  scene.add(meshs);

  function renderTemp() {
    renderer.render(scene, camera); //执行渲染操作
    meshs.rotateY(0.05);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(renderTemp);//请求再次执行渲染函数render，渲染下一帧
  }

  renderTemp()
  initPlanet(1700)
  // 公转
  let angle = 0, speed = 0.01, distance = 1700;

  function rotationMesh() {
    renderer.render(scene, camera); //执行渲染操作
    angle += speed;
    if (angle > Math.PI * 2) {
      angle -= Math.PI * 2;
    }

    meshs.position.set(distance * Math.sin(angle), 0, distance * Math.cos(angle));

    requestAnimationFrame(rotationMesh);//请求再次执行渲染函数render，渲染下一帧
  }

  rotationMesh()
}

// 天王星
const initUranus = () => {
  const geometrys = new THREE.SphereGeometry(45, 32, 16);
  const texLoader = new THREE.TextureLoader();
  const texture = texLoader.load('./uranus.jpg');
  const materials = new THREE.MeshPhysicalMaterial({
    map: texture,
    side: THREE.DoubleSide  //默认只渲染正面，这里设置双面渲染
  });

  const meshs = new THREE.Mesh(geometrys, materials); //网格模型对象Mesh
  meshs.position.set(-2000, 0, 0)
  scene.add(meshs);

  function renderTemp() {
    renderer.render(scene, camera); //执行渲染操作
    meshs.rotateY(0.05);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(renderTemp);//请求再次执行渲染函数render，渲染下一帧
  }

  renderTemp()
  initPlanet(2000)
  // 公转
  let angle = 0, speed = 0.008, distance = 2000;

  function rotationMesh() {
    renderer.render(scene, camera); //执行渲染操作
    angle += speed;
    if (angle > Math.PI * 2) {
      angle -= Math.PI * 2;
    }

    meshs.position.set(distance * Math.sin(angle), 0, distance * Math.cos(angle));

    requestAnimationFrame(rotationMesh);//请求再次执行渲染函数render，渲染下一帧
  }

  rotationMesh()
}

// 海王星
const initNeptune = () => {
  const geometrys = new THREE.SphereGeometry(45, 32, 16);
  const texLoader = new THREE.TextureLoader();
  const texture = texLoader.load('./neptune.jpg');
  const materials = new THREE.MeshPhysicalMaterial({
    map: texture,
    side: THREE.DoubleSide  //默认只渲染正面，这里设置双面渲染
  });

  const meshs = new THREE.Mesh(geometrys, materials); //网格模型对象Mesh
  meshs.position.set(2300, 0, 0)
  scene.add(meshs);
  initPlanet(2300)
  meshs.rotation.y = 100;//每次绕y轴旋转0.01弧度

  function renderTemp() {
    renderer.render(scene, camera); //执行渲染操作
    meshs.rotateY(0.05);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(renderTemp);//请求再次执行渲染函数render，渲染下一帧
  }

  renderTemp()
  // 公转
  let angle = 0, speed = 0.005, distance = 2300;

  function rotationMesh() {
    renderer.render(scene, camera); //执行渲染操作
    angle += speed;
    if (angle > Math.PI * 2) {
      angle -= Math.PI * 2;
    }

    meshs.position.set(distance * Math.sin(angle), 0, distance * Math.cos(angle));

    requestAnimationFrame(rotationMesh);//请求再次执行渲染函数render，渲染下一帧
  }

  rotationMesh()
}

// 公转轨迹
const initPlanet = (distance) => {
  /*轨道*/
  let track = new THREE.Mesh(new THREE.RingGeometry(distance - 0.2, distance + 0.2, 64, 1),
      new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide})
  );
  track.rotation.x = -Math.PI / 2;
  scene.add(track);
}

// 奥尔特云层
const atStars = () => {
  /*背景星星*/
  const particles = 30000;  //星星数量
  /*buffer做星星*/
  const bufferGeometry = new THREE.BufferGeometry();

  /*32位浮点整形数组*/
  let positions = new Float32Array( particles * 3 );
  let colors = new Float32Array( particles * 3 );

  let color = new THREE.Color();

  const gap = 80000; // 定义星星的最近出现位置
  for ( let i = 0; i < positions.length; i += 3 ) {
    // positions

    /*-gap < x < gap */
    let x = ( Math.random() * gap )* (Math.random()<.5? -1 : 1);
    let y = ( Math.random() * gap )* (Math.random()<.5? -1 : 1);
    let z = ( Math.random() * gap )* (Math.random()<.5? -1 : 1);

    /*找出x,y,z中绝对值最大的一个数*/
    let biggest = Math.abs(x) > Math.abs(y) ? Math.abs(x) > Math.abs(z) ?　'x' : 'z' :
        Math.abs(y) > Math.abs(z) ? 'y' : 'z';

    let pos = { x, y, z};

    /*如果最大值比n要小（因为要在一个距离之外才出现星星）则赋值为n（-n）*/
    if(Math.abs(pos[biggest]) < gap) pos[biggest] = pos[biggest] < 0 ? -gap : gap;

    x = pos['x'];
    y = pos['y'];
    z = pos['z'];

    // positions[ i ]     = x;
    // positions[ i + 1 ] = y;
    // positions[ i + 2 ] = z;

    positions[ i ]     = gap * Math.sin(Math.acos(Math.abs(z) / gap)) * Math.cos(Math.atan(Math.abs(y) / Math.abs(x))) * (x/Math.abs(x));
    positions[ i + 1 ] = gap * Math.sin(Math.acos(Math.abs(z) / gap)) * Math.sin(Math.atan(Math.abs(y) / Math.abs(x))) * (y/Math.abs(y));
    positions[ i + 2 ] = gap * Math.cos(Math.acos(Math.abs(z) / gap)) * (z/Math.abs(z));

    // positions[ i ]     = Math.atan(y/x) * (x/Math.abs(x));
    // positions[ i + 1 ] = Math.sqrt(gap * gap - (Math.atan(y/x)) * Math.atan(y/x) + gap * Math.sin(Math.atan((y / x))) * gap * Math.sin(Math.atan((y / x)))) * (z/Math.abs(z));
    // positions[ i + 2 ] = gap * Math.sin(Math.atan((y / x))) * (y/Math.abs(y));

    // colors
    // colors
    /*70%星星有颜色*/
    let hasColor = Math.random() > 0.3;
    let vx, vy, vz;

    if(hasColor){
      vx = (Math.random()+1) / 2 ;
      vy = (Math.random()+1) / 2 ;
      vz = (Math.random()+1) / 2 ;
    }else{
      vx = 1 ;
      vy = 1 ;
      vz = 1 ;
    }

    color.setRGB( vx, vy, vz );

    colors[ i ]     = color.r;
    colors[ i + 1 ] = color.g;
    colors[ i + 2 ] = color.b;
  }
  // console.log(positions, "positions >>>>>>>>>>>>>>>")
  bufferGeometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
  bufferGeometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
  bufferGeometry.computeBoundingSphere();

  /*星星的material*/
  let material = new THREE.PointsMaterial( { size: 6, vertexColors: THREE.VertexColors } );
  const particleSystem = new THREE.Points( bufferGeometry, material );
  scene.add( particleSystem );

}

// 背景星体
const backStars = () => {
  /*背景星星*/
  const particles = 50000;  //星星数量
  /*buffer做星星*/
  const bufferGeometry = new THREE.BufferGeometry();

  /*32位浮点整形数组*/
  let positions = new Float32Array( particles * 3 );
  let colors = new Float32Array( particles * 3 );

  let color = new THREE.Color();

  const gap = 10000000; // 定义星星的最近出现位置
  for ( let i = 0; i < positions.length; i += 3 ) {
    // positions

    /*-gap < x < gap */
    let x = ( Math.random() * 6 * gap ) * (Math.random()<.5? -1 : 1);
    let y = ( Math.random() * 6 * gap ) * (Math.random()<.5? -1 : 1);
    let z = ( Math.random() * 6 * gap ) * (Math.random()<.5? -1 : 1);

    /*找出x,y,z中绝对值最大的一个数*/
    let biggest = Math.abs(x) > Math.abs(y) ? Math.abs(x) > Math.abs(z) ?　'x' : 'z' :
        Math.abs(y) > Math.abs(z) ? 'y' : 'z';

    let pos = { x, y, z};

    /*如果最大值比n要小（因为要在一个距离之外才出现星星）则赋值为n（-n）*/
    if(Math.abs(pos[biggest]) <  (gap)) pos[biggest] = pos[biggest] < 0 ? - gap :  gap;

    x = pos['x'];
    y = pos['y'];
    z = pos['z'];

    // positions[ i ]     = x;
    // positions[ i + 1 ] = y;
    // positions[ i + 2 ] = z;
    let tempGap = Math.sqrt(x * x + y * y + z * z) >  6 * gap ?  6 * gap : Math.sqrt(x * x + y * y + z * z)

    positions[ i ]     = tempGap * Math.sin(Math.acos(Math.abs(z) / tempGap)) * Math.cos(Math.atan(Math.abs(y) / Math.abs(x))) * (x/Math.abs(x));
    positions[ i + 1 ] = tempGap * Math.sin(Math.acos(Math.abs(z) / tempGap)) * Math.sin(Math.atan(Math.abs(y) / Math.abs(x))) * (y/Math.abs(y));
    positions[ i + 2 ] = tempGap * Math.cos(Math.acos(Math.abs(z) / tempGap)) * (z/Math.abs(z));

    // positions[ i ]     = Math.atan(y/x) * (x/Math.abs(x));
    // positions[ i + 1 ] = Math.sqrt(gap * gap - (Math.atan(y/x)) * Math.atan(y/x) + gap * Math.sin(Math.atan((y / x))) * gap * Math.sin(Math.atan((y / x)))) * (z/Math.abs(z));
    // positions[ i + 2 ] = gap * Math.sin(Math.atan((y / x))) * (y/Math.abs(y));

    // colors
    // colors
    /*70%星星有颜色*/
    let hasColor = Math.random() > 0.3;
    let vx, vy, vz;

    if(hasColor){
      vx = (Math.random()+1) / 2 ;
      vy = (Math.random()+1) / 2 ;
      vz = (Math.random()+1) / 2 ;
    }else{
      vx = 1 ;
      vy = 1 ;
      vz = 1 ;
    }

    color.setRGB( vx, vy, vz );

    colors[ i ]     = color.r;
    colors[ i + 1 ] = color.g;
    colors[ i + 2 ] = color.b;
  }
  // console.log(positions, "positions >>>>>>>>>>>>>>>")
  bufferGeometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
  bufferGeometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) );
  bufferGeometry.computeBoundingSphere();

  /*星星的material*/
  let material = new THREE.PointsMaterial( { size: 6, vertexColors: THREE.VertexColors } );
  const particleSystem = new THREE.Points( bufferGeometry, material );
  scene.add( particleSystem );

}

nextTick(() => {
  initThree()
})

defineProps({
  msg: String,
})

</script>

<template>
  <div class="webGl-box" ref="webGlRef">
    <div id="webgl"></div>
  </div>
</template>

<style scoped>
#webgl {
  width: 100vh;
  height: 100vh;
  color: #107bff;
}
</style>
