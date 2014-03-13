var THREE = require('../libs/three.js');


var terrain = function (resolution, radius, clipMapCount) {

    THREE.Object3D.call( this );

    this.geometry = new THREE.PlaneGeometry(1, 1, resolution, resolution);

    this.position = new THREE.Vector3(0, 0, 0);

}

terrain.prototype = {

    update: function (cameraPosition) {

    },


    createClipMap: function(x, y, scale, edgeMorph){

    }

};

module.exports = terrain;

	
