/**
 * Created by kalebmurphy on 3/18/14.
 */

var terrainCamera = function (radius, fov, resolution, pixels) {
    this.fov = fov;
    this.resolution = resolution;
    this.pixels = pixels;
    this.phi = 0;
    this.theta = 0;
    this.viewTheta = 0;
    this.height = 0;
    this.position = 0;
    this.radius = radius;
};

terrainCamera.prototype = {
    update: function (localCameraPosition) {
        this.phi = Math.atan2(this.localCameraPosition.x, this.localCameraPosition.x);
        this.theta = Math.acos(this.localCameraPosition.y); //0 at north pole, PI at south pole
        this.height = localCameraPosition.length() - this.radius;
        this.position = localCameraPosition;
        this.viewTheta = this.getViewTheta(this.height);
    },

    getViewTheta: function (height) {
        var vs = Math.tan(this.fov / this.pixels);
        var lt = ( (height * vs) / this.radius ) * this.resolution;

        return lt;
    }
};


module.exports = terrainCamera;
