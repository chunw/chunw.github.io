var rendererWidth = 40;
var rendererHeight = 40;
var rendererElement = "#three-d-demo";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, rendererWidth/rendererHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true});

renderer.setSize( rendererWidth, rendererHeight );
$(rendererElement).append( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xccffff } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 2;

var render = function () {
	requestAnimationFrame( render );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
};

render();