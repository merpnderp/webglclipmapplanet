/*
 A simple bootstrap file to test and demo the library
 */

var resolution = 32, radius = 6378137;

var numberOfClipMapLevels = require('./numberOfClipMapLevelsFinder');
var scene = require('./scene.js')();
var camera = require('./camera.js')();
var renderer = require('./renderer.js')();
var settings = require('./settings');

var clipMapCount = numberOfClipMapLevels(radius, resolution, fov, settings.lowestPossibleHeight);

var Terrain = require('./terrain.js');



var terrain = new Terrain(resolution, radius, clipMapCount, fov, );

scene.add(terrain);

function animate() {

    window.requestAnimationFrame(animate);

    terrain.update(camera.position);

    renderer.render(scene, camera);

}

animate();
