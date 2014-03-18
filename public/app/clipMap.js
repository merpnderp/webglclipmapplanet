var THREE = require('../libs/three.js');

var Edge = {
    NONE: 0,
    TOP: 1,
    LEFT: 2,
    BOTTOM: 4,
    RIGHT: 8
};

var clipMap = function (scale, geo) {
    this.hidden = false;
    this.geo = geo;
    this.meshes = [];
    // Create center layer first
    // +---+---+
    // | O | O |
    // +---+---+
    // | O | O |
    // +---+---+
    this.createTile(-scale, -scale, scale, Edge.NONE);
    this.createTile(-scale, 0, scale, Edge.NONE);
    this.createTile(0, 0, scale, Edge.NONE);
    this.createTile(0, -scale, scale, Edge.NONE);

    // Create "quadtree" of tiles, with smallest in center
    // Each added layer consists of the following tiles (marked 'A'), with the tiles
    // in the middle being created in previous layers
    // +---+---+---+---+
    // | A | A | A | A |
    // +---+---+---+---+
    // | A |   |   | A |
    // +---+---+---+---+
    // | A |   |   | A |
    // +---+---+---+---+
    // | A | A | A | A |
    // +---+---+---+---+

    this.createTile(-2 * scale, -2 * scale, scale, Edge.BOTTOM | Edge.LEFT);
    this.createTile(-2 * scale, -scale, scale, Edge.LEFT);
    this.createTile(-2 * scale, 0, scale, Edge.LEFT);
    this.createTile(-2 * scale, scale, scale, Edge.TOP | Edge.LEFT);

    this.createTile(-scale, -2 * scale, scale, Edge.BOTTOM);
    // 2 tiles 'missing' here are in previous layer
    this.createTile(-scale, scale, scale, Edge.TOP);

    this.createTile(0, -2 * scale, scale, Edge.BOTTOM);
    // 2 tiles 'missing' here are in previous layer
    this.createTile(0, scale, scale, Edge.TOP);

    this.createTile(scale, -2 * scale, scale, Edge.BOTTOM | Edge.RIGHT);
    this.createTile(scale, -scale, scale, Edge.RIGHT);
    this.createTile(scale, 0, scale, Edge.RIGHT);
    this.createTile(scale, scale, scale, Edge.TOP | Edge.RIGHT);

}

clipMap.prototype = {

    hide: function(){
        this.hidden = true;
        this.meshes.forEach(function(mesh){
           mesh.visible = false;
        });
    },

    show: function(){
        this.hidden = false;
        this.meshes.forEach(function(mesh){
            mesh.visible = true;
        });
    },

    createTile: function (x, y, scale, edgeMorphy) {

        var terrainMaterial = new THREE.MeshBasicMaterial();
        this.meshes.push(new THREE.Mesh(this.geo, terrainMaterial));

    }
};

module.exports = clipMap;