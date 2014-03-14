var THREE = require('../libs/three.js');
var ClipMap = require('./clipMap');

var Edge = {
    NONE: 0,
    TOP: 1,
    LEFT: 2,
    BOTTOM: 4,
    RIGHT: 8
};

var terrain = function (resolution, radius, clipMapCount) {

    THREE.Object3D.call( this );

    this.radius = radius;
    this.resolution = resolution;
    this.clipMapCount = clipMapCount;

    this.geometry = new THREE.PlaneGeometry(1, 1, resolution, resolution);

    this.position = new THREE.Vector3(0, 0, 0);
    this.clipMaps = [];

    this.createClipMaps();

}

terrain.prototype = Object.create( THREE.Object3D.prototype );

terrain.prototype = {

    update: function (cameraPosition) {

    },

    createClipMaps: function(){
        var scale = this.radius;
        for(var i = 0; i < this.clipMapCount; i++){

            this.clipMap[i] = new ClipMap(scale, this.geometry);

            scale /= 2;

        }
    }

};

module.exports = terrain;

	
