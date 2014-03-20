
var THREE = require('../libs/three.js');

var terrainMaterial = function(){
		
};

terrainMaterial.prototype = {

	createTerrainSphereMaterial: function(){
		return new THREE.ShaderMaterial({
		});
	},
	createTerrainPlaneMaterial: function(){
	}
};

module.exports = terrainMaterial;


