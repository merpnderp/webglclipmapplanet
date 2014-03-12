/*
	A simple bootstrap file to test and demo the library
*/


var THREE = require('../libs/three.js');
var scene = require('./scene.js');
var camera = require('./camera.js');
var renderer = require('./renderer.js');
var SphericalTerrain = require('./sphericalTerrain.js');

var clock = new THREE.Clock();

var terrain = new SphericalTerrain();

scene.add(terrain);

function animate(){

	window.requestAnimationFrame(animate);
	
	renderer.render(scene, camera);

}
