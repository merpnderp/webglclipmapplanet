var THREE = require('../libs/three.js');
var ClipMap = require('./clipMap');
var TerrainCamera = require('./terrainCamera');
var localCameraPosition = new THREE.Vector3();
var settings = require('./settings.js');

var Terrain = function (resolution, radius, clipMapCount) {

    THREE.Object3D.call(this);

    this.radius = radius;
    this.resolution = resolution;
    this.clipMapCount = clipMapCount;

    this.geometry = new THREE.PlaneGeometry(1, 1, resolution, resolution);

    this.position = new THREE.Vector3(0, 0, 0);
    this.clipMaps = [];

    this.terrainCamera = new TerrainCamera(radius, settings.fov, resolution, Window.innerWidth);

    this.clipMapCount = this.terrainCamera.getViewTheta(settings.minPossibleHeight);
    this.clipMapCount = Math.floor((Math.log(1 / (this.clipMapCount / Math.PI))) / Math.log(2));

    this.createClipMaps();

}

Terrain.prototype = Object.create(THREE.Object3D.prototype);

Terrain.prototype = {

    update: function (cameraPosition) {
        this.updateCameraPosition(cameraPosition);
        this.updateClipMaps();
    },

    updateCameraPosition: function (cameraPosition) {
        localCameraPosition.copy(cameraPosition);
        this.worldToLocal(localCameraPosition);
        this.terrainCamera.update(localCameraPosition);
    },


    updateClipMaps: function () {

        var maxTheta = this.getViewTheta(this.terrainCamera.height);
        var minTheta = this.terrainCamera.viewTheta;

        for (var i = 0; i < this.clipMapCount; i++) {
            if (this.clipMaps[i].theta > minTheta || this.clipMaps[i].theta < minTheta) {
                if (!this.clipMaps[i].hidden) {
                    this.clipMaps[i].hide();
                }
            } else {
                if (this.clipMaps[i].hidden) {
                    this.clipMaps[i].show();
                }
								this.clipMaps[i].theta = this.terrainCamera.theta;
								this.clipMaps[i].phi = this.terrainCamera.phi;
                //snap positions to grid
            }
        }

    },

    createClipMaps: function () {
        var scale = this.radius;
        for (var i = 0; i < this.clipMapCount; i++) {

            this.clipMaps[i] = new ClipMap(scale, this.geometry);
            this.clipMaps[i].theta = this.getViewTheta(scale / 2);//get inner ring theta

            this.children.concat(this.clipMaps[i].meshes);

            scale = scale / 2;
        }
    },

    getViewTheta: function (height) {
        return Math.acos(this.radius / (this.radius + height));
    }
};

module.exports = Terrain;

	
