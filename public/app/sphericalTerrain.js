


var THREE = require('../libs/three.js');


var terrain = function(resolution){
	this.geometry = new THREE.PlaneGeometry(1, 1,	resolution, resolution);

	this.position = new THREE.Vector3(0, 0, 0);


}

	
