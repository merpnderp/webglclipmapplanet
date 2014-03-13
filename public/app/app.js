/*
 A simple bootstrap file to test and demo the library
 */

var fov = 90, resolution = 32, radius = 6378137, lowestPossibleHeight = 2;

var numberOfClipMapLevels = require('./numberOfClipMapLevelsFinder');
var scene = require('./scene.js')();
var camera = require('./camera.js')({fov: fov});
var renderer = require('./renderer.js')();

var clipMapCount = numberOfClipMapLevels(radius, resolution, fov, lowestPossibleHeight );

var SphericalTerrain = require('./sphericalTerrain.js');

var terrain = new SphericalTerrain(resolution, radius, clipMapCount);

scene.add(terrain);

function animate() {

    window.requestAnimationFrame(animate);

    renderer.render(scene, camera);

}
