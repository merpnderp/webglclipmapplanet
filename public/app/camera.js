var THREE = require('../libs/three.js');

module.exports = function (options) {

    var fov = options.fov ? options.fov : 90;

    var camera = new THREE.PerspectiveCamera(fov, 1, 1, 7000000);
    camera.position.z = 80;
    camera.up = new THREE.Vector3(0, 0, 1);

    var updateSize = function () {
        camera.aspect = container.offsetWidth / container.offsetHeight;
        camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', updateSize, false);
    updateSize();

    return camera;
}
